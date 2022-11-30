import {Helmet} from "react-helmet";
import BlogDetails from "../components/Blog/BlogDetails";
import PageBanner from "../components/Common/PageBanner";

export default function newsDetails() {
	return (
		<>
			<Helmet>
				<title>News Details</title>
			</Helmet>
			<PageBanner
				title="What Is the crypto volatility index (CVI)?"
				content="The CVI is created by computing a decentralized volatility index from cryptocurrency option prices together with analyzing the market."
			/>
			<BlogDetails />
		</>
	);
}
