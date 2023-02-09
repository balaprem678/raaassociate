import './App.css';
import React from "react";
import Homepagelogo from "./img/logo.png"
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="Footer-Head">
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-12 col-sm-12'>
              <div className='footer-1'>
                <img src={Homepagelogo} />
                <h1>ASSOCIATE</h1>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='footer-2'>
                <h2>Quick Link</h2>
                <h3><Link to='/About.js'>About</Link></h3>
                <h3><Link to='/Services.js'>Services</Link></h3>
                <h3><Link to='/Library.js'>Library  </Link></h3>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='footer-2 footer-3'>
                <h2>Address</h2>
                <p>NO.58/1, 3rd Floor,<br />
                  Manthoppu 1st Street,<br />
                  Maduvankarai, Guindy,Chennai-600032
                </p>
                <a href="mailto:raaassociate2022@gmail.com"><i class="fa-solid fa-envelope"></i>raaassociate2022@gmail.com</a>
                <p><a href="tel:9940642160"><i class="fa-solid fa-phone"></i>9940642160</a></p>
              </div>
            </div>
          </div>
        
          <div class="Social-media">
            <a href=''><i class="fa-brands fa-instagram"></i></a>
            <a href=''><i class="fa-brands fa-square-facebook"></i></a>
            <a href=''><i class="fa-brands fa-square-twitter"></i></a>
            <a href=''><i class="fa-brands fa-linkedin"></i></a>
            <a href=''><i class="fa-brands fa-youtube"></i></a>
          </div>
          <hr />
          <h6 className='copyright'>Copyright © 2023  –  Raa Associate  –  All Rights Reserved.</h6>
        </div>

      </footer >

    </div >
  );
}

