import React from 'react'
import ctaMobileImage from "assets/img/cta-mobile.png"
import apple from "assets/img/apple.png"
import android from "assets/img/android.png"
export default function Cta() {
  return (
     <section className="cta-banner-wrapper fw500">
        <div className="container">
            <div className="cta-banner-white-wrap">
                <div className="cta-banner style-3 text-white">
                    <div className="row">
                        <div className="col-xl-6 text-center mt-5 mt-xl-0 order-2 order-xl-1">
                            <div className="cta-mobile">
                                <img src={ctaMobileImage} alt="cta mobile" />
                            </div>
                        </div>
                        <div className="text-center text-xl-start col-xl-6 order-1 order-xl-2">
                            <div className="cta-contents pe-lg-5">
                                <h2 className="wow fadeInUp">Download & explore best online banking</h2>
                                <p className="wow fadeInUp" data-wow-delay=".3s">Easily download and use the most efficient online banking app. Make banking easier and faster.</p>
                                <a href="#" className="app-download-btn wow fadeInUp" data-wow-delay=".6s"><img src={apple} alt="apple" /></a>
                                <a href="#" className="app-download-btn wow fadeInUp" data-wow-delay=".8s"><img src={android} alt="android" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
