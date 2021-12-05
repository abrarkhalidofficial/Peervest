import React from "react";
import { Linkedin } from "react-feather";
import { Link } from "react-router-dom";
import footerLogo from "../Assets/footerLogo.png";

export default function Footer() {
  return (
    <>
      <div className="footer__container">
        <div className="footer__container__content">
          <div className="footer__container__content__quick__links">
            <img
              src={footerLogo}
              alt="footerLogo"
              className="footer__container__content__logo"
            />
          </div>
          <div className="footer__container__content__quick__links">
            <div className="footer__container__content__quick__links__heading">
              Quicklinks
            </div>
            <div className="footer__container__content__link">
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Home
              </Link>
            </div>
            <div className="footer__container__content__link">
              <Link
                to="/about-us"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                About
              </Link>
            </div>
            <div className="footer__container__content__link">
              <Link
                to="/services"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Service
              </Link>
            </div>
            <div className="footer__container__content__link">
              <Link
                to="/contact"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="footer__container__content__quick__links">
            <div className="footer__container__content__quick__links__heading">
              Contact us
            </div>
            <div className="footer__container__content__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25.425"
                height="22.656"
                viewBox="0 0 25.425 22.656"
                fill="currentColor"
              >
                <path
                  id="Icon_awesome-phone-alt"
                  data-name="Icon awesome-phone-alt"
                  d="M24.7,16.01l-5.562-2.124a1.289,1.289,0,0,0-1.39.305l-2.463,2.682a17.536,17.536,0,0,1-8.8-7.841L9.495,6.837A.987.987,0,0,0,9.838,5.6L7.454.642A1.242,1.242,0,0,0,6.088.027L.924,1.089A1.1,1.1,0,0,0,0,2.124c0,11.35,10.324,20.532,23.042,20.532a1.172,1.172,0,0,0,1.162-.823l1.192-4.6A1.05,1.05,0,0,0,24.7,16.01Z"
                  transform="translate(0 0)"
                />
              </svg>

              <a href="" style={{ width: "90%" }}>
                +92 307 9303104
              </a>
            </div>
            <div className="footer__container__content__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26.42"
                height="17.834"
                viewBox="0 0 26.42 17.834"
                fill="currentColor"
              >
                <path
                  id="Icon_zocial-email"
                  data-name="Icon zocial-email"
                  d="M.072,20.323V5.648q0-.025.076-.484l8.637,7.389L.174,20.832a2.159,2.159,0,0,1-.1-.51ZM1.219,4.144a1.1,1.1,0,0,1,.433-.076H24.913a1.443,1.443,0,0,1,.459.076l-8.662,7.414-1.147.917-2.268,1.86-2.268-1.86-1.147-.917Zm.025,17.682,8.688-8.331,3.363,2.726,3.363-2.726,8.688,8.331a1.223,1.223,0,0,1-.433.076H1.652a1.154,1.154,0,0,1-.408-.076ZM17.8,12.552l8.611-7.389a1.521,1.521,0,0,1,.076.484V20.323a1.953,1.953,0,0,1-.076.51Z"
                  transform="translate(-0.072 -4.068)"
                />
              </svg>

              <a href="" style={{ width: "90%" }}>
                fizzanadeemsiddiqui@peervestglobal.com
              </a>
            </div>
            <div className="footer__container__content__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24.421"
                height="34.887"
                viewBox="0 0 24.421 34.887"
              >
                <path
                  id="Icon_material-location-on"
                  data-name="Icon material-location-on"
                  d="M19.71,3A12.2,12.2,0,0,0,7.5,15.21c0,9.158,12.21,22.677,12.21,22.677s12.21-13.519,12.21-22.677A12.2,12.2,0,0,0,19.71,3Zm0,16.571a4.361,4.361,0,1,1,4.361-4.361A4.362,4.362,0,0,1,19.71,19.571Z"
                  transform="translate(-7.5 -3)"
                  fill="#fbfbfb"
                />
              </svg>
              <a href="" style={{ width: "90%" }}>
                NICL, SBASSE basement, LUMS, Sector U DHA Phase 3, Lahore,
                Punjab 54792
              </a>
            </div>
          </div>
          <div className="footer__container__content__quick__links">
            <div className="footer__container__content__quick__links__heading">
              Social Media
            </div>
            <div className="footer__container__content__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.186"
                height="21.42"
                viewBox="0 0 11.186 21.42"
                fill="currentColor"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M87.259,21.421V11.662h3.332l.476-3.808H87.259V5.474c0-1.071.357-1.9,1.9-1.9h2.023V.119C90.71.119,89.52,0,88.211,0c-2.856,0-4.879,1.785-4.879,5V7.854H80v3.808h3.332v9.758Z"
                  transform="translate(-80)"
                  fill-rule="evenodd"
                />
              </svg>
              <a href="https://www.facebook.com/peervest">Facebook</a>
            </div>
            <div className="footer__container__content__link">
              <Linkedin size={18} color="currentColor" />
              <a href="https://www.linkedin.com/company/atpeervest/">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copywrite__section">
        <span> Developed By</span>{" "}
        <a href="https://www.dsmeglobal.com/" target="_blank">
          DSME Global Links (Pvt) Ltd
        </a>
      </div>
    </>
  );
}
