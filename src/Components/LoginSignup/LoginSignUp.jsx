import React, { useState } from 'react';
import './Loginsignup.css';

import Login from '../Login/Login';
import ResetPassword from '../ResetPassword/ResetPassword';

const LoginSignUp = () => {
    const [action, setAction] = useState("Login");
    const [userRole, setUserRole] = useState(null);

    return (
        <>
            <div className='container'>
                {action === "Login" ? <Login setUserRole={setUserRole} /> : <ResetPassword />}
                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("ResetPassword") }}>Reset Password</div>
                    <div className={action === "ResetPassword" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>SignIn</div>
                </div>
            </div>
            <footer class="footer">
                &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights reserved!
            </footer>    
        </>
    );
};

export default LoginSignUp;