import heroImg from "assets/img/home3/hero-mobile.png"
import heroUserImg from "assets/img/user/1.png"
import heroUserImg2 from "assets/img/user/2.png"
import heroUserImg3 from "assets/img/user/3.png"
import heroUserImg4 from "assets/img/user/4.png"
import heroUserImg5 from "assets/img/user/5.png"
import heroArrowIcon from "assets/img/home3/hero-arrow.png"
import android from "assets/img/android.png"
import apple from "assets/img/apple.png"
export default function HeroThree() {
	return (
		<section className="hero-welcome-wrapper hero-3 fw500">
			<div className="single-slide">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-5 col-12 text-xl-start mt-5 mt-xl-0 text-center order-2 order-xl-1">
							<div className="hero-mobile">
								<img src={heroImg} alt="hero banner" />
							</div>
						</div>
						<div className="col-xl-7 ps-xl-5 text-center text-xl-start col-12 order-1 order-xl-2">
							<div className="hero-contents">
								<h1>Online banking solution for the next generation</h1>
								<p>
									Nowadays the simplest and most popular online banking solution for that saves time
									by speeding up your banking work apart from and also this you can do banking
									anytime, anywhere.
								</p>
								<a className="app-download-btn">
									<img src={apple} alt="" />
								</a>
								<a className="app-download-btn">
									<img src={android} alt="" />
								</a>
								<div className="client-feedback-wrapper">
									<div className="client-faces">
										<div
											className="single-face bg-cover"
											style={{ backgroundImage: `url(${heroUserImg})` }}
										></div>
										<div
											className="single-face bg-cover"
											style={{ backgroundImage: `url(${heroUserImg2})` }}
										></div>
										<div
											className="single-face bg-cover"
											style={{ backgroundImage: `url(${heroUserImg3})` }}
										></div>
										<div
											className="single-face bg-cover"
											style={{ backgroundImage: `url(${heroUserImg4})` }}
										></div>
										<div
											className="single-face bg-cover"
											style={{ backgroundImage: `url(${heroUserImg5})` }}
										></div>
									</div>
									<h6>Satisfied global clients</h6>
									<div className="rating">
										<span className="icon-star"></span> 4.5 Global rating
									</div>
									<div className="hero-arrow">
										<img src={heroArrowIcon} alt="arrow icon" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
