import {Helmet} from "react-helmet";
import ContactContent from "../components/Contact/ContactContent";
import PageBanner from "./../components/Common/PageBanner";

export default function Contact() {
	return (
		<>
			<Helmet>
				<title>Contact Page</title>
			</Helmet>
			<PageBanner
				title="Contact Us"
				content="Feel free to contact us anytime if you have any questions or needs by phone or email."
			/>
			<ContactContent />
		</>
	);
}
