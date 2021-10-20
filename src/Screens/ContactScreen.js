import React from "react";
import Header from "../Components/Header";
import contact__background from "../Assets/contact__background.png";
import Footer from "../Components/Footer";
import InputField from "../Components/InputField";
import InputTextArea from "../Components/InputTextArea";

export default function ContactScreen() {
  return (
    <>
      <Header />
      <div className="homepage__main__container">
        <div
          className="homepage__main__container__jumbotron"
          style={{ maxHeight: 500, overflow: "hidden" }}
        >
          <img
            src={contact__background}
            alt="contact__background"
            className="homepage__main__container__jumbotron__img"
            style={{ height: "fit-content", marginTop: -450 }}
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
        <div className="container">
          <div className="start__up__container">
            <div className="start__up__container__heading">Contact Us</div>
            <div className="start__up__container__info">
              Connect startups with potential investors and secure initial
              meetings to pitch the venture and raise capital.
            </div>
            <form action="" className="start__up__container__form">
              <InputField
                placeholder="John Doe"
                label="User Name"
                required={true}
              />
              <InputField
                placeholder="someone@gmail.com"
                label="Email"
                required={true}
              />
              <InputField
                placeholder="Your Answer"
                label="Subject"
                required={true}
              />
              <InputTextArea
                placeholder="Type Here"
                label="Message"
                required={true}
              />

              <div className="start__up__container__form__row">
                <button
                  type="submit"
                  className="start__up__container__form__button"
                >
                  Send
                </button>
                <button
                  type="reset"
                  className="start__up__container__form__button__reset"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
