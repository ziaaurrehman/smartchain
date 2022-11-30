// import BlogContent from "../components/DefaultHome/BlogContent";
import CallToAction from "../components/DefaultHome/CallToAction";
import ContentBlockOne from "../components/DefaultHome/ContentBlockOne";
import ContentBlockTwo from "../components/DefaultHome/ContentBlockTwo";
import Hero from "../components/Hero/One";
import PopularCryptoCurrencies from "../components/DefaultHome/PopularCryptoCurrencies";
// import FaqWithVideoModal from "../components/Faq/FaqWithVideoModal";
import FeaturesOne from "../components/Features/FeaturesOne";
import Testimonial from "../components/Testimonial/Testimonial";
import Pagewrapper from "../components/PageWrapper";
import CustomerServices from "components/DefaultHome/CustomerServices";

export default function Home() {
	return (
		<Pagewrapper>
			<Hero />
			<FeaturesOne />
			<ContentBlockOne />	
			<CustomerServices/>
			<PopularCryptoCurrencies />
			<ContentBlockTwo />
			<Testimonial />
			{/* <FaqWithVideoModal />
			<BlogContent /> */}
			<CallToAction />
		</Pagewrapper>
	);
}
