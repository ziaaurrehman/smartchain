import {Helmet} from "react-helmet";
import PageBanner from "../components/Common/PageBanner";
import ErrorContent from "../components/Error/ErrorContent";

export default function NotFound() {
	return (
		<>
			<Helmet>
				<title>404 Page</title>
			</Helmet>
			<PageBanner
				title="Oops! error page"
				content="Sorry but the page you're looking for may broken or not created."
			/>
			<ErrorContent />
		</>
	);
}
