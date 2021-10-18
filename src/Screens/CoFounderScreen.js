import React from "react";
import Header from "../Components/Header";
import co__founder__background from "../Assets/co__founder__background.png";
import Footer from "../Components/Footer";

export default function CoFounderScreen() {
  return (
    <>
      <Header />
      <div className="homepage__main__container">
        <div
          className="homepage__main__container__jumbotron"
          style={{ maxHeight: 500, overflow: "hidden" }}
        >
          <img
            src={co__founder__background}
            alt="co__founder__background"
            className="homepage__main__container__jumbotron__img"
            style={{ height: "fit-content", marginTop: -250 }}
          />
          <div className="homepage__main__container__jumbotron__wrapper">
            <div className="homepage__main__container__jumbotron__wrapper__content">
              <div className="homepage__main__container__jumbotron__wrapper__content__sub__heading">
                Pakistan’s First Ever
              </div>
              <div className="homepage__main__container__jumbotron__wrapper__content__heading">
                Fundraising Services for
                <br />
                <span>Emerging Startups</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container"></div>
      </div>
      <Footer />
    </>
  );
}
