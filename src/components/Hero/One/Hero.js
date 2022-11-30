import React from "react";
import apple from "assets/img/apple.png";
import android from "assets/img/android.png";
import tirShape from "assets/img/icons/tir-shape.svg";
import mobile from "assets/img/mobile-hero1.png";
import mobileImg from "assets/img/mobile-main.PNG";
export default function Hero() {
  return (
    <section className="hero-welcome-wrapper hero-1">
      <div className="single-slide text-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-6 col-lg-10 offset-lg-1 offset-xl-0">
              <div className="hero-contents">
                <h3>Cryptocurrency is for everyone</h3>
                <p>
                  Luno has made investing simple for millions around the world.
                  Join the other 10 million customers.
                </p>
                {/* <a href="#" className="app-download-btn">
                  <img src={apple} alt="apple" />
                </a> */}
                <button className="signup-button btn btn-danger" type="button">
                  Sign up
                </button>
                {/* <a href="#" className="app-download-btn">
                  <img src={android} alt="android" />
                </a> */}
                <div className="tri-arrow">
                  <img src={tirShape} alt="shape" />
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-6 col-lg-10 offset-lg-1 offset-xl-0">
              <div className="hero-mobile mt-5 mt-xl-0">
                <img src={mobile} alt="xmoze app" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
