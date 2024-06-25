import React from 'react';
import About1 from '../Assets/About1.jpg';
import About2 from '../Assets/About2.jpg';
import '../Styles.css'
import {  useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Courses');
};
  return (
    <div>
      
      <section className="about">
        <div className="row">
          <div className="image">
            <img src={About1} alt="About us" />
          </div>
          <div className="content">
            <h3>Why choose us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum quasi illo? Distinctio expedita commodi, nemo a quam error repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur quaerat tenetur.</p>
            <button className="inline-btn" onClick={handleClick}>Our courses</button>
          </div>
          
          <div className="content">
            <h3>Why choose us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum quasi illo? Distinctio expedita commodi, nemo a quam error repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur quaerat tenetur.</p>
          
            <button className="inline-btn" onClick={handleClick} >Our courses</button>
          
          </div>
          <div className="image">
            <img src={About2} alt="About us" />
          </div>
        </div>
      </section>
      <footer className="footer">
        &copy; copyright @ 2024 by <span>ManthaTech Solutions</span> | all
        rights reserved!
      </footer>
    </div>
  );
}

export default About;
