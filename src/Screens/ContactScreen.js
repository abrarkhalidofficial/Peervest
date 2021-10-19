import React from "react";
import Header from "../Components/Header";
import contact__background from "../Assets/contact__background.png";
import Footer from "../Components/Footer";
import InputField from "../Components/InputField";
import InputTextArea from "../Components/InputTextArea";
import InputRadio from "../Components/InputRadio";
import InputFile from "../Components/InputFile";

export default function ContactScreen() {
  const options = [
    {
      label: "1234567",
    },
    {
      label: "1234561",
    },
    {
      label: "1234562",
    },
    {
      label: "1234563",
    },
    {
      label: "1234564",
    },
    {
      label: "1234565",
    },
    {
      label: "1234566",
    },
    {
      label: "1234568",
    },
  ];
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
            <div className="start__up__container__heading">
              Start-up Registeration Form
            </div>
            <div className="start__up__container__info">
              Connect startups with potential investors and secure initial
              meetings to pitch the venture and raise capital.
            </div>
            <form action="" className="start__up__container__form">
              <InputField
                placeholder="12234234234234"
                label="label"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, culpa!"
                required={true}
              />
              <InputTextArea
                placeholder="12234234234234"
                label="label"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, culpa!"
                required={true}
              />
              <InputRadio
                options={options}
                placeholder="12234234234234"
                label="label"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, culpa!"
                required={true}
              />

              <InputFile
                placeholder="12234234234234"
                label="label"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, culpa!"
                required={true}
              />
              <div className="start__up__container__form__row">
                <button
                  type="submit"
                  className="start__up__container__form__button"
                >
                  Submit
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
