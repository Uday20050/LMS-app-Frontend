import React, {useRef} from 'react'
import video1 from '../Assets/video1.mp4';
import'../Styles.css'
import video2 from '../Assets/video2.mp4';
// import ReactPlayer from 'react-player';


function WatchVideo() {
    const playerRef = useRef(null);
  return (
    <div>
     
      <body>
      <section class="watch-video">

<div class="video-container">
   <div class="video">
      <video src={video1} controls poster="images/post-1-1.png" id="video"></video>
      {/* <ReactPlayer ref={playerRef} url={video1} controls={true} width="100%"/> */}
   </div>
   <h3 class="title">complete HTML tutorial (part 01)</h3>
   
   {/* <p class="description">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque labore ratione, hic exercitationem mollitia obcaecati culpa dolor placeat provident porro.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum architecto dolor fugiat illo, iure velit nihil laboriosam cupiditate voluptatum facere cumque nemo!
   </p> */}
</div>

</section>
<footer class="footer">

&copy; copyright @ 2024 by <span>ManthaTech Solutions</span> | all rights reserved!

</footer>   
</body>
    </div>
  )
}

export default WatchVideo
