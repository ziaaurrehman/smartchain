import { AiOutlineBarChart } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import QrImg from "../../assets/img/qr.jpg";
import apple from "assets/img/apple.png";
import android from "assets/img/android.png";
import blueCircle from "../../../src/assets/img/circle-blue.PNG";
import BitcoinMobile from "../../../src/assets/img/bitcoin-mobile.jpg";
export default function FeaturesOne() {
  return (
    <section className="our-best-features-wrapper section-padding">
      <div className="container-fluid fluid-padding">
        {/* <div className="col-xl-8 offset-xl-2 text-center">
					<div className="block-contents">
						<div className="section-title">
							<h2>The best crypto features you won't find anywhere else</h2>
						</div>
					</div>
				</div> */}
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="features-card-item style-1">
              <div className="">
                {/* <BiLockAlt /> */}
                <button type="button" class="btn btn-outline-secondary btn1">
                  Step 1
                </button>
              </div>
              <h3>Download the app</h3>
              <p>
                The most secure and fast payment can be made through
                cyptrocurrency
              </p>
              <div className="main-card">
                <img src={QrImg} className="qr-img" />
                <button
                  type="button"
                  class="btn btn-outline-secondary play-store-pic"
                >
                  {/* <img src={apple}/> */}
                  Download on the
                  <br />
                  <span>App Store</span>
                </button>

                <button
                  type="button"
                  class="btn btn-outline-secondary play-store-pic"
                >
                  {/* <img src={apple}/> */}
                  Get it on
                  <br />
                  <span>Play Store</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            {/* <div className="features-card-item style-1">
              <div className="icon icon2">
                <AiOutlineBarChart />
              </div>
              <h3>Reports & Analytics</h3>
              <p>
                View daily transaction reports & analytics easily through xmoze
                & improve business
              </p>
            </div> */}
            <div className="features-card-item style-1">
              <div className="">
                {/* <BiLockAlt /> */}
                <button type="button" class="btn btn-outline-secondary btn1">
                  Step 2
                </button>
              </div>
              <h3>Explore and decide</h3>
              <p>
                The most secure and fast payment can be made through
                cyptrocurrency
              </p>
              <div className="main-card2">
                <div className="bitcoin-mobile-img-container">
                  <img src={BitcoinMobile} className="bitcoin-mobile-img" />
                </div>
                <button className="signup-button btn btn-danger" type="button">
                  BASICS
                </button>
                <h3 className="bitcoin-text">Where Did bitcoin comes from?</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            {/* <div className="features-card-item style-1">
              <div className="icon icon3">
                <FiSend />
              </div>
              <h3>Send & Receive Anytime</h3>
              <p>
                Send and receive money at any time with maximum security through
                xmoze app
              </p>
            </div> */}
            <div className="features-card-item style-1">
              <div className="">
                {/* <BiLockAlt /> */}
                <button type="button" class="btn btn-outline-secondary btn1">
                  Step 3
                </button>
              </div>
              <h3>Start investing with as little as $10</h3>
              <p>
                The most secure and fast payment can be made through
                cyptrocurrency
              </p>
              <div className="main-card">
                <img src={blueCircle} className="circle-img" />
                <a>
                  {" "}
                  <h3 className="bitcoin-text">
                    How much bitcoin would you like to buy?
                  </h3>
                </a>

                <button
                  type="button"
                  class="btn btn-outline-secondary play-store-pic"
                >
                  {/* <img src={apple}/> */}
                  Get it on
                  <br />
                  <span>Play Store</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
