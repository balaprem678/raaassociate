import './App.css';
import React, { useEffect } from "react";
import serviceshome from "./img/serviceshead.jpg"
import ser1 from "./img/ser-1.png"
import ser2 from "./img/ser-2.png"
import ser3 from "./img/ser-3.png"
import ser4 from "./img/ser-4.png"
import ser5 from "./img/ser-5.png"
import ser6 from "./img/ser-6.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
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
    <div className="Servces">
      <div className='services-home'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='services-content'>
                <div className='about-head-content' data-aos="fade-right" data-aos-duration="1500">
                  <h1>Our Services</h1>
                  <h3>Technologically,Aesthetically and Expressively Rich Solutions.</h3>
                  <p>We are media professionals, graphic designers and web developers with many years of experience, sound technical knowledge and a feeling for style and style! Our core competencies range from design and development to the production of advertising material and printed material. Here is a summary of our services.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 servicess-imgs'>
              <div className='services-img' data-aos="fade-left" data-aos-duration="1500">
                <img src={serviceshome} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='services-1'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='head'>
                <h2 data-aos="fade-right" data-aos-duration="1500">Services</h2>
              </div>
            </div>
            <div className='col-lg-8 col-md-8 col-sm-12'>
              <div className='para' data-aos="fade-left" data-aos-duration="1500">
                <p>We are media professionals, graphic designers and web developers with many years of experience, sound technical knowledge and a feeling for style and style! Our Core competencies range from design and development to the production of advertising material and Media.</p>
              </div>
            </div>
          </div>
          <div className='designrow'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-12'>
                <div className='card' data-aos="fade-right" data-aos-duration="1500">
                  <img src={ser1}/>
                  <h2>BRANDING</h2>
                  <p>Make your brand stand out of the corporate crowd. Blow off some steam and take our expertise in building an identity for you.</p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12'>
                <div className='card' data-aos="fade-up" data-aos-duration="1500">
                <img src={ser2}/>

                  <h2>UI DESIGN</h2>
                  <p>UX is driven by UI. Our bunch of UI designers at Quantzi have vast experience and expertise in the vital areas of user experience.</p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12'>
                <div className='card' data-aos="fade-left" data-aos-duration="1500">
                <img src={ser3}/>

                  <h2>UI DEVELOPMENT SOLUTIONS</h2>
                  <p>At Quantzi, we are well aware of the importance of UI and its effect on the UX. Needless to say that UI decides the future of the app.</p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12'>
                <div className='card' data-aos="fade-right" data-aos-duration="1500">
                <img src={ser4}/>

                  <h2>WEB DEVELOPMENT</h2>
                  <p>We Just Don’t Code Websites, We Code Your World A Bunch of Cleverest Programmers At Your Service!</p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12'>
                <div className='card' data-aos="fade-up" data-aos-duration="1500">
                <img src={ser5}/>

                  <h2>APP DEVELOPMENT</h2>
                  <p>Every app is different and needs special attention. We have learned this by working for various domains and numerous projects.</p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12'>
                <div className='card' data-aos="fade-left" data-aos-duration="1500">
                <img src={ser6}/>

                  <h2>DIGITAL MARKETING</h2>
                  <p>If your Decision is the fire, our strategy is the fuel measured in smiles per hour!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
export default Services;
