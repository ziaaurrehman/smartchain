import React from 'react';
import ctarightImage from "assets/img/cta-right-img.png"
import ctatirShape from "assets/img/icons/tir-shape.svg"
import android from "assets/img/android.png"
import apple from "assets/img/hand3.png"
export default function CallToAction() {
  return (
		<section className=" style-1 section-padding pt-0">
			<div className="container">
				<div className='text_center'>
				<h4>Features</h4>
				<h3>With you every step of the way</h3>
				<p>Investment decisions are important, but they don't have to be hard.</p></div>
				<div className="cta-banner text-white mt-5 content_black_height_sec4">
					<div className="row ">
						<div className="col-xxl-6 text-xxl-start">
							<div className="cta_content pl-3">
								<h2 className="title_explore">Explore</h2>
								<p className="wow fadeInUp pb-3" data-wow-delay=".3s">
								Get simple information so you can make the best decisions
								</p>
								{/* <a href="#" className="mt-5 app-download-btn wow fadeInUp" data-wow-delay=".6s">
									<img src={apple} alt="" />
							</a> */}
								<a  href="#" className="app-download-btn wow fadeInUp " data-wow-delay=".8s">
									<img src={android} alt="" />
								</a>
								{/* <div className="tri-arrow wow fadeInRight d-none d-md-inline-block" data-wow-delay="1s">
									<img src={ctatirShape} alt="" />
								</div> */}
							</div>
						</div>
						<a className='explore_title'>Learn more about crypto</a>
					
						<div className="col-xxl-5 pe-xxl-5">
							<div className="cta-mobile-app wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1.2">
								<img className='apple_img' src={apple} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
