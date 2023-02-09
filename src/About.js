import './App.css';
import React, { useEffect } from "react";
import aboutpagehead from "./img/aboutpagehead.jpg"
import websitedesign from "./img/website-design-and-development.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    const body = document.querySelector('#root');
    body.scrollIntoView({
      behavior: 'smooth'
    }, 500)
  }, []);
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="About">
      <div className='aboutus'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 abouts-heads-contents'>
              <div className='about-head-content'>
                <h1 data-aos="fade-right" data-aos-duration="1500">About us</h1>
                <h3 data-aos="fade-up" data-aos-duration="1500">Web Design Company in Chennai</h3>
                <p data-aos="fade-down" data-aos-duration="1500">We provide our services at a market price with high-quality worth the value spent and we are the pioneers of modern Web Development Standards.</p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 '>
              <div className='about-head-img'>
                <img data-aos="zoom-out" data-aos-duration="1500" src={aboutpagehead} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='aboutsection2'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 abt-img-1s'>
              <div className='abt-img-1'>
                <img data-aos="fade-right" data-aos-duration="1500" src={websitedesign} />
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='abt-content' data-aos="fade-left" data-aos-duration="1500">
                <h2>
                  ABOUT US
                </h2>
                <p>We Raa Associate  Web Solutions., a Part Of Clemence Group of Companies is Web Design and Development , Apps Developing Company in Chennai, India. Firstly We are Young and Smarter Team with 5+ Years of Industrial Experience will help you to Support all your Web needs. Importantly We Offer Amazing Website Designs. Innovative Web-based Solutions that will help you keep your Clients engaged. Then We Provide Professional and Best-Web Design Service Globally. However We Offer Web Based Services like Web Design and Development, Apps Development, Digital Marketing, SEO and SEM Works, Logo and Branding by Worldwide. Professionally We are Dedicated Team Players Committed to Provide Professional Designs with latest Technologies in trends. As a Result we provide a Quality and the Web Designs Company in Chennai. We are 100% Customer Oriented, and focusing Customer Satisfaction is one of Our Brand Value.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
export default About;
