import React, { Fragment } from 'react';
import LoginButton from '../components/LoginButton';
import Question1 from './Question1';
import StartButton from '../components/StartButton';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";

const Home = () => {

    return (
    <>
      {/* Top bar */}
      <div className="navbar navbar-light bg-transparent fixed-top nav-fix">
          <div className="container">
             <img className="navbar-brand" src="https://skincare.seeyou.ai/static/media/logo.31c36bc3.png" alt="logo" width="80px" style={{opacity: 1}}  />
          </div>
      </div>

      {/* Background Div */}
      <div className="home-bg">
        <img src="https://skincare.seeyou.ai/static/media/women.06a639d6.png" alt="aunty" id="landing-img" className="home-bg-img"/>
      
      {/* Home Text */}
        <div className="container home-container">
                <div className="home-txt-main" >
                    <h1>Find products for Your Skin</h1>
                    <p>
                    We analyze millions of real people's experience to find <br/>
                    the product that works best for those with your skin <br/>
                    type, lifestyle and climate
                    </p>
                
                    <div className="home-buttons" id="home-buttons">               
                        <StartButton />                           
                        <LoginButton /> 
                    </div>
                </div>            
           </div>
        </div>      
    </>
    );
};

export default Home;