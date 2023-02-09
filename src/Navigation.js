import React, { useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navigation() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="Navigationbar">
      {/* Navigation */}
      <div className="navigation">
        <nav className="navbar px-5 navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <img data-aos="zoom-in" data-aos-duration="1500" src={logo} />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to={"/#"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/About"} className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Services"} className="nav-link">
                  Services
                </Link>

              </li>
              <li className="nav-item">
                <Link to={"/Library"} className="nav-link">
                  Library
                </Link>
              </li>
              <li className="nav-item black-button">
                <Link class="nav-link" to={`/Contact`} ><button>Contact Us</button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
