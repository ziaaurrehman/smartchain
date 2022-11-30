import { useState } from "react";
import Lightbox from "react-image-lightbox";
import { Link } from "react-router-dom";
export default function SingleIsotope({ item: { title, image, category, toBeRemoved } }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			{isOpen && <Lightbox mainSrc={"/img/portfolio/" + image} onCloseRequest={() => setIsOpen(false)} />}

			<div className="portfolio-item-card">
				<div className="d-block pointer" onClick={() => setIsOpen(true)}>
					<img src={`${image}`} alt={`${title}`} />
				</div>

				<div className="contents">
					<h5>
						<Link to="/project-details">
							{title}
						</Link>
					</h5>
					<span>{category}</span>
				</div>
			</div>
		</>
	);
}
