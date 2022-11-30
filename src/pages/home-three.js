import {Helmet} from "react-helmet";
import FaqContent from "components/faq/FaqContent";
import HeroThree from "components/Hero/Three";
import ContentBlockOne from "components/HomeThree/Content/One/ContentBlockOne";
import ContentBlockThree from "components/HomeThree/Content/Three/ContentBlockThree";
import ContentBlockTwo from "components/HomeThree/Content/Two/ContentBlockTwo";
import Cta from "components/HomeThree/Cta";
import PricingContentTwo from "components/Pricing/PricingContentTwo";
import FeaturesFour from "components/Features/FeaturesFour";
import TestimonialTwo from "components/Testimonial/TestimonialTwo";

export default function indexThree() {
	return (
		<>
			<Helmet>
				<title>Xmoze - SaaS Multipurpose Landing Template 3</title>
			</Helmet>
			<HeroThree />
			<FeaturesFour />
			<Cta />
			<ContentBlockOne />
			<ContentBlockTwo />
			<ContentBlockThree />
			<PricingContentTwo />
			<TestimonialTwo />
			<FaqContent />
		</>
	);
}
