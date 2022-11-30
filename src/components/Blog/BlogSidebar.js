
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function BlogSidebar() {
	return (
		<>
			<div className="blog-sidebar-wrapper fw500">
				<div className="single-sidebar-wid search-box-widgets">
					<form action="#">
						<input type="text" placeholder="Type to search..." />
						<button type="submit">
							<AiOutlineSearch />
						</button>
					</form>
				</div>
				<div className="single-sidebar-wid">
					<div className="wid-title">
						<h5>Blog Categories</h5>
					</div>
					<div className="widget_categories">
						<ul>
							<li>
								<Link to="/news">
									Cryptocurrency (05)
								</Link>
							</li>
							<li>
								<Link to="/news">
									Web Development (18)
								</Link>
							</li>
							<li>
								<Link to="/news">
									Marketing (59)
								</Link>
							</li>
							<li>
								<Link to="/news">
									Data Analysis (03)
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="single-sidebar-wid">
					<div className="wid-title">
						<h5>Recent Posts</h5>
					</div>
					<div className="recent-posts">
						<div className="single-post-item">
							<Link to="/news-details">
								What is the crypto volatility index (CVI)?
							</Link>
							<span>Dec. 8, 2022</span>
						</div>
						<div className="single-post-item">
							<Link to="/news-details">
								Terra leads layer 1 resurgence targeting $100
							</Link>
							<span>Nov. 27, 2022</span>
						</div>
						<div className="single-post-item">
							<Link to="/news-details">
								Ethereum launches kintsugi testnet to prepare 
							</Link>
							<span>Nov. 18, 2022</span>
						</div>
						<div className="single-post-item">
							<Link to="/news-details">
								Christie's sold $150M worth of NFTs this year
							</Link>
							<span>Oct. 09, 2022</span>
						</div>
						<div className="single-post-item">
							<Link to="/news-details">
								Ubisoft will pursue NFT plans despite blowback
							</Link>
							<span>Jan. 05, 2022</span>
						</div>
					</div>
				</div>
				<div className="single-sidebar-wid">
					<div className="wid-title">
						<h5>Popular Tags</h5>
					</div>
					<div className="tagcloud">
						<Link to="/news">
							Sponsored
						</Link>
						<Link to="/news">
							Business
						</Link>
						<Link to="/news">
							UI / UX Design
						</Link>
						<Link to="/news">
							Marketing
						</Link>
					</div>
				</div>
			</div>

			<div className="newsletter-subscribe-widgets text-white">
				<div className="wid-title">
					<h5>Join Us!</h5>
				</div>
				<p>Subscribe our newsletter and stay up to date about the company</p>
				<div className="newsletter-subscribe">
					<form action="#">
						<input type="email" placeholder="Enter your email" />
						<button type="submit" className="submit-btn">
							Subscribe Now
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
