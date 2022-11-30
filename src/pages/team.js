import {Helmet} from "react-helmet";
import Teams from "../components/Team/Teams";
import CallToAction from "./../components/Common/CallToAction";
import PageBanner from "./../components/Common/PageBanner";

export default function Team() {
	return (
		<>
			<Helmet>
				<title>Team Page</title>
			</Helmet>
			<PageBanner
				title="Our Team"
				content="We work to create some of the most attractive and meaningful places for small businesses."
			/>
			<Teams />
			<CallToAction />
		</>
	);
}
