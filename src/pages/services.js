import {Helmet} from "react-helmet";
import PageBanner from "../components/Common/PageBanner";
import FaqWithVideoModal from "../components/faq/FaqWithVideoModal";
import PricingContent from "../components/Pricing/PricingContent";
import Services from "../components/Services/Services";

export default function Service() {
	return (
		<>
			<Helmet>
				<title>Services Page</title>
			</Helmet>
			<PageBanner
				title="Our Services"
				content="We work to create some of the most attractive and meaningful places for small businesses."
			/>
			<Services />
			<PricingContent />
			<FaqWithVideoModal />
		</>
	);
}
