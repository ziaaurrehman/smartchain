import {Helmet} from "react-helmet";
import ProjectAbout from "../components/ProjectDetails/ProjectAbout";
import RecentProject from "../components/ProjectDetails/RecentProject";
import PageBanner from "./../components/Common/PageBanner";

export default function ProjectDetails() {
	return (
		<>
			<Helmet>
				<title>Project Details Page</title>
			</Helmet>
			<PageBanner
				title="Creative Art Work"
				content="A Business Portfolio Accurately Describes The Strengths Of A Company & Helps The Company Utilize The Most Attractive."
			/>
			<ProjectAbout />
			<RecentProject />
		</>
	);
}
