import iconIdea from "assets/img/icons/idea.png";
import iconMan from "assets/img/icons/man.png"
import iconSetting from "assets/img/icons/setting.png"
export default function FeaturesThree() {
	return (
		<div className="container section-padding mtm-120">
			<div className="row  d-flex justify-content-between">
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div className="single-about-features">
						<div className="icon">
							<img src={iconIdea} alt="" />
						</div>
						<div className="content">
							<h3>Creative Thinking</h3>
							<p>Creative thinking is the ability to consider something in a new way.</p>
						</div>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div className="single-about-features">
						<div className="icon">
							<img src={iconMan} alt="" />
						</div>
						<div className="content">
							<h3>Skilled Team</h3>
							<p>We have a skilled team. Those who work through their own experience.</p>
						</div>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div className="single-about-features">
						<div className="icon">
							<img src={iconSetting} alt="" />
						</div>
						<div className="content">
							<h3>Maximum Service</h3>
							<p>Maximum service has been in the creative industry for over 30 years.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
