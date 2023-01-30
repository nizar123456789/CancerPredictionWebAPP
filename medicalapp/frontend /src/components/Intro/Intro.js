import React from "react";
import introBanner from "../../Assets/CancerDetect.jpeg";
import './Intro.css'

const Intro = () => {
  return (
    <div className="container overflow-hidden my-5 border bg-light shadow-lg rounded-3">
      <div className="row gy-5">
        <div className="col-12 col-md-5">
          <div className="p-3">
            <img className="img-fluid" src={introBanner} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="p-3">
            <h1 className="fw-extrabold blue-color">WHY CHOOSE USING THIS WEBSITE?</h1>
            <p className="fs-5">
              Our website provides an effective Solution for doctors to detect the different typpes of 
              Cancer such as brain tumor ,lung Cancer ,skin Cancer with a good accuracy.That's why our website is considered 
              to be a trustable way to early detection of tumors using artificial intelligence {" "}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;