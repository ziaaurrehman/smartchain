import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function SingleBlogPost({ post }) {
	return (
		<div className="single-news-card wow fadeInUp">
			<div className="news-thumb bg-cover" style={{ backgroundImage: `url(${post.img})` }}></div>
			<div className="contents">
				<div className="post-meta d-flex">
					<div className="post-cat">
						<Link to="/news">
							{post.category}
						</Link>
					</div>
					<div className="post-date">
						<span>{post.date}</span>
					</div>
				</div>
				<h4>
					<Link to="/news-details">
						{post.title}
					</Link>
				</h4>
				<p> {post.content} ...</p>

				<Link to="/news-details" className="read-more-link">
						read more <BsArrowRight color="#5B7486" size={18} />
				</Link>
			</div>
		</div>
	);
}
