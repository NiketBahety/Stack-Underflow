import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import AllRoutes from './allRoutes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <AllRoutes />
            </Router>
        </div>
    );
}

export default App;
