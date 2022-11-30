import {Helmet} from "react-helmet";
import PageBanner from "components/Common/PageBanner";
import IsotopeSection from "components/Isotope/IsotopeSection"
export default function Projects() {
	return (
		<>
			<Helmet>
				<title>Projects Page</title>
			</Helmet>
			<PageBanner
				title="Masonry Portfolio"
				content="A business portfolio accurately describes the strengths of a company & helps the company utilize the most attractive."
			/>
			<IsotopeSection />
		</>
	);
}
