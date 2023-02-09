import './App.css';
import React, { useEffect } from "react";
import homeheaderbg from "./img/Contact-Us.png"
import abt from "./img/abt.png"
import services from "./img/services.png"
import tech1 from "./img/tec-1.png"
import tech2 from "./img/tec-2.png"
import tech3 from "./img/tec-3.png"
import tech4 from "./img/tec-5.png"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
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
    <div className="Home">
      <div className='Homepage'>
        <div className='home-header'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 home-header-content'>
                <div className='home-header-content' >
                  <div class="word w1"><h2>We Create Website That<br /> Build Momentum.</h2></div>
                  <div class="word w2"><h2>Getting Your Website Right<br /> Makes Everything Else Easier.</h2></div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12' data-aos="zoom-out" data-aos-duration="1500">
                <img src={homeheaderbg} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className='home-header'>
          <div className='container home-pages'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 home-header-content'>
                <div className='home-header-content'>
                  <div class="word w1"><h2 className='home-content'>We Create Website That<br /> Build Momentum.</h2></div>
                  <div class="word w2"><h2 className='home-content'>Getting Your Website Right<br /> Makes Everything Else Easier.</h2></div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 '>
                <img id='home-img' src={homeheaderbg} />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className='About-Section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-right" data-aos-duration="1500">
              <img src={abt} />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 paras' data-aos="fade-left" data-aos-duration="1500">
              <div className='para'>
                <h2>About Us</h2>
                <p>We Raa Associate Web Solutions, a Part Of Clemence Group of Companies is Web Design and Development , Apps Developing Company in Chennai, India. Firstly We are Young and Smarter Team with 5+ Years of Industrial Experience will help you to Support all your Web needs. Importantly We Offer Amazing Website Designs. Innovative Web-based Solutions that will help you keep your Clients engaged. </p>
                <Link to={"/About"} className="nav-link">
                  <h3>Read More..</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Services-Section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 paras'>
              <div className='para' data-aos="fade-right" data-aos-duration="1500">
                <h2>Services</h2>
                <p>We are media professionals, graphic designers and web developers with many years of experience, sound technical knowledge and a feeling for style and style! Our Core competencies range from design and development to the production of advertising material and Media.</p>
                <Link to={"/Services"} className="nav-link">
                  <h3>Read More..</h3>
                </Link>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <img data-aos="fade-left" data-aos-duration="1500" src={services} />
            </div>
          </div>
        </div>
      </div>
      <div className='Technology-Section'>
        <div className='container'>
          <div className='tech'>
            <h2 data-aos="fade-up" data-aos-duration="1500">Technology</h2>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='box-card'>
                <div className='card' data-aos="fade-right" data-aos-duration="1500">
                  <img src={tech1} />
                  <h5>HTML</h5>
                  <h4>Web Design</h4>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='box-card'>
                <div className='card' data-aos="fade-right" data-aos-duration="1500">
                  <img src={tech2} />
                  <h5>CSS</h5>
                  <h4>Web Design</h4>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='box-card'>
                <div className='card' data-aos="fade-left" data-aos-duration="1500">
                  <img src={tech3} />
                  <h5>ANGULAR JS</h5>
                  <h4>Front End</h4>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='box-card'>
                <div className='card' data-aos="fade-left" data-aos-duration="1500">
                  <img src={tech4} />
                  <h5>J QUERY</h5>
                  <h4>Front End</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
export default Home;
