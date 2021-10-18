import React from "react";
import Header from "../Components/Header";
import start__up__background from "../Assets/start__up__background.png";
import Footer from "../Components/Footer";

export default function StartUpScreen() {
  return (
    <>
      <Header />
      <div className="homepage__main__container">
        <div
          className="homepage__main__container__jumbotron"
          style={{ maxHeight: 500, overflow: "hidden" }}
        >
          <img
            src={start__up__background}
            alt="start__up__background"
            className="homepage__main__container__jumbotron__img"
            style={{ height: "fit-content", marginTop: -350 }}
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
