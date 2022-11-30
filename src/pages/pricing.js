import {Helmet} from "react-helmet";
import PageBanner from "../components/Common/PageBanner";
import FaqWithVideoModal from "../components/faq/FaqWithVideoModal";
import PricingContent from "../components/Pricing/PricingContent";
export default function Pricing() {
	return (
		<>
			<Helmet>
				<title>Pricing Page</title>
			</Helmet>
			<PageBanner
				title="Pricing"
				content="xmoze offers the most affordable planner you can use to improve your business."
			/>
			<PricingContent />
			<FaqWithVideoModal />
		</>
	);
}
