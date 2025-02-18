import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Loginpage';
// import Dashboard from './Dashboard';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Correctly passing the JSX component */}
                    <Route path="/" element={<LoginPage />} />
                    {/* Uncomment the next line when Dashboard is ready */}
                    {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
