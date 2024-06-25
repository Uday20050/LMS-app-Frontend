import React from 'react'
import Javapart1 from '../Assets/Javapart1.jpg';
import '../Styles.css'
import { useNavigate } from 'react-router-dom';

function PlayList() {
   const navigate = useNavigate()
   const goToWatchVideo = () => {
      navigate('/watchvideo');
    };

  return (
    <div>
       
   <body>
  

<section class="playlist-details">

<h1 class="heading">playlist details</h1>

<div class="row">

   <div class="column">
      {/* <form action="" method="post" class="save-playlist">
         <button type="submit"><i class="far fa-bookmark"></i> <span>save playlist</span></button>
      </form> */}

      <div class="thumb">
         <img src={Javapart1} alt="" />
         {/* <span>10 videos</span> */}
      </div>
   </div>
   <div class="column">

      <div class="details">
         <h3>complete JAVA tutorial</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.</p>
         {/* <a href="teacher_profile.html" class="inline-btn">view profile</a> */}
      </div>
   </div>
</div>

</section>

<section class="playlist-videos">

<h1 class="heading">playlist videos</h1>

<div class="box-container">

   <button class="box" onClick={() => goToWatchVideo()}>
      <i class="fas fa-play"></i>
      <img src={Javapart1} alt=""/>
      <h3>complete HTML tutorial (part 01)</h3>
   </button>

   <a class="box" href="watch-video.html">
      <i class="fas fa-play"></i>
      <img src={Javapart1} alt="" />
      <h3>complete HTML tutorial (part 02)</h3>
   </a>

   <a class="box" href="watch-video.html">
      <i class="fas fa-play"></i>
      <img src={Javapart1} alt="" />
      <h3>complete HTML tutorial (part 03)</h3>
   </a>

   <a class="box" href="watch-video.html">
      <i class="fas fa-play"></i>
      <img src={Javapart1} alt="" />
      <h3>complete HTML tutorial (part 04)</h3>
   </a>

   <a class="box" href="watch-video.html">
      <i class="fas fa-play"></i>
      <img src={Javapart1} alt="" />
      <h3>complete HTML tutorial (part 05)</h3>
   </a>

   <a class="box" href="watch-video.html">
      <i class="fas fa-play"></i>
      <img src={Javapart1} alt=""/>
      <h3>complete HTML tutorial (part 06)</h3>
   </a>

</div>

</section>
<footer class="footer">

&copy; copyright @ 2024 by <span>ManthaTech Solutions</span> | all rights reserved!

</footer>   
</body>   
    </div>
  )
}

export default PlayList
