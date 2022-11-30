import Slider from "react-slick";
import portfolioImage from "assets/img/portfolio/port1.jpg"
import portfolioImage2 from "assets/img/portfolio/port2.jpg"
import portfolioImage3 from "assets/img/portfolio/port3.jpg"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<BsArrowRight />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<BsArrowLeft />
		</div>
	);
}

export default function ProjectGallary() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 888,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<div className="project-gallery me-xl-2">
			<Slider {...settings}>
				<div
					className="single-portfolio-slide bg-cover"
					style={{ backgroundImage: `url(${portfolioImage})` }}
				></div>
				<div
					className="single-portfolio-slide bg-cover"
					style={{ backgroundColor: `url(${portfolioImage2})` }}
				></div>
				<div
					className="single-portfolio-slide bg-cover"
					style={{ backgroundImage: `url(${portfolioImage3})` }}
				></div>
			</Slider>
		</div>
	);
}
