import React, { useState, useEffect } from 'react';
import './home/Home.css';
import myPhoto from './img/my-photo.jpg';

function Home(props) {
 

	{/*for web developer ---------------------------------------------*/}

  const[developerIndex,setDeveloperIndex]=useState(0);
  const developer=["Web","Front-end","Back-end"];
  useEffect(()=>{
  	const interval=setInterval(()=>{
  		setDeveloperIndex((prevIndex)=>(prevIndex+1) % developer.length);
  	},2000);
  	return ()=>clearInterval(interval);
  },[]);


	{/*main ontent ---------------------------------------------*/}

  return (
    <div className="container-fluid">
      <div className="row ">
      <div className="col-12 home-box-outer">
            <div className="row justify-content-center align-items-center home-box ">
              <div className="col-10 col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-5">
                <div className="home-image-box">
                  <img className="my-photo" src={myPhoto} alt="myPhoto" />
                </div>
              </div>
              <div className="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6 home-name-mobile">
                <div className="home-hi-text">Hey, I'm </div>
                <div className="home-name-text ff-p">{props.name}</div>
                <div className="home-dev-text ff-p">  [ {developer[developerIndex]} Developer ] </div>
              </div>
            </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
