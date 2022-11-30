import ContentImage from "assets/img/home1/hand2.png"
export default function ContentBlockOne() {
	return (
		<section className="content-block section-bg content_black_setting">
			<div className="container-fluid pt-0  sec_bg  content_black_height">
				<div className="row align-items-center">
				
					<div className="secthird_col_left ml-0 offset-xl-1 col-12">
						<div className="block-contents ms-xl-3 mt-5 mt-lg-0">
						<div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
								<h3>Why Luno?</h3>
							</div>
							<div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
								<h2>You’re in safe hands</h2>
							</div>
							<h4 className="wow fadeInUp col-lg-6" data-wow-duration="1s" data-wow-delay=".4s">
							We value your trust above all else and always make your security our top priority.
							</h4>
							{/* <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
								As this guide explains, investing in cryptocurrency comes with a ton of benefits. You do
								want to make sure you vet a currency before investing in it.
							</p> */}
							{/* <a
								href="#"
								className="theme-btn mt-30 wow fadeInUp"
								data-wow-duration="1s"
								data-wow-delay=".6s"
							>
								Get Started
							</a> */}
						</div>
					</div>
					{/* <div className="col-xl-5 pe-lg-0 col-lg-5 col-12"> */}
						<div className="block-img wow fadeInLeft" data-wow-duration="1.1s">
							<img className="secthird_img" src={ContentImage} alt="content-image" />
						</div>
					{/* </div> */}
				</div>
			</div>
			<div className="child_third_section">
			<div className="child_third_card">
				<h2>Secure</h2>
				<p className="">Your crypto is kept safe by industry-leading security.</p>
				<a href="#" className="">More on our security standards</a>
				
			</div>
			<div className="child_third_card">
				<h2>Compliant
</h2>
				<p className="">We comply with the same AML and KYC regulations your local bank does.</p>
				<a href="#" className="">More on our compliancy</a>
			</div>
			<div className="child_third_card">
				<h2>Secure</h2>
				<p className="">All the crypto we store is regularly verified by independent auditors.</p>
				<a href="#" className="">More on our auditors</a>
			</div>
		</div>

		</section>
	);
}
