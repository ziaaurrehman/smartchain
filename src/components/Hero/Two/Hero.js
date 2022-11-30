import { Link } from "react-router-dom";

import heroImage from "assets/img/home2/hero-img.jpg"
import heroImageLine from "assets/img/home2/hero-line.png"
import heroImageLineWhite from "assets/img/home2/hero-white-line.png"
export default function HeroTwo() {
	return (
		<section className="hero-welcome-wrapper hero-2">
			<div className="single-slide text-white">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 text-center text-xl-start col-12">
							<div className="hero-contents">
								<h1>Manage your business on a new system</h1>
								<p>
									Advanced software for managing your business. Through which business can be
									controlled very easily as required.
								</p>
								<Link to="/" className="theme-btn red-color">
									Start Free Trial
								</Link>
								<Link to="/" className="theme-btn minimal-btn">
										Learn More
								</Link>
							</div>
						</div>
						<div className="col-xl-6 col-12 text-center text-xl-end">
							<div className="hero-img-wrapper">
								<img src={heroImage} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="hero-lines">
					<img src={heroImageLine} alt="hero image line" />
					<img src={heroImageLineWhite} alt="hero image" />
				</div>
			</div>
		</section>
	);
}
