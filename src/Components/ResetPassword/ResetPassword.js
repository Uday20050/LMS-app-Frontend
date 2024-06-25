import React from 'react';
import '../LoginSignup/Loginsignup.css'; // Create this CSS file for styling if needed
import password_icon from '../Assets/password.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const ResetPassword = () => {

    
        const [passwordDetail, setPasswordDetail] = useState({
          newPassword: '',
          confirmPassword: '',
        });
      
        const [message, setMessage] = useState('');
        const [messageType, setMessageType] = useState('');
        const navigate = useNavigate();
      
        const handleChange = (event, field) => {
          let actualValue = event.target.value;
          setPasswordDetail({
            ...passwordDetail,
            [field]: actualValue,
          });
        };
      
        const handleReset = (event) => {
          event.preventDefault();
          if (passwordDetail.newPassword !== passwordDetail.confirmPassword) {
            alert('Passwords do not match');
            return;
          }
      
          const token = localStorage.getItem('token');
          const config = {
            headers: { Authorization: `Bearer ${token}` }
          };
      
          const newPassword = encodeURIComponent(passwordDetail.newPassword);
      
          axios.post(`http://localhost:8080/auth/change-password?newPassword=${newPassword}`, {}, config)
            .then((response) => {
              console.log('Password reset response:', response.data);
              setMessageType('success');
              setMessage('Password reset successful');
      
              // setTimeout(() => {
              //   navigate('/login'); // Redirect to login page after a short delay
              // }, 3000);
              alert('Password reset successful');
              navigate('/login'); // Redirect to login page after successful password reset
            })
            .catch((error) => {
              console.error('Password reset error:', error);
              alert('Password reset failed');
            });
        };
      



    return (
        <div className='container'>
            <div className='header'>
                <div className="text">Reset Password</div>
                <div className="underline"></div>
            </div>
            
            <div className="inputs">
                {/* <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Old Password" />
                </div> */}
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="New Password"
                    name="newPassword" 
                    value={passwordDetail.newPassword}
                    onChange={(e) => handleChange(e, 'newPassword')}/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Confirm Password"
                    name="confirmPassword"
                    value={passwordDetail.confirmPassword}
                    onChange={(e) => handleChange(e, 'confirmPassword')} />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={handleReset} >Set Password</div>
            </div>
        </div>
    );
};


export default ResetPassword;
