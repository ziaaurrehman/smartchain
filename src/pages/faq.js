import {Helmet} from "react-helmet";
import CallToAction from "components/Common/CallToAction";
import PageBanner from "components/Common/PageBanner";
import FaqContent from "components/faq/FaqContent";

export default function Faq() {
	return (
		<>
			<Helmet>
				<title>FAQ Page</title>
			</Helmet>
			<PageBanner
				title="FAQs"
				content="We work to create some of the most attractive and meaningful places for small businesses."
			/>
			<FaqContent />
			<CallToAction />
		</>
	);
}
