import React from 'react'
import apple from "assets/img/apple.png"
import android from "assets/img/android.png"
import arrowWhite from "assets/img/icons/white-arrow-icon.svg"
export default function Cta() {
  return (
    
    <section className="cta-banner-wrapper">
        <div className="container">
            <div className="cta-banner style-2 text-white">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center col-xl-8 offset-xl-2">
                        <div className="cta-contents">
                            <h2 className="wow fadeInUp">Sign up and improve your business easily</h2>
                            <a href="#" className="app-download-btn wow fadeInUp" data-wow-delay=".3s"><img src={apple} alt="apple" /></a>
                            <a href="#" className="app-download-btn wow fadeInUp" data-wow-delay=".6s"><img src={android} alt="android" /></a>
                        </div>
                    </div>
                </div>

                <div className="white-arrow-icon d-none d-md-block  wow fadeInDown" data-wow-delay=".8s">
                    <img src={arrowWhite} alt="arrow" />
                </div>
            </div>
        </div>
    </section>
  )
}
