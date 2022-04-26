const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem(
                'Profile',
                JSON.stringify({ ...action?.data.data })
            );
            return { ...state, data: action?.data.data };

        case 'LOGOUT':
            localStorage.removeItem('Profile');
            return { ...state, data: '' };

        default:
            return state;
    }
};

export default authReducer;
