import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Background from "./Components/Background/Background";
import Hero from "./Components/Hero/Hero";
import Courses from "./Components/Courses/Courses";
import About from "./Components/About/About";
import Admin from "./Components/Admin/Admin";
import LoginSignup from "./Components/LoginSignup/LoginSignUp";
import PlayList from "./Components/PlayList/PlayList";
import WatchVideo from "./Components/PlayList/WatchVideo";
import Front from "./Components/Front/Front";
import Login from "./Components/Login/Login";
import ResetPassword from "./Components/ResetPassword/ResetPassword";

const App = () => {

  const [userRole, setUserRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const heroData = [
    { text1: "Your Learning Journey", text2: "Starts Here" },
    { text1: "Connecting Knowledge", text2: "With Possibility" },
    { text1: "Elevate Your Mind", text2: "Transform Your Future" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  // const Routes = () => {

  //   const loggedIn =  window.localStorage.getItem("isLoggedIn");


  // }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserRole(null);
   setIsLoggedIn(false);
  //  window.localStorage.removeItem("isLoggedIn");
  };

  return (
    <div>
    <Router>
      <div>
        <Navbar userRole={userRole} isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
        <Routes>
          <Route 
            path="/" 
            element={ 
              <>
                <Background playStatus={playStatus} heroCount={heroCount} />
                <Hero
                  setPlayStatus={setPlayStatus}
                  heroData={heroData[heroCount]}
                  heroCount={heroCount}
                  setHeroCount={setHeroCount}
                  playStatus={playStatus}
                />
               
              </>
            } 
          />
          
          <Route path="/About" element={<About />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Courses" element={<Courses isLoggedIn={isLoggedIn}/>} />
          <Route path="/LoginSignup" element={<LoginSignup />} />
          <Route path="/PlayList" element={<PlayList />} />
          <Route path="/WatchVideo" element={<WatchVideo />} />
          <Route path="/Front/*" element={<Front/>} />
          <Route path="/Login" element={<Login setUserRole={setUserRole} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
    
    </div>
      
  );

};

export default App;


