import React from "react";
import main__background from "../Assets/main__background.jpg";
import founderPic from "../Assets/founderPic.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import container__our__team__wrapper__entry__img__1 from "../Assets/container__our__team__wrapper__entry__img__1.png";
import container__our__team__wrapper__entry__img__2 from "../Assets/container__our__team__wrapper__entry__img__2.png";
import container__our__team__wrapper__entry__img__3 from "../Assets/container__our__team__wrapper__entry__img__3.png";
import aboutUsSvg from "../Assets/aboutUsSvg.svg";
import ourVisionSvg from "../Assets/ourVisionSvg.svg";
import contact__background from "../Assets/contact__background.jpg";
import { Link } from "react-router-dom";
import { Linkedin } from "react-feather";

export default function AboutUsScreen() {
  return (
    <>
      <Header />
      <div className="homepage__main__container">
        <div
          className="homepage__main__container__jumbotron"
          style={{ height: 500, overflow: "hidden" }}
        >
          <img
            src={contact__background}
            alt="contact__background"
            className="homepage__main__container__jumbotron__img"
            style={{ height: "100%" }}
          />
          <div className="homepage__main__container__jumbotron__wrapper">
            <div className="homepage__main__container__jumbotron__wrapper__content">
              <div
                className="homepage__main__container__jumbotron__wrapper__content__heading"
                style={{
                  maxWidth: "100%",
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                <span>What is PeerVest</span>
              </div>
              <div
                className="homepage__main__container__jumbotron__wrapper__content__sub__heading"
                style={{
                  maxWidth: "100%",
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Peervest is a fund sourcing platform to bridge the gap between
                potential investors and promising start-ups. Peervest also acts
                as a consultancy to start-ups which do not have enough resources
                otherwise to achieve investment readiness. Once start-ups are
                investable; Peervest then help those start-ups connect with
                Angel Investors, Venture Capital firms and other means of
                funding opportunities. Peervest provides investors a platform to
                invest in a business with an intention of earning returns in the
                long-term. Investors get to decide which ideas are worth
                funding. If it succeeds, investors make money and if does not,
                they lose it all.
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="container__our__team">
            <div className="container__our__team__heading">Our Team</div>
            <div className="container__our__team__info">
              Create a concise and compelling investment pitch deck that
              contains information required by investors. Create a concise and
              compelling investment.
            </div>
            <div className="container__our__team__wrapper">
              <div className="container__our__team__card">
                <img
                  src={founderPic}
                  alt="container__our__team__wrapper__entry__img"
                  className="container__our__team__card__img"
                />
                <div className="container__our__team__card__content__overlay">
                  <div className="container__our__team__card__content">
                    <div className="container__our__team__card__content__heading">
                      Fizza Nadeem Siddique
                    </div>
                    <div className="container__our__team__card__content__info">
                      (Founder)
                    </div>
                    <div className="container__our__team__card__content__social__links__container">
                      <div className="container__our__team__card__content__social__links">
                        <a href="https://www.facebook.com/SNFizza">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7.285"
                            height="14.568"
                            viewBox="0 0 7.285 14.568"
                          >
                            <path
                              id="facebook"
                              d="M12.142,2.419h1.33V.1A17.174,17.174,0,0,0,11.534,0,3.076,3.076,0,0,0,8.3,3.423v2.04H6.187v2.59H8.3v6.516H10.9V8.053h2.03l.322-2.59H10.9V3.68c0-.748.2-1.261,1.245-1.261Z"
                              transform="translate(-6.187)"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="https://www.instagram.com/fizzanadeemsiddiqui/">
                          <svg
                            id="instagram_1_"
                            data-name="instagram (1)"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14.568"
                            height="14.568"
                            viewBox="0 0 14.568 14.568"
                          >
                            <path
                              id="Path_148"
                              data-name="Path 148"
                              d="M213.561,212.28a1.28,1.28,0,1,1-1.28-1.28A1.28,1.28,0,0,1,213.561,212.28Zm0,0"
                              transform="translate(-204.996 -204.996)"
                              fill="#0a264e"
                            />
                            <path
                              id="Path_149"
                              data-name="Path 149"
                              d="M126.032,120h-4.325A1.709,1.709,0,0,0,120,121.707v4.325a1.709,1.709,0,0,0,1.707,1.707h4.325a1.709,1.709,0,0,0,1.707-1.707v-4.325A1.709,1.709,0,0,0,126.032,120Zm-2.163,6A2.134,2.134,0,1,1,126,123.87,2.136,2.136,0,0,1,123.87,126Zm2.447-4.154a.427.427,0,1,1,.427-.427A.427.427,0,0,1,126.317,121.85Zm0,0"
                              transform="translate(-116.586 -116.586)"
                              fill="#0a264e"
                            />
                            <path
                              id="Path_150"
                              data-name="Path 150"
                              d="M10.727,0H3.841A3.846,3.846,0,0,0,0,3.841v6.886a3.846,3.846,0,0,0,3.841,3.841h6.886a3.846,3.846,0,0,0,3.841-3.841V3.841A3.846,3.846,0,0,0,10.727,0Zm1.28,9.447a2.564,2.564,0,0,1-2.561,2.561H5.122A2.564,2.564,0,0,1,2.561,9.447V5.122A2.564,2.564,0,0,1,5.122,2.561H9.447a2.564,2.564,0,0,1,2.561,2.561Zm0,0"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="https://twitter.com/FizzaNadeemS">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.689"
                            height="12.748"
                            viewBox="0 0 15.689 12.748"
                          >
                            <path
                              id="twitter"
                              d="M14.077,5.429a6.421,6.421,0,0,0,1.612-1.67h0a6.717,6.717,0,0,1-1.853.508,3.2,3.2,0,0,0,1.415-1.777,6.436,6.436,0,0,1-2.04.779,3.216,3.216,0,0,0-5.564,2.2,3.312,3.312,0,0,0,.075.733,9.106,9.106,0,0,1-6.63-3.365,3.216,3.216,0,0,0,.988,4.3,3.179,3.179,0,0,1-1.453-.4v.035A3.232,3.232,0,0,0,3.2,9.934a3.2,3.2,0,0,1-.843.106,2.839,2.839,0,0,1-.609-.055,3.248,3.248,0,0,0,3.005,2.241A6.465,6.465,0,0,1,.769,13.6,6.083,6.083,0,0,1,0,13.554,9.058,9.058,0,0,0,4.934,15a9.092,9.092,0,0,0,9.143-9.568Z"
                              transform="translate(0 -2.25)"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="https://www.linkedin.com/in/fizza-nadeem-siddiqui">
                          <Linkedin size={18} color="#0a264e" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container__our__team__card">
                <img
                  src={container__our__team__wrapper__entry__img__1}
                  alt="container__our__team__wrapper__entry__img"
                  className="container__our__team__card__img"
                />
                <div className="container__our__team__card__content__overlay">
                  <div className="container__our__team__card__content">
                    <div className="container__our__team__card__content__heading">
                      Laraib Piracha
                    </div>
                    <div className="container__our__team__card__content__info">
                      (Co-founder)
                    </div>
                    <div className="container__our__team__card__content__social__links__container">
                      <div className="container__our__team__card__content__social__links">
                        <a href="https://www.facebook.com/laraib.piracha">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7.285"
                            height="14.568"
                            viewBox="0 0 7.285 14.568"
                          >
                            <path
                              id="facebook"
                              d="M12.142,2.419h1.33V.1A17.174,17.174,0,0,0,11.534,0,3.076,3.076,0,0,0,8.3,3.423v2.04H6.187v2.59H8.3v6.516H10.9V8.053h2.03l.322-2.59H10.9V3.68c0-.748.2-1.261,1.245-1.261Z"
                              transform="translate(-6.187)"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="https://www.instagram.com/piracha.laraib/">
                          <svg
                            id="instagram_1_"
                            data-name="instagram (1)"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14.568"
                            height="14.568"
                            viewBox="0 0 14.568 14.568"
                          >
                            <path
                              id="Path_148"
                              data-name="Path 148"
                              d="M213.561,212.28a1.28,1.28,0,1,1-1.28-1.28A1.28,1.28,0,0,1,213.561,212.28Zm0,0"
                              transform="translate(-204.996 -204.996)"
                              fill="#0a264e"
                            />
                            <path
                              id="Path_149"
                              data-name="Path 149"
                              d="M126.032,120h-4.325A1.709,1.709,0,0,0,120,121.707v4.325a1.709,1.709,0,0,0,1.707,1.707h4.325a1.709,1.709,0,0,0,1.707-1.707v-4.325A1.709,1.709,0,0,0,126.032,120Zm-2.163,6A2.134,2.134,0,1,1,126,123.87,2.136,2.136,0,0,1,123.87,126Zm2.447-4.154a.427.427,0,1,1,.427-.427A.427.427,0,0,1,126.317,121.85Zm0,0"
                              transform="translate(-116.586 -116.586)"
                              fill="#0a264e"
                            />
                            <path
                              id="Path_150"
                              data-name="Path 150"
                              d="M10.727,0H3.841A3.846,3.846,0,0,0,0,3.841v6.886a3.846,3.846,0,0,0,3.841,3.841h6.886a3.846,3.846,0,0,0,3.841-3.841V3.841A3.846,3.846,0,0,0,10.727,0Zm1.28,9.447a2.564,2.564,0,0,1-2.561,2.561H5.122A2.564,2.564,0,0,1,2.561,9.447V5.122A2.564,2.564,0,0,1,5.122,2.561H9.447a2.564,2.564,0,0,1,2.561,2.561Zm0,0"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="https://www.linkedin.com/in/laraib-piracha-31819b42">
                          <Linkedin size={18} color="#0a264e" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container__our__team__card">
                <img
                  src={container__our__team__wrapper__entry__img__2}
                  alt="container__our__team__wrapper__entry__img"
                  className="container__our__team__card__img"
                />
                <div className="container__our__team__card__content__overlay">
                  <div className="container__our__team__card__content">
                    <div className="container__our__team__card__content__heading">
                      Tajulle Ahmed
                    </div>
                    <div className="container__our__team__card__content__info">
                      (Co-founder)
                    </div>
                    <div className="container__our__team__card__content__social__links__container">
                      <div className="container__our__team__card__content__social__links">
                        <a href="https://www.facebook.com/tajulle.ahmed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7.285"
                            height="14.568"
                            viewBox="0 0 7.285 14.568"
                          >
                            <path
                              id="facebook"
                              d="M12.142,2.419h1.33V.1A17.174,17.174,0,0,0,11.534,0,3.076,3.076,0,0,0,8.3,3.423v2.04H6.187v2.59H8.3v6.516H10.9V8.053h2.03l.322-2.59H10.9V3.68c0-.748.2-1.261,1.245-1.261Z"
                              transform="translate(-6.187)"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="https://www.instagram.com/tajulle/">
                          <svg
                            id="instagram_1_"
                            data-name="instagram (1)"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14.568"
                            height="14.568"
                            viewBox="0 0 14.568 14.568"
                          >
                            <path
                              id="Path_148"
                              data-name="Path 148"
                              d="M213.561,212.28a1.28,1.28,0,1,1-1.28-1.28A1.28,1.28,0,0,1,213.561,212.28Zm0,0"
                              transform="translate(-204.996 -204.996)"
                              fill="#0a264e"
                            />
                            <path
                              id="Path_149"
                              data-name="Path 149"
                              d="M126.032,120h-4.325A1.709,1.709,0,0,0,120,121.707v4.325a1.709,1.709,0,0,0,1.707,1.707h4.325a1.709,1.709,0,0,0,1.707-1.707v-4.325A1.709,1.709,0,0,0,126.032,120Zm-2.163,6A2.134,2.134,0,1,1,126,123.87,2.136,2.136,0,0,1,123.87,126Zm2.447-4.154a.427.427,0,1,1,.427-.427A.427.427,0,0,1,126.317,121.85Zm0,0"
                              transform="translate(-116.586 -116.586)"
                              fill="#0a264e"
                            />
                            <path
                              id="Path_150"
                              data-name="Path 150"
                              d="M10.727,0H3.841A3.846,3.846,0,0,0,0,3.841v6.886a3.846,3.846,0,0,0,3.841,3.841h6.886a3.846,3.846,0,0,0,3.841-3.841V3.841A3.846,3.846,0,0,0,10.727,0Zm1.28,9.447a2.564,2.564,0,0,1-2.561,2.561H5.122A2.564,2.564,0,0,1,2.561,9.447V5.122A2.564,2.564,0,0,1,5.122,2.561H9.447a2.564,2.564,0,0,1,2.561,2.561Zm0,0"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>

                      <div className="container__our__team__card__content__social__links">
                        <a href="https://www.linkedin.com/in/tajulle-ahmed-54522965">
                          <Linkedin size={18} color="#0a264e" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container__our__team__card">
                <img
                  src={container__our__team__wrapper__entry__img__3}
                  alt="container__our__team__wrapper__entry__img"
                  className="container__our__team__card__img"
                />
                <div className="container__our__team__card__content__overlay">
                  <div className="container__our__team__card__content">
                    <div className="container__our__team__card__content__heading">
                      Khizar Iqbal Arain
                    </div>
                    <div className="container__our__team__card__content__info">
                      (Co-founder)
                    </div>
                    <div className="container__our__team__card__content__social__links__container">
                      <div className="container__our__team__card__content__social__links">
                        <a href="https://www.facebook.com/khizr.i.arain">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7.285"
                            height="14.568"
                            viewBox="0 0 7.285 14.568"
                          >
                            <path
                              id="facebook"
                              d="M12.142,2.419h1.33V.1A17.174,17.174,0,0,0,11.534,0,3.076,3.076,0,0,0,8.3,3.423v2.04H6.187v2.59H8.3v6.516H10.9V8.053h2.03l.322-2.59H10.9V3.68c0-.748.2-1.261,1.245-1.261Z"
                              transform="translate(-6.187)"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="https://www.instagram.com/khizr.iqbal.arain/">
                          <svg
                            id="instagram_1_"
                            data-name="instagram (1)"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14.568"
                            height="14.568"
                            viewBox="0 0 14.568 14.568"
                          >
                            <path
                              id="Path_148"
                              data-name="Path 148"
                              d="M213.561,212.28a1.28,1.28,0,1,1-1.28-1.28A1.28,1.28,0,0,1,213.561,212.28Zm0,0"
                              transform="translate(-204.996 -204.996)"
                              fill="#0a264e"
                            />
                            <path
                              id="Path_149"
                              data-name="Path 149"
                              d="M126.032,120h-4.325A1.709,1.709,0,0,0,120,121.707v4.325a1.709,1.709,0,0,0,1.707,1.707h4.325a1.709,1.709,0,0,0,1.707-1.707v-4.325A1.709,1.709,0,0,0,126.032,120Zm-2.163,6A2.134,2.134,0,1,1,126,123.87,2.136,2.136,0,0,1,123.87,126Zm2.447-4.154a.427.427,0,1,1,.427-.427A.427.427,0,0,1,126.317,121.85Zm0,0"
                              transform="translate(-116.586 -116.586)"
                              fill="#0a264e"
                            />
                            <path
                              id="Path_150"
                              data-name="Path 150"
                              d="M10.727,0H3.841A3.846,3.846,0,0,0,0,3.841v6.886a3.846,3.846,0,0,0,3.841,3.841h6.886a3.846,3.846,0,0,0,3.841-3.841V3.841A3.846,3.846,0,0,0,10.727,0Zm1.28,9.447a2.564,2.564,0,0,1-2.561,2.561H5.122A2.564,2.564,0,0,1,2.561,9.447V5.122A2.564,2.564,0,0,1,5.122,2.561H9.447a2.564,2.564,0,0,1,2.561,2.561Zm0,0"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>

                      <div className="container__our__team__card__content__social__links">
                        <a href="https://www.linkedin.com/in/khizriqbal">
                          <Linkedin size={18} color="#0a264e" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about__us__container">
          <div className="about__us__content">
            <div className="about__us__content__left">
              <img
                src={aboutUsSvg}
                alt="aboutUsSvg"
                className="about__us__content__left__img"
              />
            </div>
            <div className="about__us__content__right">
              <div className="about__us__content__left__heading">Our Story</div>
              <div className="about__us__content__left__info">
                Peervest is a fund sourcing platform to bridge the gap between
                potential investors and promising start-ups. Peervest also acts
                as a consultancy to start-ups which do not have enough resources
                otherwise to achieve investment readiness.
              </div>
              <div className="about__us__content__left__info">
                Once start-ups are investable; Peervest then help those
                start-ups connect with Angel Investors, Venture Capital firms
                and other means of funding opportunities. Peervest provides
                investors a platform to invest in a business with an intention
                of earning returns in the long-term. Investors get to decide
                which ideas are worth funding. If it succeeds, investors make
                money and if does not, they lose it all.
              </div>
              <div className="about__us__content__right__buttons">
                <div className="about__us__content__right__buttons__left">
                  <Link
                    to="/contact"
                    className="about__us__content__right__buttons__left__cta"
                  >
                    Contact us
                  </Link>
                </div>
                <div className="about__us__content__right__buttons__right"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="our__vision__container">
          <div className="our__vision__container__content">
            <div className="our__vision__container__content__left">
              <div className="our__vision__container__content__left__heading">
                Our Vision
              </div>
              <div className="our__vision__container__content__left__info">
                My vision is to imtroduce crowdfunding as a safe and viable
                fundeaising option for Pakistan's start-ups. Having closely
                worked with financially constrained startups and the investor
                fraternity, I found the equation off balanced with a large
                influx of needy startups and only a handful of angels or VC's
                that could put in their money. My background in accounting and
                finance from IBA and the mentorship i recieved there gave me a
                sound understanding of the investment and funding culture in
                Pakistan's start-up ecosystem. PeerVest Global is the outcome of
                the thought process that started at IBA, and is today a
                functioning platform, always evolving. We're here to hand hold
                all tech startups and investors in their journey to succeed.
              </div>
              <Link
                to="/contact"
                className="homepage__main__container__jumbotron__wrapper__content__cta"
              >
                Join Us Now
              </Link>
            </div>
            <div className="our__vision__container__content__right">
              <img
                src={ourVisionSvg}
                alt="ourVisionSvg"
                className="our__vision__container__content__right__img"
              />
            </div>
          </div>
        </div>
        <div className="milestone__wrapper" style={{ marginBottom: 0 }}>
          <div className="milestone__container" style={{ marginBottom: 0 }}>
            <div className="milestone__container__heading">Milestones</div>
            <div className="milestone__container__content">
              <div className="milestone__container__content__card ">
                <div className="milestone__container__content__card__value">
                  56
                </div>
                <div className="milestone__container__content__card__type">
                  Arranged
                </div>
                <div className="milestone__container__content__card__heading">
                  Meetings
                </div>
                <div
                  className="milestone__container__content__card__svg"
                  style={{ marginTop: 3 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55.38"
                    height="55.35"
                    viewBox="0 0 65.38 65.35"
                  >
                    <path
                      id="Path_12033"
                      data-name="Path 12033"
                      d="M121.072,305.856a5.973,5.973,0,0,0-.637-4.242c-.746-1.163-1.436-2.389-2.1-3.574-.3-.524-.592-1.051-.894-1.575l-.148-.257.232-.185a6.159,6.159,0,0,0,2.4-3.819,9.131,9.131,0,0,0,.121-1.606q.006-2.846,0-5.692c0-2.91,0-5.92.013-8.88a7.424,7.424,0,0,0-3.238-6.51.84.84,0,0,1-.154-.15l-.03-.034-.3-.32.381-.216a8.442,8.442,0,1,0-8.046-.008l.423.239-.366.32c-2.247,1.965-2.837,2.886-3.323,5.187l-.133.63-.45-.46c-1.015-1.037-2.254-1-3.566-.968a11.4,11.4,0,0,1-1.818-.048l-.3-.04v-3.027q0-2.3,0-4.6a7.27,7.27,0,0,0-5.024-7.3.969.969,0,0,1-.185-.1c-.027-.018-.059-.039-.1-.064l-.4-.245.354-.308a8.463,8.463,0,0,0,3.094-7.645,8.092,8.092,0,0,0-2.917-5.427,8.4,8.4,0,0,0-11.338.364,8.191,8.191,0,0,0-2.567,6.472,8.412,8.412,0,0,0,3.088,6.181l.369.318-.423.242c-.261.149-.525.289-.78.424a11.7,11.7,0,0,0-1.536.916,6.87,6.87,0,0,0-2.909,5.572c-.038,1.668-.032,3.368-.026,5.012q0,1.1,0,2.2v.988l-.29.047a10,10,0,0,1-1.865.067c-1.288-.034-2.5-.067-3.52.989l-.463.48-.124-.655a7.62,7.62,0,0,0-3.352-5.172l-.429-.288.43-.286.325-.213c.21-.137.408-.266.6-.4a8.454,8.454,0,1,0-13.226-8.129,1.52,1.52,0,0,1-.091.315l-.018.05v1.709c.032.14.062.28.093.42.069.318.14.646.228.958a8.407,8.407,0,0,0,3.792,5.008c.088.054.172.112.266.178l.136.094.392.267-.558.431c-.123.094-.237.182-.349.271a6.885,6.885,0,0,0-2.854,5.476c-.049,4.6-.052,9.544-.009,16.032a5.975,5.975,0,0,0,2.457,4.712l.224.181-3.818,6.978v2.7a3.361,3.361,0,0,0,2.413,2.413h60.52A2.937,2.937,0,0,0,121.072,305.856Zm-13.3-39.665a6.943,6.943,0,0,1,4.922-11.837h.011a6.936,6.936,0,1,1-.015,13.872h-.01A6.9,6.9,0,0,1,107.772,266.191Zm-.978,11.71c.016-.343.023-.7.03-1.037a17.045,17.045,0,0,1,.153-2.336,5.809,5.809,0,0,1,11.516.736c.054,4.423.04,8.92.025,13.268l-.008,2.659a4.417,4.417,0,0,1-1.643,3.394l-.3.267-.219-.336-.111-.168c-.077-.115-.15-.224-.218-.341q-.624-1.078-1.246-2.156c-1.017-1.76-2.068-3.581-3.112-5.364a1.133,1.133,0,0,1-.007-1.274c.833-1.423,1.663-2.881,2.465-4.291l.785-1.378a4.5,4.5,0,0,0,.237-.448.734.734,0,0,0-.286-.97.711.711,0,0,0-.979.208,5.049,5.049,0,0,0-.355.58c-.039.071-.079.142-.119.212q-.463.81-.927,1.618c-.84,1.465-1.709,2.979-2.549,4.476a3.108,3.108,0,0,1-2.919,1.722c-1.332-.01-2.688-.008-4-.006-1.074,0-2.148,0-3.221,0a2.36,2.36,0,0,1-1.716-.628,1.864,1.864,0,0,1-.524-1.358,2.055,2.055,0,0,1,2.261-1.981l.924,0c1.453-.006,2.954-.012,4.433.008a2.185,2.185,0,0,0,2.162-1.236c.666-1.213,1.368-2.431,2.046-3.609q.445-.772.888-1.545l.058-.1a2.061,2.061,0,0,0,.136-.255.745.745,0,0,0-.345-.99.7.7,0,0,0-.957.271c-.276.441-.539.906-.792,1.355-.131.233-.262.465-.4.7-.08.138-.166.273-.252.408-.038.06-.076.12-.114.18l-.138.221-.68-.2ZM81.547,251.4a6.953,6.953,0,0,1,6.924-6.958h.013a6.947,6.947,0,0,1,6.933,6.938,6.954,6.954,0,0,1-6.923,6.954h-.016a6.94,6.94,0,0,1-6.929-6.934Zm-2.171,13.853a5.7,5.7,0,0,1,5.257-5.345c2.516-.091,5.1-.091,7.693,0a5.577,5.577,0,0,1,5.237,5.145c.085,1.916.065,3.872.045,5.763-.009.83-.017,1.689-.017,2.538v.345H94.731v-2.919q0-2.413,0-4.827a1.151,1.151,0,0,0-.25-.826.685.685,0,0,0-.514-.169c-.49.01-.74.341-.742.982q-.006,2.393,0,4.787v2.984H83.743v-3.677q0-2.046,0-4.091a1.115,1.115,0,0,0-.257-.808.709.709,0,0,0-.531-.175c-.334.009-.717.13-.719.991,0,1.748,0,3.5,0,5.264v2.476h-2.71l-.091-.228a.581.581,0,0,1-.077-.273c0-.767,0-1.534-.008-2.3C79.337,269.042,79.326,267.132,79.376,265.253Zm-22.054-3.928a6.959,6.959,0,0,1,6.916-6.971h.027a6.963,6.963,0,0,1,6.945,6.9,6.917,6.917,0,0,1-6.9,6.968h-.032A6.954,6.954,0,0,1,57.322,261.325Zm1.135,29.909c-.025-1.478-.023-2.98-.021-4.432q0-.72,0-1.441,0-1.306,0-2.612c0-2.314-.009-4.707.01-7.062a5.835,5.835,0,0,1,11.657-.463c.037.625.027,1.257.018,1.868,0,.28-.009.561-.009.84v.251l-.632.2-.559-.976c-.317-.554-.633-1.107-.954-1.658a1.158,1.158,0,0,0-.645-.592.671.671,0,0,0-.521.1c-.547.332-.328.91-.15,1.225q.672,1.184,1.351,2.365.86,1.5,1.714,3.006a2.015,2.015,0,0,0,1.913,1.106h0l1.055,0c1.515,0,3.082-.005,4.623.006a2.169,2.169,0,0,1,1.578.652,1.934,1.934,0,0,1,.53,1.429,1.883,1.883,0,0,1-1.809,1.849c-3.16.035-5.785.031-8.262-.015a2.623,2.623,0,0,1-2.215-1.517q-1.9-3.327-3.809-6.65l-.026-.044a1.9,1.9,0,0,0-.312-.448.652.652,0,0,0-.92-.064.668.668,0,0,0-.26.891,5.9,5.9,0,0,0,.362.676c.049.083.1.166.145.249l.774,1.357c.731,1.279,1.487,2.6,2.214,3.913a1.234,1.234,0,0,1,.064,1.069c-1.248,2.207-2.537,4.439-3.785,6.6l-.8,1.393a1.7,1.7,0,0,1-.1.142l-.059.083-.221.318-.29-.257A4.434,4.434,0,0,1,58.456,291.235Zm8.175-4.053.316.274c1.181,1.026,2.59,1.01,4.082.993h.033c1.074-.012,2.165-.009,3.221-.006,1.016,0,2.066.005,3.1-.005a3.467,3.467,0,0,0,3.529-3.038,3.541,3.541,0,0,0-2.8-3.862,4.488,4.488,0,0,0-.949-.076c-.982,0-1.964,0-2.946,0q-1.138,0-2.276,0a1.187,1.187,0,0,1-1.073-.537,1.208,1.208,0,0,1,.076-1.218q.374-.652.751-1.3c.419-.724.853-1.473,1.269-2.213a1.709,1.709,0,0,1,1.6-.94h0c8.907.008,18.278.008,27.854,0h0a1.665,1.665,0,0,1,1.557.9q.506.889,1.019,1.773.536.927,1.067,1.856a1.116,1.116,0,0,1,.034,1.132,1.166,1.166,0,0,1-1.032.546c-.674,0-1.349,0-2.024,0-1.175,0-2.389-.007-3.581.015a3.578,3.578,0,0,0-3.411,3.062,3.472,3.472,0,0,0,2.614,3.8,5.125,5.125,0,0,0,1.194.108c.876,0,1.752,0,2.628,0,1.358,0,2.763-.007,4.145.015a5.019,5.019,0,0,0,3.4-.992l.313-.247,8.727,15.126H57.891Zm53.008,18.112a1.459,1.459,0,0,1-1.483,1.453c-.095.005-.188.007-.281.007h-.2l-.187,0H59.6c-.931,0-1.543-.079-1.913-.48s-.4-1.059-.324-2.04l.026-.316h62.258v.345c0,.118,0,.232,0,.341C119.65,304.838,119.653,305.064,119.639,305.294Z"
                      transform="translate(-55.807 -242.909)"
                      fill="#0a2751"
                    />
                  </svg>
                </div>
              </div>
              <div className="milestone__container__content__card ">
                <div className="milestone__container__content__card__value">
                  56
                </div>
                <div className="milestone__container__content__card__type">
                  Successful
                </div>
                <div className="milestone__container__content__card__heading">
                  Campaigns
                </div>
                <div
                  className="milestone__container__content__card__svg"
                  style={{ padding: 10 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="18.306"
                    viewBox="0 0 389 388.306"
                  >
                    <g
                      id="Group_1015"
                      data-name="Group 1015"
                      transform="translate(482.5 -155.8)"
                    >
                      <path
                        id="Path_12034"
                        data-name="Path 12034"
                        d="M-480,451.782c.33-.93.681-1.853.987-2.79a22.31,22.31,0,0,1,28.369-14.6,4.3,4.3,0,0,0,5.148-1.238c15.3-15.409,30.722-30.7,46.033-46.105a13.066,13.066,0,0,0,2.9-4.655q33.646-93.475,67.114-187.015a6.661,6.661,0,0,0-.065-4.493c-4.681-10.661-1.941-21.959,7.069-28.359,9.148-6.5,21-5.459,29.371,2.847q30.3,30.069,60.435,60.3c.968.968,1.772,2.1,2.8,3.324,11.137-7.258,22.855-10.162,35.589-7.5a44.57,44.57,0,0,1,24.274,13.906c10.6,11.579,18.124,33.082,3.552,56.188.9.943,1.816,1.944,2.776,2.9,18.724,18.7,37.4,37.444,56.221,56.042,4.923,4.864,9.508,9.812,11.432,16.658v8.234a7.224,7.224,0,0,0-.677,1.277c-4.369,14.528-18.124,20.755-32.04,14.638a6.766,6.766,0,0,0-4.511.052c-13.537,4.743-27.023,9.631-40.527,14.469q-15.1,5.41-30.27,10.82c8.144,13.8,7.017,22.451-4.187,33.635q-24.255,24.215-48.518,48.422c-11.148,11.112-23.986,11.074-35.2-.09q-14.2-14.141-28.35-28.331c-2.271-2.29-4.283-4.835-6.394-7.238-1.151.911-1.572,1.182-1.919,1.527-14.412,14.37-28.782,28.782-43.272,43.073-1.627,1.605-1.248,2.865-.7,4.6a22.141,22.141,0,0,1-10.24,26.338,68.491,68.491,0,0,1-7.2,2.981h-8.25c-6.909-2.073-11.885-6.8-16.818-11.771Q-441.493,503.177-468.2,476.8c-4.984-4.923-9.749-9.867-11.8-16.784Zm149.463-208.221c-.636,1.492-1.174,2.6-1.587,3.747q-24.417,68.048-48.869,136.083c-1.009,2.8-.787,4.578,1.447,6.779q25.615,25.236,50.894,50.814c2.527,2.563,4.544,2.769,7.741,1.622Q-234.1,411.457-147.22,380.5c1.332-.475,2.617-1.083,3.563-1.478L-317.187,205.83c-2.178,6.029-4.32,12.362-6.778,18.572-1.031,2.6-.572,4.209,1.43,6.145,7.9,7.638,15.647,15.43,23.353,23.262,4.232,4.3,3.225,10.559-1.941,12.613-3.414,1.357-6.3.3-8.821-2.247C-316.7,257.357-323.5,250.594-330.537,243.561ZM-383.283,497.04l44.389-44.234-51.879-51.757-44.337,44.265Zm73.76-324.8c-2.415,1.86-5.247,3-6.113,4.992-.939,2.16-.273,5.152.157,7.7.173,1.029,1.542,1.885,2.423,2.765q93.587,93.422,187.187,186.83a27.165,27.165,0,0,0,3,2.811,7.545,7.545,0,0,0,9.628-.719,7.26,7.26,0,0,0,.8-9.566,28.047,28.047,0,0,0-3.046-3.29q-66.675-66.561-133.362-133.11-26.911-26.859-53.867-53.675C-304.479,175.231-306.835,174.08-309.523,172.236Zm-3.9,283.52c.82.93,1.43,1.7,2.122,2.393q15.213,15.207,30.451,30.39c4.651,4.626,8.495,4.608,13.169-.051q25.172-25.089,50.311-50.21a19.34,19.34,0,0,0,2.01-2.211,7.157,7.157,0,0,0-.259-9.292c-2.207-2.726-4.1-4.846-8.612-3.042-12.019,4.808-24.356,8.823-36.557,13.18C-278.253,443.152-295.712,449.416-313.419,455.756Zm-144.727-8.592c-2.179,1.954-4.68,3.437-6.066,5.623-1.884,2.971-.685,6.068,1.716,8.469q31.471,31.471,63.018,62.871c3.319,3.3,7.677,3.311,10.724.415,3.2-3.037,3.29-7.473-.181-10.955q-31.426-31.515-63.03-62.856C-453.373,449.336-455.5,448.659-458.146,447.164Zm280.88-167.342c7.115-10.92,4.46-27.12-6.048-36.633-9.889-8.953-26.171-10.023-34.247-3.589Z"
                        stroke="#fff"
                        stroke-width="5"
                      />
                      <path
                        id="Path_12035"
                        data-name="Path 12035"
                        d="M-133.387,204.466a20.053,20.053,0,0,1-2.607,4.3c-3.55,3.84-7.3,7.5-11.081,11.122-3.556,3.4-7.9,3.479-11,.375s-3-7.393.455-10.973q5.714-5.914,11.668-11.6a7.079,7.079,0,0,1,8.311-1.351C-134.748,197.656-133.359,200.024-133.387,204.466Z"
                        stroke="#fff"
                        stroke-width="5"
                      />
                      <path
                        id="Path_12036"
                        data-name="Path 12036"
                        d="M-214.438,194.975c.009,5.226-2.489,8.29-6.081,8.96a7.114,7.114,0,0,1-8.133-4.541c-1.893-6.052-3.547-12.2-4.92-18.385-.794-3.576,1.71-6.862,5.307-7.953,3.354-1.017,7.314.288,8.476,3.647C-217.559,183.148-215.922,189.8-214.438,194.975Z"
                        stroke="#fff"
                        stroke-width="5"
                      />
                      <path
                        id="Path_12037"
                        data-name="Path 12037"
                        d="M-132.542,276.582c5.176,1.492,11.839,3.136,18.288,5.386,3.3,1.15,4.545,5.214,3.474,8.535-1.147,3.561-4.473,5.967-8.07,5.156-6.075-1.37-12.109-2.989-18.054-4.844a7.112,7.112,0,0,1-4.727-8.337C-140.887,278.893-137.8,276.483-132.542,276.582Z"
                        stroke="#fff"
                        stroke-width="5"
                      />
                      <path
                        id="Path_12038"
                        data-name="Path 12038"
                        d="M-173.053,181.763c-1.468,5.156-3.111,11.8-5.3,18.257-1.084,3.192-4.923,4.6-8.124,3.844-3.416-.811-6.309-3.907-5.626-7.332a178.985,178.985,0,0,1,5.2-19.8c1.034-3.212,4.9-4.6,8.1-3.806C-175.253,173.812-173.055,176.608-173.053,181.763Z"
                        stroke="#fff"
                        stroke-width="5"
                      />
                      <path
                        id="Path_12039"
                        data-name="Path 12039"
                        d="M-132.707,254.4c-5.084,0-8.085-2.326-8.882-5.72-.816-3.475.948-7.391,4.471-8.493,5.939-1.857,11.973-3.484,18.06-4.772,4.048-.858,7.184,1.419,8.328,5.2,1.008,3.329-.321,7.3-3.673,8.451C-120.862,251.287-127.523,252.923-132.707,254.4Z"
                        stroke="#fff"
                        stroke-width="5"
                      />
                      <path
                        id="Path_12040"
                        data-name="Path 12040"
                        d="M-272.65,283.481a7.456,7.456,0,0,1-7.434,7.356,7.392,7.392,0,0,1-7.395-7.731,7.4,7.4,0,0,1,7.578-7.187A7.5,7.5,0,0,1-272.65,283.481Z"
                        stroke="#fff"
                        stroke-width="5"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="milestone__container__content__card  ">
                <div className="milestone__container__content__card__value">
                  49
                </div>
                <div className="milestone__container__content__card__type">
                  Services
                </div>
                <div className="milestone__container__content__card__heading">
                  Delivered
                </div>
                <div className="milestone__container__content__card__svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="307.516"
                    height="201.002"
                    viewBox="0 0 307.516 201.002"
                  >
                    <g
                      id="Layer_2"
                      data-name="Layer 2"
                      transform="translate(-0.017 0.002)"
                    >
                      <g id="Layer_1" data-name="Layer 1">
                        <path
                          id="Path_42"
                          data-name="Path 42"
                          d="M111.79,187.82c-8.68-1.06-18.63.69-22.67-3.41-7.23-7.33-16.33-14.77-20.63-23-5.43-10.37-5.28-24.31-6.71-36.77-.37-3.2,4.11-8.29,7.63-10.35,9.24-5.42,19.08-9.86,28.91-14.19,2.12-.94,5.18.24,7.8.44-1.49,2.42-2.42,5.88-4.59,7.09-8.24,4.58-16.88,8.44-25.38,12.56-4.84,2.34-8.62,5.54-5.75,11.39,2.79,5.67,7.52,5.19,12.51,2.77,15.23-7.4,30.41-14.92,45.85-21.86,2.82-1.27,6.77,0,10.2.09-2.14,2.42-3.81,5.75-6.48,7.1-16.86,8.5-33.95,16.54-50.94,24.78-4.89,2.37-10,5.21-7,11.74,3.19,7,8.72,5,14.06,2.36,19-9.26,38-18.59,57.21-27.5,2.55-1.18,6.18,0,9.3.06-1.89,2.48-3.26,6-5.77,7.29-15.36,7.84-31,15-46.47,22.78-5.67,2.85-15.4,4.43-11.17,13.74s11.64,3.24,17.52.48c13.86-6.48,27.47-13.5,41.46-19.69,4.43-2,9.74-2,14.64-2.87,1,8.73-7.22,7.93-11.6,10.47-9,5.2-18.91,8.82-27.82,14.14-2.67,1.59-3.29,6.63-4.85,10.08,3.86,1.17,8.8,4.49,11.41,3.17,33.37-16.83,66.71-33.8,99.36-52,10-5.59,22.77-13.63,25.39-23,2.42-8.7-6.57-20.92-11.36-31.21-8.66-18.59-17.73-37-27.07-55.26-3.07-6-2.36-9.34,3.9-12.19,10.07-4.58,20-9.57,29.76-14.72C257.85-.51,261.22.06,264.06,6q20.79,43.11,42.12,86c2.79,5.58,1.17,8.65-4,10.59-23.26,8.74-41.21,25.26-61,39.55-22,15.9-47,27.62-70.94,40.77-9.4,5.17-19.36,9.31-29.08,13.88C124.8,204.41,117.9,201.84,111.79,187.82ZM298,94.9,256.4,10.08,226.35,25c14.24,28.89,27.84,56.47,41.65,84.5Z"
                        />
                        <path
                          id="Path_43"
                          data-name="Path 43"
                          d="M200.86,45.47c-25.45-8.58-50.3-17.23-75.38-25.15-4.25-1.35-9.55,0-14.25.84C101.3,22.85,91.45,25,78.79,27.47c-2.94,8.32-7.17,20.15-11.27,32-5.95,17.22-12.08,34.39-17.59,51.76-2.34,7.39-5.79,9-12.93,6.16-10.28-4.06-20.87-7.35-31.39-10.77C.52,105-1,101.89.66,97Q16.45,50.78,32.27,4.6C34.15-.9,37.85-.6,42.43,1.05,55.59,5.78,68.62,11.18,82.16,14.49c7.34,1.8,15.6,0,23.44-.37,8.53-.37,17.72-3.2,25.46-1,24.36,7,48.12,16.1,72.24,24,6.45,2.11,7.85,5.73,6.4,11.77-3.36,14-13.9,20.79-27.76,17-10.92-3-21.63-6.77-32.86-10.33-7.44,15.47-17.34,28-34.82,30.38-8.13,1.1-16.75-.27-25-1.57-2.47-.39-4.39-4.28-6.56-6.57,2.85-.53,5.7-1.45,8.56-1.51,9-.19,18.28,1.5,26.81-.43,11.14-2.47,17.93-11.66,21.8-22.08C142.75,46,146.79,45,154,47.85c9.37,3.7,19,6.74,28.71,9.51C193,60.32,197.51,57.46,200.86,45.47ZM41.28,109.75c10.4-30.4,20.35-59.46,30.53-89.22l-32-11.15L9.31,98.64Z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="milestone__container__content__card ">
                <div className="milestone__container__content__card__value">
                  59
                </div>
                <div className="milestone__container__content__card__type">
                  Funds
                </div>
                <div className="milestone__container__content__card__heading">
                  Raised
                </div>
                <div className="milestone__container__content__card__svg">
                  <svg
                    id="Layer_2"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="255.85"
                    height="254.33"
                    viewBox="0 0 255.85 254.33"
                  >
                    <g id="Layer_1" data-name="Layer 1">
                      <path
                        id="Path_41"
                        data-name="Path 41"
                        d="M102.36,178.2v44.19c0,13.23,8.12,21.31,21.36,21.31h100.2c12.88,0,21.08-8.17,21.08-21V117.93c0-12.54-8.1-20.7-20.69-20.72H123.53c-13.12,0-21.13,8.06-21.16,21.18v28.47H92a4.07,4.07,0,0,1-.29-1.07c.05-10.28-.23-20.57.26-30.82.72-15,14.27-28.13,29.31-28.22q52.53-.33,105.05,0c15.51.11,29.26,14.12,29.35,29.79q.34,53.81,0,107.62c-.1,16.63-14,29.89-31.54,30q-50.39.34-100.77,0c-15.85-.09-28-10.22-31.12-25.39a34.321,34.321,0,0,1-.57-6.8c0-13.61,0-27.22-.08-40.83,0-2.35.65-3.23,3-3S99.55,178.2,102.36,178.2Z"
                      />
                      <path
                        id="Path_42"
                        data-name="Path 42"
                        d="M163.92,76.2H153.44V32.17c0-13.44-8.05-21.45-21.48-21.45H32c-13.09,0-21.21,8.09-21.21,21.12V136.62c0,12.23,8,20.51,20.28,20.53q51,.1,101.92,0c12.19,0,20.33-8.25,20.41-20.47.06-8.85,0-17.7,0-26.55V106.8c3.31,0,6.24-.08,9.16.07a2.14,2.14,0,0,1,1.45,1.51c-.18,11.68.59,23.51-1,35-2,14.1-15.46,24.3-29.72,24.33q-51.24.09-102.49,0A31.16,31.16,0,0,1,.06,136.89Q-.06,84.23.06,31.55C.11,13.7,13.75.26,32.3.15q50.1-.3,100.21,0C150.38.27,163.6,13.26,164,31c.36,14.55.09,29.12.08,43.68a12,12,0,0,1-.16,1.52Z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
