
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SingleService({ service }) {
	return (
		<div className="service-box-item">
			<div className="icon">
				<img src={`${service.icon}`} alt="" />
			</div>
			<div className="content">
				<h4>{service.title}</h4>
				<p>{service.content}</p>
				<Link href="/services-details">
						View Details <BsArrowRight />
				</Link>
			</div>
		</div>
	);
}
