import React from 'react';
import './Footer.css';
import footerLog from '../../Assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {  faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer>
        <div className='container'>
          <div className="row">
            <div className="col-md-3 col-sm-6">
               <img src={footerLog} className="footerlogo" />
               <p>A Platform that is spacialized with diagnosis of differnet kinds of Cancer using artificial 
                Intelligence
               </p>
               <div className="footer-contact">

                <div className="footer-icon">
                <FontAwesomeIcon icon={faPhone}/>
                </div>
                <div className="footer-text">
                    <h6>Contact us</h6>
                    <h4>+01 123 452 328</h4>
                </div>
               </div>
            </div>
            <div className="col-md-3 col-sm-6">
            <h2>Quick links</h2>
                <ul>
                   <li><a href="#">Home</a></li> 
                   <li><a href="#">About</a></li> 
                   <li><a href="#">Blog</a></li> 
                   <li><a href="#">Booking</a></li> 
                   <li><a href="#">Faqs</a></li> 
                   <li><a href="#">our Team</a></li> 
                   <li><a href="#">Services </a></li> 
                   
                    
                    
                </ul>      
                
            </div>
            <div className="col-md-3 col-sm-6">
                     <h2>Our Services</h2>
                     <ul>
                   <li><a href="#">Brain Tumor diagnosis</a></li> 
                   <li><a href="#">Lung Cancer diagnosis</a></li> 
                   <li><a href="#">Skin Cancer diagnosis</a></li> 
                </ul>  
                
            </div>
           </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-12">
              <span>Copyright © 2022 Design & Developed by ThemeTrades</span>
              </div> 
            </div>
          </div>
          </div>    
          </footer>
  )
}

export default Footer;