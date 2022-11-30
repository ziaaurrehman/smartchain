import Slider from "react-slick";
import projectThumb from "assets/img/portfolio/1.jpg";
import projectThumb2 from "assets/img/portfolio/3.jpg";
import projectThumb4 from "assets/img/portfolio/4.jpg";
import projectThumb8 from "assets/img/portfolio/8.jpg";
export default function RecentProjectSlider() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 888,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
	};
	return (
		<div className="recent-project-carousel">
			<Slider {...settings}>
				<div className="single-project-card">
					<div
						className="project-thumb bg-cover"
						style={{ backgroundImage: `url(${projectThumb})`}}
					></div>
					<div className="contents">
						<h5>
							<a href="/project-details">Work station</a>
						</h5>
						<span>UI/UX Design</span>
					</div>
				</div>
				<div className="single-project-card">
					<div
						className="project-thumb bg-cover"
						style={{ backgroundImage: `url(${projectThumb2})` }}
					></div>
					<div className="contents">
						<h5>
							<a href="/project-details">Flowers in vases</a>
						</h5>
						<span>Photography</span>
					</div>
				</div>
				<div className="single-project-card">
					<div
						className="project-thumb bg-cover"
						style={{ backgroundImage: `url(${projectThumb3})` }}
					></div>
					<div className="contents">
						<h5>
							<a href="/project-details">Creative art work</a>
						</h5>
						<span>Branding</span>
					</div>
				</div>
				<div className="single-project-card">
					<div
						className="project-thumb bg-cover"
						style={{ backgroundImage: `url(${projectThumb4})` }}
					></div>
					<div className="contents">
						<h5>
							<a href="/project-details">art design</a>
						</h5>
						<span>Creative</span>
					</div>
				</div>
				<div className="single-project-card">
					<div
						className="project-thumb bg-cover"
						style={{ backgroundImage: `url(${projectThumb8})` }}
					></div>
					<div className="contents">
						<h5>
							<a href="/project-details">Open books</a>
						</h5>
						<span>Creative</span>
					</div>
				</div>
			</Slider>
		</div>
	);
}
