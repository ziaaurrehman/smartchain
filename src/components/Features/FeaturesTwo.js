import iconLove from "assets/img/icons/love.svg";
import iconGrid from "assets/img/icons/grid.svg"
import iconMainbag from "assets/img/icons/manibag.svg"
import iconNotifications from "assets/img/icons/notifications.svg"
export default function FeaturesTwo() {
	return (
		<section className="core-features-wrapper section-padding mtm-30">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-xl-3 col-12">
						<div className="single-core-feature">
							<div className="icon">
								<img src={iconLove} alt="" />
							</div>
							<div className="content">
								<h3>Lifetime Access</h3>
								<p>With this software you will get lifetime access very easily</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-3 col-12">
						<div className="single-core-feature">
							<div className="icon">
								<img src={iconGrid} alt="" />
							</div>
							<div className="content">
								<h3>Simple Layout</h3>
								<p>Software with easy layout for easy understanding & working</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-3 col-12">
						<div className="single-core-feature">
							<div className="icon">
								<img src={iconMainbag} alt="" />
							</div>
							<div className="content">
								<h3>Quick Customizable</h3>
								<p>With this software you can sort everything as you like</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-3 col-12">
						<div className="single-core-feature">
							<div className="icon">
								<img src={iconNotifications} alt="" />
							</div>
							<div className="content">
								<h3>Reduce Expenses</h3>
								<p>You can reduce expenses by managing your business well</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
