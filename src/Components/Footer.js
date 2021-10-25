import React from "react";
import {
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
  Monitor,
  Twitter,
  Youtube,
} from "react-feather";
import logo from "../Assets/logo-dark.png";

export default function Footer() {
  return (
    <div className="container" style={{ minHeight: "fit-content" }}>
      <div className="footer__container">
        <div className="footer__container__content">
          <div className="footer__container__content__heading">
            <span>PeerVest</span> Provides Digital Trust, Enabling Us To Build A
            Better World
          </div>
          <img
            src={logo}
            alt="logo"
            style={{ width: 300, margin: "2em 0em" }}
          />
          <div className="footer__container__content__copy__write">
            <a href="">PeerVest.com</a> All Rights Reserved
          </div>
        </div>
        <div className="footer__container__bar">
          <a
            href="#"
            className="footer__container__bar__link footer__container__bar__link1"
          >
            <Youtube size={20} color="currentColor" />
            <div className="footer__container__bar__link__text">Youtube</div>
          </a>
          <a
            href="#"
            className="footer__container__bar__link footer__container__bar__link2"
          >
            <GitHub size={20} color="currentColor" />
            <div className="footer__container__bar__link__text">GitHub</div>
          </a>
          <a
            href="#"
            className="footer__container__bar__link footer__container__bar__link3"
          >
            <Monitor size={20} color="currentColor" />
            <div className="footer__container__bar__link__text">Discord</div>
          </a>
          <a
            href="#"
            className="footer__container__bar__link footer__container__bar__link4"
          >
            <Twitter size={20} color="currentColor" />
            <div className="footer__container__bar__link__text">Twitter</div>
          </a>
          <a
            href="#"
            className="footer__container__bar__link footer__container__bar__link5"
          >
            <Monitor size={20} color="currentColor" />
            <div className="footer__container__bar__link__text">Reddit</div>
          </a>
          <a
            href="#"
            className="footer__container__bar__link footer__container__bar__link6"
          >
            <Linkedin size={20} color="currentColor" />
            <div className="footer__container__bar__link__text">LinkedIn</div>
          </a>
          <a
            href="#"
            className="footer__container__bar__link footer__container__bar__link7"
          >
            <Instagram size={20} color="currentColor" />
            <div className="footer__container__bar__link__text">Instagram</div>
          </a>
          <a
            href="#"
            className="footer__container__bar__link footer__container__bar__link8"
          >
            <Facebook size={20} color="currentColor" />
            <div className="footer__container__bar__link__text">Facebook</div>
          </a>
        </div>
      </div>
    </div>
  );
}
