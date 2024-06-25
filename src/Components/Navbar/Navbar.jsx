import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ userRole, isLoggedIn , handleLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='nav'>
      <div className="nav-logo">Learning Management System</div>
      <div className="hamburger" onClick={toggleMenu}> 
        &#9776; Hamburger icon
       </div>
      <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        <li>
          <Link to="/" ><i className="fas fa-home" onClick={() => setMenuOpen(false)}></i><span> Home</span></Link>
        </li>
        <li>
          <Link to="/About" ><i className="fas fa-info-circle" onClick={() => setMenuOpen(false)}></i><span> About</span></Link>
        </li>
        {isLoggedIn ? (
                <>
                    <li>
                        <Link to="/Courses" onClick={() => setMenuOpen(false)}>
                            <i className="fas fa-book"></i><span> Courses</span>
                        </Link>
                    </li>
                    {userRole === 'ADMIN' && (
                        <li>
                            <Link to="/Admin" onClick={() => setMenuOpen(false)}>
                                <i className="fas fa-book"></i><span> Admin</span>
                            </Link>
                        </li>
                    )}
                    <li>
                    <Link to="/Login" onClick={() => { setMenuOpen(false); handleLogout(); }}>
                        <i className="fas fa-user"></i><span> Logout</span>
                    </Link>
                </li>
                </>
            ) : (
                <li>
                    <Link to="/Login" onClick={() => setMenuOpen(false)}>
                        <i className="fas fa-user"></i><span> Login</span>
                    </Link>
                </li>
            )}
        
      </ul>
    </div>

  
  );


}

export default Navbar;
