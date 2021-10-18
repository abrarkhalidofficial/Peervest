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

export default function Footer() {
  return (
    <div className="container" style={{ minHeight: "fit-content" }}>
      <div className="footer__container">
        <div className="footer__container__content">
          <div className="footer__container__content__heading">
            <span>PEERVEST</span> Provides Digital Trust, Enabling Us To Build A
            Better World
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="343.9"
            height="97.321"
            viewBox="0 0 343.9 97.321"
          >
            <g id="Group_15" data-name="Group 15" transform="translate(0)">
              <text
                id="PEERWEST"
                transform="translate(124.9 47)"
                fill="#0a264e"
                font-size="51"
                font-family="Rajdhani-SemiBold, Rajdhani"
                font-weight="600"
              >
                <tspan x="0" y="0">
                  PEERWEST
                </tspan>
              </text>
              <text
                id="GLOBAL"
                transform="translate(124.901 84.321)"
                fill="#0a264e"
                font-size="38"
                font-family="Rajdhani-Regular, Rajdhani"
              >
                <tspan x="0" y="0">
                  GLOBAL
                </tspan>
              </text>
              <g id="Group_3" data-name="Group 3" transform="translate(0 0)">
                <g id="Group_2" data-name="Group 2">
                  <g
                    id="Group_1"
                    data-name="Group 1"
                    transform="translate(0 0.025)"
                  >
                    <path
                      id="Path_1"
                      data-name="Path 1"
                      d="M-1371.035,1033.262a2.129,2.129,0,0,0,1.839-3.193c-2.492-4.332-4.763-8.3-7.133-12.2a3.23,3.23,0,0,0-2.368-1.257c-14.124-.067-28.247-.038-42.372-.016a7.873,7.873,0,0,0-1.455.408c17.426,30.194,34.771,60.249,52.412,90.816a2.13,2.13,0,0,0,3.684.007c2.529-4.353,4.947-8.487,7.189-12.715.377-.711-.406-2.242-.964-3.215q-15.924-27.739-31.929-55.432l-.016-.028a2.124,2.124,0,0,1,1.849-3.176Z"
                      transform="translate(1422.524 -1016.57)"
                      fill="#d39844"
                    />
                  </g>
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M-1322.67,1019.568a2,2,0,0,0-1.727-3c-5.224-.017-10.038-.052-14.843.12-.8.029-1.725,1.485-2.291,2.456-6.325,10.857-12.587,21.749-18.875,32.628l-.014.025a2,2,0,0,1-3.441,0c-1.756-2.955-3.456-5.78-4.96-8.707-1.293-2.52-2.8-3.705-5.823-3.514-3.84.243-7.7.155-11.876.107a2,2,0,0,0-1.752,3.006c8.215,14.228,16.239,28.126,24.4,42.266a2,2,0,0,0,3.468,0C-1347.786,1063.091-1335.376,1041.585-1322.67,1019.568Z"
                    transform="translate(1429.731 -1016.55)"
                    fill="#d39844"
                  />
                </g>
              </g>
            </g>
          </svg>
          <div className="footer__container__content__copy__write">
            <a href="">peerwest.com</a> All Rights Reserved
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
