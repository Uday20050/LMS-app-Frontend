import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles.css'
import java from '../Assets/java.jpg';
import aws from '../Assets/aws.png'
import devops from '../Assets/devops.jpg'


function Courses({ isLoggedIn }) {

    const navigate = useNavigate()


 const goToPlaylist = () => {
   if (isLoggedIn) {
     navigate('/playlist');
   } else {
     navigate('/login');
   }
 };


  return (

<>

    
   <body>
<section class="courses">

   {/* <h1 class="heading">Our courses</h1> */}

   <div class="box-container">

      <div class="box">
        
         <div class="thumb">
            <img src={java} alt="JAVA Image"/>
            {/* <span>10 videos</span> */}
         </div>
         <h3 class="title">Complete JAVA tutorial</h3>
         <button class="inline-btn" onClick={()=> goToPlaylist()}>view playlist</button>
      </div>

      <div class="box">
         
         <div class="thumb">
            <img src={aws} alt="" />
            {/* <span>10 videos</span> */}
         </div>
         <h3 class="title">Complete AWS tutorial</h3>
         <button class="inline-btn" onClick={()=> goToPlaylist()}>view playlist</button>
      </div>
      <div class="box">
         
         <div class="thumb">
            <img src={devops} alt="" />
            {/* <span>10 videos</span> */}
         </div>
         <h3 class="title">Complete DevOps tutorial</h3>
         <button class="inline-btn" onClick={()=> goToPlaylist()}>view playlist</button>
      </div>

      <div class="box">
         
         <div class="thumb">
            <img src={devops} alt="" />
            {/* <span>10 videos</span> */}
         </div>
         <h3 class="title">Complete DevOps tutorial</h3>
         <button  class="inline-btn" onClick={()=> goToPlaylist()}>view playlist</button>
      </div>
</div>
      </section>
               
               
 <footer class="footer">

&copy; copyright @ 2024 by <span>ManthaTech Solutions</span> | all
rights reserved!

</footer>              

</body>

</>

      

  )
}

export default Courses
