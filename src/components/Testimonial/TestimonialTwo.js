import { useRef } from "react";
import Slider from "react-slick";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import testimonialImage1 from "assets/img/testimonial/1.jpg"
import testimonialImage2 from "assets/img/testimonial/2.jpg"
import testimonialImage3 from "assets/img/testimonial/3.jpg"
export default function TestimonialTwo() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 950,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		lazyLoad: true,
		responsive: [
			{
				breakpoint: 1360,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1191,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const sliderRef = useRef(null);

	return (
		<section className="testimonial-carousel-wrapper section-bg section-padding fix">
			<div className="container">
				<div className="row fix align-items-center">
					<div className="col-lg-8">
						<div className="block-contents fw500 text-center text-lg-start">
							<div className="section-title">
								<h2 className="wow fadeInLeft" data-wow-duration="1.1s">
									We have powerful user experience
								</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-4 d-none d-lg-block text-center text-lg-end">
						<div className="testimoinial-nav style-2">
							<div onClick={() => sliderRef.current?.slickPrev()} className="testimonial-nav-prev">
								<BsArrowLeft className="icon-arrow-right" />
							</div>
							<div onClick={() => sliderRef.current?.slickNext()} className="testimonial-nav-next">
								<BsArrowRight className="icon-arrow-left" />
							</div>
						</div>
					</div>
				</div>

				<div className="testimonial-nav-carousel-active">
					<Slider ref={sliderRef} {...settings}>
						<div className="single-testimoinal-box">
							<div
								className="client-img bg-cover"
								style={{ backgroundImage: `url(${testimonialImage2})` }}
							></div>
							<div className="feedback">
								“This app has made my banking work much easier which saves me a lot of time, I have
								become a fan of it.”
							</div>
							<div className="client-info">
								<div className="client-name">
									<h6>Scott Swanson</h6>
									<span>Account executive</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-box">
							<div
								className="client-img bg-cover"
								style={{ backgroundImage: `url(${testimonialImage2})` }}
							></div>
							<div className="feedback">
								“By using online banking, I can easily keep track of various expenses, which saves me a
								lot of money.”
							</div>
							<div className="client-info">
								<div className="client-name">
									<h6>Karen Lynn</h6>
									<span>Marketing Expert</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-box">
							<div
								className="client-img bg-cover"
								style={{ backgroundImage: `url(${testimonialImage2})` }}
							></div>
							<div className="feedback">
								“I can now complete banking work from anywhere anytime, making my business work more
								dynamic.”
							</div>
							<div className="client-info">
								<div className="client-name">
									<h6>Sean Jacobs</h6>
									<span>Businessman</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-box">
							<div
								className="client-img bg-cover"
								style={{ backgroundImage: `url(${testimonialImage2})` }}
							></div>
							<div className="feedback">
								“This app has made my banking work much easier which saves me a lot of time, I have
								become a fan of it.”
							</div>
							<div className="client-info">
								<div className="client-name">
									<h6>Scott Swanson</h6>
									<span>Account executive</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-box">
							<div
								className="client-img bg-cover"
								style={{ backgroundImage: `url(${testimonialImage2})` }}
							></div>
							<div className="feedback">
								“By using online banking, I can easily keep track of various expenses, which saves me a
								lot of money.”
							</div>
							<div className="client-info">
								<div className="client-name">
									<h6>Karen Lynn</h6>
									<span>Marketing Expert</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-box">
							<div
								className="client-img bg-cover"
								style={{ backgroundImage: `url(${testimonialImage2})` }}
							></div>
							<div className="feedback">
								“I can now complete banking work from anywhere anytime, making my business work more
								dynamic.”
							</div>
							<div className="client-info">
								<div className="client-name">
									<h6>Sean Jacobs</h6>
									<span>Businessman</span>
								</div>
							</div>
						</div>
					</Slider>
				</div>

				<div className="col-lg-4 d-block mt-5 mr-lg-0 d-lg-none text-center">
					<div className="testimoinial-nav style-2">
						<div onClick={() => sliderRef.current?.slickPrev()} className="testimonial-nav-prev">
							<BsArrowLeft className="icon-arrow-right" />
						</div>
						<div onClick={() => sliderRef.current?.slickNext()} className="testimonial-nav-next">
							<BsArrowRight className="icon-arrow-left" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
