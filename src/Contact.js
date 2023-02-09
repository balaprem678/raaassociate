import './App.css';
import React, { useEffect } from "react";
import contact from "./img/Contact-Us.png"
import map from "./img/map.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contact() {
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
    <div className="Contact">
      <div className='Contact-home'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 servicess-contents'>
              <div className='services-content'>
                <div className='about-head-content' data-aos="fade-right" data-aos-duration="1500">
                  <h3>We Build Amazing Web Applications</h3>
                  <p>Web Design & Development, Digital Marketing, SEO & SEM.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='services-img'>
                <img data-aos="fade-left" data-aos-duration="1500" src={contact} />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='contact-card'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='contact-card-1'>
                <div className='card' data-aos="fade-right" data-aos-duration="1500">
                  <a target={'_blank'} href='https://maps.app.goo.gl/QNC7tiu23b991koV8'>
                    <i class="fa-solid fa-location-dot"></i><br />
                    <h4>Head Office</h4>
                    <p>NO.58/1, 3rd Floor,
                      Manthoppu 1st Street,<br />
                      Maduvankarai, Guindy,Chennai-600032</p>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='contact-card-1'>
                <div className='card' data-aos="fade-up" data-aos-duration="1500">
                  <a target={'_blank'} href="mailto:raaassociate2022@gmail.com">
                    <i class="fa-solid fa-envelope"></i><br />
                    <h4>Email Us</h4>
                    <p>raaassociate2022@gmail.com</p></a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='contact-card-1'>
                <div className='card' data-aos="fade-left" data-aos-duration="1500">
                  <a target={'_blank'} href="tel:9940642160">
                    <i class="fa-solid fa-phone"></i><br />
                    <h4>Call Us</h4>
                    <p>Phone : 9940642160</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='map-form'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='map' data-aos="fade-right" data-aos-duration="1500">
                <a target={'_blank'} href="https://goo.gl/maps/BYKYmLcPFURWxKp76">
                  <img src={map} />
                </a>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <form data-aos="fade-left" data-aos-duration="1500">
                <input size="1" type="text" name="form_fields[name]" id="form-field-name" class="elementor-field elementor-size-lg elementor-field-textual" placeholder="Name" required="required" aria-required="true" /><br/>
                <input size="1" type="tel" name="form_fields[field_795bf18]" id="form-field-field_795bf18" class="elementor-field elementor-size-lg elementor-field-textual" placeholder="Phone" required="required" aria-required="true" pattern="[0-9()#&amp;+*-=.]+" title="Only numbers and phone characters (#, -, *, etc) are accepted." /><br/>
                <input size="1" type="email" name="form_fields[email]" id="form-field-email" class="elementor-field elementor-size-lg elementor-field-textual" placeholder="Email" required="required" aria-required="true" /><br/>
                <input size="1" type="text" name="form_fields[field_db9e67b]" id="form-field-field_db9e67b" class="elementor-field elementor-size-lg elementor-field-textual" placeholder="Company Name" required="required" aria-required="true" /><br/>
                <input size="1" type="text" name="form_fields[field_4d13937]" id="form-field-field_4d13937" class="elementor-field elementor-size-lg elementor-field-textual" placeholder="Required Service" required="required" aria-required="true" /><br/>
                <button type="submit" class="elementor-button elementor-size-lg"> <span> <span class=" elementor-button-icon"> </span> <span class="elementor-button-text">Submit</span> </span> </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
export default Contact;
