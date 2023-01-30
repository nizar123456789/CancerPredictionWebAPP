import React from "react";
import ImageDoctor from '../Assets/doctor-girl.png'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {  faSquare } from '@fortawesome/free-solid-svg-icons'

const Home = () => {


    return (


        <header>
            <div className="container">
                <div className="row">
                     <div className="col-md-6 col-lg-6">
                     <h5>We provide all Health Care Solution</h5>
                     <h2>Protect your health and take care of it </h2>
                     <button><a href="#">Read More</a></button>
                     <span>+</span>
                     </div>
                    
                    <div className="col-lg-6 col-md-4">
                        <div className="headerf-box">

                        <img src={ImageDoctor} />
                        <FontAwesomeIcon icon={faSquare}/>
                        </div>
                        
                    </div>




                 </div>




            </div>
        </header>)




}
export default Home;