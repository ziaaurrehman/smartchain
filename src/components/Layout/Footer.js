
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import brandLogo from "assets/img/footer-logo.svg"
export default function Footer() {
	return (
		<footer className="footer-wrapper">
			<div className="footer-widgets-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft">
								<div className="about-us-widget">
									<Link to="/" className="footer-logo d-block">
											<img src={brandLogo} alt="xmoze" />
									</Link>
									<p>
										Xmoze helps millions of people get the best Wordpress theme design and offers
										software reviews, ratings, comprehensive services.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".2s">
								<div className="widget-title">
									<h5>Company</h5>
								</div>
								<ul>
									<li>
										<Link to="/about">
											About xmoze
										</Link>
									</li>
									<li>
										<Link to="/contact">
											Contact & support
										</Link>
									</li>
									<li>
										<Link to="/#">
											Setting & privacy
										</Link>
									</li>
									<li>
										<Link to="#">
											Setting & privacy
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".4s">
								<div className="widget-title">
									<h5>Services</h5>
								</div>
								<ul>
									<li>
										<Link to="#">
											Incident responder
										</Link>
									</li>
									<li>
										<Link to="#">
											Secure managed IT
										</Link>
									</li>
									<li>
										<Link to="#">
											Check website Url
										</Link>
									</li>
									<li>
										<Link to="#">
											Locker security
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".6s">
								<div className="widget-title">
									<h5>Resources</h5>
								</div>
								<ul>
									<li>
										<Link to="#">
											Payment plans
										</Link>
									</li>
									<li>
										<Link to="#">
											Blogs & guides
										</Link>
									</li>
									<li>
										<Link to="#">
											Premium support
										</Link>
									</li>
									<li>
										<Link to="#">
											Our products
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom-wrapper">
				<div className="container">
					<div className="footer-bottom-content d-md-flex justify-content-between">
						<div className="site-copyright wow fadeInUp" data-wow-delay=".2" data-wow-duration="1s">
							<p>
								&copy; 2022
								<Link to="/">
									Xmooze Theme
								</Link>
								All Rights Reserved.
							</p>
						</div>
						<div
							className="social-links mt-4 mt-md-0 wow fadeInUp"
							data-wow-delay=".3"
							data-wow-duration="1s"
						>
							<a href="#">
								
									<FaFacebookF />
								
							</a>
							<a href="#">
								
									<FaTwitter />
								
							</a>
							<a href="#">
								
									<FaInstagram />
								
							</a>
							<a href="#">
								
									<FaLinkedinIn />
								
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
