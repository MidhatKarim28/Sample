import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Buttons from './components/button';
import ResponsiveAppBar from './components/header';
import CustomCard from './components/matchCard';

function App() {
  return (
    <>
   
      <div className="app-container">
      <div className="app-bar-container">
          <ResponsiveAppBar />
        </div>
        <h1 className="experience-text">EXPERIENCE</h1>
        <h1 className="thrill-text">THRILL</h1>
        <div className="animated-image-container">
        <img className="animated-image" src="src\assets\HomeSoldier.webp" alt="Animated Image" />
        </div>
        {/* Remove the background image from here */}
        <img className="image" ></img>
        <h1 className="the-text">THE</h1>
        <h1 className="victory-text">OF VICTORY</h1>
        <p className="text">Join the Path to Pro League and compete against the Asia’s best CS:GO players. Sign up now and showcase your skills!</p>
        <p className="button">
        <Buttons text="GET STARTED" iconUrl="./src/assets/ArrowIcon.webp" />
        </p>
      </div>

      <div className="gradient-container">
      </div>

      <div className="rutba-container">
      </div>

      <div className="fourth-container">
      </div>

      <div className="fifth-container">
      </div>

      <div className="sixth-container">
      </div>

      <div className="seventh-container">
        <img className="knife-image"></img>
        <img className="star-image"></img>
      </div>

      <div className="eigth-container">
      </div>

      <div className="ninth-container">
      </div>


      <Footer/>
    </>
  );
}

export default App;
