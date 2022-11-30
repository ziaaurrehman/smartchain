import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
export default function Pagination() {
	return (
		<div className="page-nav-wrap wow fadeInUp mt-80 text-center" data-wow-delay=".3s">
			<ul>
				<li className="current-page">
					<Link to="#">
						1
					</Link>
				</li>
				<li>
					<Link to="#">
						2
					</Link>
				</li>
				<li>
					<Link to="#">
						3
					</Link>
				</li>
				<li>
					<Link to="#">
						4
					</Link>
				</li>
				<li>
					<Link to="#">
							<HiArrowRight />
					</Link>
				</li>
			</ul>
		</div>
	);
}
