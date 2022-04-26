import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './auth.css';
import logo from '../../assets/logo.png';
import { login, signup } from '../../redux/actions/authActions';
import { setCurrentUser } from '../../redux/actions/currentUser';

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let user = useSelector((state) => state.currentUserReducer);

    useEffect(() => {
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    }, [dispatch]);

    const [isSignup, setIsSignUp] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSwitch = () => {
        setIsSignUp(!isSignup);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            if (!name) alert('Name is required !');
            else if (!email || !password)
                alert('Email and password is required !');
            else dispatch(signup({ name, email, password }, navigate));
        } else {
            if (!email || !password) alert('Email and password is required !');
            else dispatch(login({ email, password }, navigate));
        }
    };

    return (
        <section className="authSection">
            {user === null ? (
                <div className="auth-container">
                    {!isSignup && (
                        <img
                            src={logo}
                            alt="Stack Overflow"
                            className="logo"
                        ></img>
                    )}
                    <form onSubmit={handleSubmit}>
                        {isSignup && (
                            <label htmlFor="name">
                                <h4>Display Name</h4>
                                <input
                                    className="inp"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </label>
                        )}
                        <label htmlFor="email">
                            <h4>Email</h4>
                            <input
                                className="inp"
                                type="email"
                                name="email"
                                id="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </label>
                        <label htmlFor="password">
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <h4>Password</h4>
                                {!isSignup && (
                                    <p
                                        style={{
                                            color: '#007ac6',
                                            fontSize: '13px',
                                        }}
                                    >
                                        forgot Password?
                                    </p>
                                )}
                            </div>
                            <input
                                className="inp"
                                type="password"
                                name="password"
                                id="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </label>
                        {isSignup && (
                            <p>
                                Password must contain atleat 8 characters with
                                atleast with 1 letter and 1 number
                            </p>
                        )}
                        {isSignup && (
                            <label htmlFor="check" className="check">
                                <input
                                    type="checkbox"
                                    name="check"
                                    id="check"
                                />
                                <p>
                                    Opt in to recieve occasional emails, product
                                    updates and announcements
                                </p>
                                <br />
                            </label>
                        )}
                        <button type="submit" className="auth-btn">
                            {isSignup ? 'Sign Up' : 'Log In'}
                        </button>
                    </form>
                    <p>
                        {isSignup
                            ? 'Already have an account ?'
                            : "Don't have an account?"}
                        <button
                            type="button"
                            className="handle-switch-button"
                            onClick={handleSwitch}
                        >
                            {isSignup ? 'Log In' : 'Sign Up'}
                        </button>
                    </p>
                    {isSignup && (
                        <p style={{ marginTop: '0' }}>
                            By clicking signup you agree to our{' '}
                            <span> terms and conditions </span>
                            and <span> privacy policy </span>
                        </p>
                    )}
                </div>
            ) : (
                <>{navigate('/')}</>
            )}
        </section>
    );
};

export default Auth;
