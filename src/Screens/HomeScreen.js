import React from "react";
import main__background from "../Assets/main__background.jpg";
import founderPic from "../Assets/founderPic.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import container__our__team__wrapper__entry__img__1 from "../Assets/container__our__team__wrapper__entry__img__1.png";
import container__our__team__wrapper__entry__img__2 from "../Assets/container__our__team__wrapper__entry__img__2.png";
import container__our__team__wrapper__entry__img__3 from "../Assets/container__our__team__wrapper__entry__img__3.png";
import partnerImg from "../Assets/partnerImg.jpg";
import whyChooseUsSvg from "../Assets/whyChooseUsSvg.svg";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <>
      <Header />
      <div className="homepage__main__container">
        <div className="homepage__main__container__jumbotron">
          <img
            src={main__background}
            alt="main__background"
            className="homepage__main__container__jumbotron__img"
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
              <div className="homepage__main__container__jumbotron__wrapper__content__info">
                For startups looking for pre-seed, seed, and growth stage
                funding
              </div>
              <Link
                to="/contact"
                className="homepage__main__container__jumbotron__wrapper__content__cta"
              >
                Become a Part
              </Link>
            </div>
          </div>
        </div>
        <div className="startups__wrapper">
          <div className="container__startups">
            <Link to="/start-up" className="container__startups__card">
              <div className="container__startups__card__left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="113.649"
                  height="126.498"
                  viewBox="0 0 113.649 126.498"
                >
                  <g
                    id="Group_13"
                    data-name="Group 13"
                    transform="translate(0)"
                  >
                    <path
                      id="Path_3"
                      data-name="Path 3"
                      d="M-2066.021,2616.3c.08-.259.158-.518.24-.777a5.481,5.481,0,0,1,5.966-3.563,8.376,8.376,0,0,1,4.2,2.1q10.6,8.549,21.221,17.064a.578.578,0,0,1,.284.6,7.3,7.3,0,0,0,2.942,7.177,8.8,8.8,0,0,0,5.4,1.911c7.425.192,14.85.325,22.275.078,2.542-.084,5.079-.309,7.619-.474a1.26,1.26,0,0,0,1.265-.729,1.082,1.082,0,0,0-1.173-1.477c-1.47.119-2.938.326-4.409.356q-8.241.164-16.485.223c-2.917.017-5.834-.091-8.751-.138a6.818,6.818,0,0,1-5.494-2.546,4.773,4.773,0,0,1-1.076-3.865,4.2,4.2,0,0,1,2.753-3.269,9.823,9.823,0,0,1,3.972-.554c4.575.033,9.143-.107,13.705-.449a39.174,39.174,0,0,0,7.541-1.091c1.8-.5,3.575-1.075,5.362-1.615a26.968,26.968,0,0,1,13.889-.254,22.94,22.94,0,0,1,5.412,1.692,41.27,41.27,0,0,1,3.686,2.011c3.1,1.977,6.152,4.02,9.223,6.038a.99.99,0,0,1,.128.141l-12.678,20.664c-.391-.22-.777-.415-1.14-.645a12.481,12.481,0,0,0-9.155-1.6c-6.068,1.035-12.148,2-18.231,2.937a47.556,47.556,0,0,1-5.848.592,18.033,18.033,0,0,1-10.62-3.055c-2.1-1.376-4.238-2.691-6.33-4.076q-7.558-5.006-14.721-10.567a143.709,143.709,0,0,1-14.46-12.689c-1.776-1.815-3.442-3.74-5.137-5.633a6.469,6.469,0,0,1-1.372-2.962Z"
                      transform="translate(2066.021 -2538.555)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_4"
                      data-name="Path 4"
                      d="M-1148.853,2823.82c-.625-.38-.805-.339-1.175.263q-6.037,9.833-12.073,19.665-1.729,2.817-3.449,5.639c-.413.675-.389.789.27,1.194q4.249,2.6,8.5,5.2c.061.037.12.076.179.115a2.835,2.835,0,0,1,.664.224c.072-.038.146-.074.221-.106,3.024-4.925,6.015-9.792,9-14.661q3.29-5.361,6.577-10.724c.107-.174.246-.33.37-.494v-.778Zm-7.286,29.219-1.837-1.149,2.684-4.282,1.84,1.153Z"
                      transform="translate(1253.415 -2729.622)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_5"
                      data-name="Path 5"
                      d="M-1620.49,1858c.959.22,1.942.367,2.872.673a12.772,12.772,0,0,1,8.7,13.531,12.831,12.831,0,0,1-11.127,11.307,12.83,12.83,0,0,1-14.249-10.669,12.813,12.813,0,0,1,10.576-14.67c.3-.05.6-.114.9-.172Zm-2.707,4.141c-3.024.947-4.481,2.439-4.531,4.609a4.1,4.1,0,0,0,.765,2.512,5.82,5.82,0,0,0,3.76,2.3v5.7a3.032,3.032,0,0,1-2.7-2.738,1.073,1.073,0,0,0-1.16-1.045,1.061,1.061,0,0,0-.991,1.209,5.609,5.609,0,0,0,.419,1.73,5.6,5.6,0,0,0,4.077,3.071c.224.052.359.095.4.376a1.053,1.053,0,0,0,1.1,1.009,1.092,1.092,0,0,0,1.071-1.053c.012-.078.022-.157.032-.228,3.209-.957,4.818-2.6,4.854-4.945a4.406,4.406,0,0,0-.817-2.648,6.126,6.126,0,0,0-4.035-2.454v-5.056a2.657,2.657,0,0,1,2.2,2.415,1.074,1.074,0,0,0,1.129,1.031,1.077,1.077,0,0,0,1.029-1.131,2.938,2.938,0,0,0-.053-.628,5.005,5.005,0,0,0-3.874-3.862c-.322-.1-.482-.174-.491-.557a1.056,1.056,0,0,0-1.083-1.026,1.091,1.091,0,0,0-1.067,1C-1623.18,1861.861-1623.184,1861.99-1623.2,1862.141Z"
                      transform="translate(1676.439 -1858)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_6"
                      data-name="Path 6"
                      d="M-1826.769,2595.062c.184,1.635.365,3.241.551,4.882-.606.069-1.174.129-1.741.2a13.01,13.01,0,0,0-4.687,1.351,5.781,5.781,0,0,0-1.111.775,1.046,1.046,0,0,0-.083,1.454,1.032,1.032,0,0,0,1.441.2,8.956,8.956,0,0,1,4.191-1.519,19.049,19.049,0,0,1,5.692-.1,20.556,20.556,0,0,1,3.068.707,6.479,6.479,0,0,1,1.567.853,1.121,1.121,0,0,0,1.536-.116,1.068,1.068,0,0,0-.117-1.524,5.854,5.854,0,0,0-2.594-1.378c-1.3-.327-2.629-.533-3.945-.787-.253-.049-.514-.064-.761-.132a.383.383,0,0,1-.246-.239c-.171-1.534-.325-3.07-.493-4.7.946.079,1.776.077,2.577.229,1.82.345,3.655.664,5.431,1.176a31.046,31.046,0,0,1,9.672,4.976c2.433,1.777,4.914,3.49,7.373,5.232.064.046.123.1.264.211-.323.033-.566.062-.81.083a28.652,28.652,0,0,0-7.184,1.629,40.9,40.9,0,0,1-11.047,2.043c-4.548.312-9.1.395-13.656.416a17.875,17.875,0,0,0-2.985.35,6.536,6.536,0,0,0-3.951,2.474c-.069.085-.143.166-.24.278l-11.976-9.625c.553-.3,1.053-.576,1.556-.845,2.929-1.564,5.852-3.138,8.789-4.686a33,33,0,0,1,13.488-3.868C-1827.088,2595.056-1826.976,2595.062-1826.769,2595.062Z"
                      transform="translate(1871.952 -2523.279)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_7"
                      data-name="Path 7"
                      d="M-1977.3,2236.63a12.793,12.793,0,0,1-12.829,12.772,12.822,12.822,0,0,1-12.767-12.947,12.832,12.832,0,0,1,12.852-12.668A12.838,12.838,0,0,1-1977.3,2236.63Zm-12.115-8.656c-.012-.091-.023-.155-.028-.219-.054-.778-.409-1.191-1.032-1.232a1.137,1.137,0,0,0-1.155,1.179c0,.11-.212.29-.354.324a5.932,5.932,0,0,0-2.51,1.226,4.19,4.19,0,0,0-1.626,3.947,4.738,4.738,0,0,0,3.12,3.736c.438.192.911.3,1.354.447v5.688a3.071,3.071,0,0,1-2.688-2.634c-.061-.768-.482-1.2-1.143-1.165a1.087,1.087,0,0,0-1.015,1.284,4.649,4.649,0,0,0,2.387,3.842,21.02,21.02,0,0,0,2.48,1.11c-.008-.051,0,.012.011.075a1.1,1.1,0,0,0,1.082,1.09c.583,0,.955-.37,1.093-1.026a.614.614,0,0,1,.347-.341,18.2,18.2,0,0,0,1.89-.743,4.636,4.636,0,0,0,2.367-5.752,5.52,5.52,0,0,0-4.213-3.384c-.33-.078-.408-.206-.405-.515.014-1.427.005-2.854.008-4.28a3.149,3.149,0,0,1,.044-.368,2.723,2.723,0,0,1,2.214,2.426,1.522,1.522,0,0,0,.409.789.929.929,0,0,0,1.129.145,1.115,1.115,0,0,0,.623-1.166,4.5,4.5,0,0,0-1.695-3.219A6.348,6.348,0,0,0-1989.413,2227.974Z"
                      transform="translate(2009.036 -2188.196)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_8"
                      data-name="Path 8"
                      d="M-1394.274,2334.778a12.8,12.8,0,0,1-12.762,12.8,12.815,12.815,0,0,1-12.835-12.786,12.816,12.816,0,0,1,12.8-12.824A12.8,12.8,0,0,1-1394.274,2334.778Zm-12.123-6.353a2.3,2.3,0,0,1,.271.067,2.706,2.706,0,0,1,1.967,2.4,1.055,1.055,0,0,0,1.517.912,1.179,1.179,0,0,0,.628-1.346,4.564,4.564,0,0,0-2.466-3.575,18.6,18.6,0,0,0-1.916-.81c-.042-.866-.377-1.328-1.019-1.375-.683-.051-1.056.382-1.224,1.422-2.97.871-4.5,2.457-4.517,4.679s1.527,3.827,4.538,4.745v5.707a3.066,3.066,0,0,1-2.695-2.726,1.082,1.082,0,0,0-1.125-1.084,1.079,1.079,0,0,0-1.033,1.174,4.584,4.584,0,0,0,1.6,3.37,6.421,6.421,0,0,0,3.235,1.548,1.155,1.155,0,0,1,.045.157c.093.742.464,1.14,1.074,1.149s.95-.335,1.115-1.055a.569.569,0,0,1,.328-.307c.57-.225,1.184-.359,1.724-.638,3.378-1.743,3.812-5.787.885-8.071a6.754,6.754,0,0,0-2.927-1.261Z"
                      transform="translate(1482.744 -2276.821)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_9"
                      data-name="Path 9"
                      d="M-1931,2012.082a29.883,29.883,0,0,1,6.3.369,33.5,33.5,0,0,1,15.786,6.846,27.016,27.016,0,0,1,9.076,12.492,17.08,17.08,0,0,1,.749,9.19,12.283,12.283,0,0,1-2.78,5.6c-.063.073-.13.144-.2.212a.2.2,0,0,1-.072.033c-.705-1.686-1.345-3.4-2.131-5.049-1.136-2.382-2.293-4.76-3.591-7.056a58.638,58.638,0,0,0-13.084-15.965,50.754,50.754,0,0,0-9.722-6.5Z"
                      transform="translate(1944.14 -1997.058)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M-1944.507,2029.428c1.9,1.141,3.761,2.162,5.524,3.33a52.907,52.907,0,0,1,15.132,15.651,75.741,75.741,0,0,1,7.549,15.352c.049.134.091.271.133.4a11.412,11.412,0,0,1-7.22,2.421c1.913-5.672,1.151-10.915-2.876-15.4s-9.165-5.831-15.073-4.512c-.131-1.273-.268-2.543-.393-3.814a53.167,53.167,0,0,0-1.385-9.41C-1943.483,2032.14-1944,2030.881-1944.507,2029.428Z"
                      transform="translate(1956.33 -2012.748)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_11"
                      data-name="Path 11"
                      d="M-1514.276,2187.6a35.792,35.792,0,0,0-15.745,4.789,38.82,38.82,0,0,0-12.155,11.265c-.373-.649-.756-1.2-1.031-1.809a9.14,9.14,0,0,1,1.034-9.473,16.927,16.927,0,0,1,8.441-6.281,23.551,23.551,0,0,1,16.094-.008c1.156.392,2.272.9,3.406,1.359Z"
                      transform="translate(1594.872 -2152.881)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_12"
                      data-name="Path 12"
                      d="M-1508.077,2252.612c6.438-8.935,14.931-14.244,26.082-15.324-.291.3-.483.5-.682.7a28.969,28.969,0,0,0-3.807,4.967.821.821,0,0,1-.741.425,14.93,14.93,0,0,0-13.815,10.751.541.541,0,0,1-.625.474,10.544,10.544,0,0,1-5.948-1.665C-1507.749,2252.853-1507.876,2252.755-1508.077,2252.612Z"
                      transform="translate(1562.366 -2200.383)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_13"
                      data-name="Path 13"
                      d="M-1642.817,2393c.642,2.173,1.289,4.225,1.85,6.3.556,2.056,1.025,4.136,1.562,6.323a41.7,41.7,0,0,1,5.215-12.079c.507.454.968.881,1.445,1.288.251.214.068.375-.033.542a39.066,39.066,0,0,0-2.961,5.953,33.847,33.847,0,0,0-2.249,8.971c-.008.078-.028.154-.048.261h-2.773c-.151-.823-.3-1.662-.458-2.5a98.383,98.383,0,0,0-3.331-13.076.564.564,0,0,1,.227-.764C-1643.871,2393.867-1643.4,2393.467-1642.817,2393Z"
                      transform="translate(1685.658 -2340.946)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_14"
                      data-name="Path 14"
                      d="M-1080.639,3071.73l-2.688,4.278-1.837-1.149,2.684-4.282Z"
                      transform="translate(1180.604 -2952.591)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_18"
                      data-name="Path 18"
                      d="M-1495.968,2005.779v-5.431a3.037,3.037,0,0,1,2.7,2.683A3.042,3.042,0,0,1-1495.968,2005.779Z"
                      transform="translate(1551.435 -1986.497)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_19"
                      data-name="Path 19"
                      d="M-1540.735,1924.174v4.818a2.758,2.758,0,0,1-2.353-2.314A2.68,2.68,0,0,1-1540.735,1924.174Z"
                      transform="translate(1593.972 -1917.735)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_20"
                      data-name="Path 20"
                      d="M-1864.447,2371.849v-5.406a3,3,0,0,1,2.678,2.37A2.939,2.939,0,0,1-1864.447,2371.849Z"
                      transform="translate(1884.061 -2316.964)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_21"
                      data-name="Path 21"
                      d="M-1909.043,2295.021a2.71,2.71,0,0,1-2.351-2.508,2.677,2.677,0,0,1,2.351-2.306Z"
                      transform="translate(1926.442 -2248.152)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_22"
                      data-name="Path 22"
                      d="M-1281.224,2464.224a3.024,3.024,0,0,1,2.681,2.66,3.017,3.017,0,0,1-2.681,2.791Z"
                      transform="translate(1357.587 -2405.237)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_23"
                      data-name="Path 23"
                      d="M-1325.992,2393a2.738,2.738,0,0,1-2.332-2.314,2.647,2.647,0,0,1,2.332-2.5Z"
                      transform="translate(1400.105 -2336.595)"
                      fill="currentColor"
                    />
                  </g>
                </svg>
                <div className="container__startups__card__left__content">
                  <div className="container__startups__card__left__content__sub__heading">
                    Preparing
                  </div>
                  <div className="container__startups__card__left__content__heading">
                    Capital
                  </div>
                </div>
              </div>
              <div className="container__startups__card__right__heading">
                Connect startups with potential investors and secure initial
                meetings to pitch the venture and raise capital.
              </div>
            </Link>
            <Link to="/co-founder" className="container__startups__card">
              <div className="container__startups__card__left">
                <svg
                  id="Group_14"
                  data-name="Group 14"
                  xmlns="http://www.w3.org/2000/svg"
                  width="117.036"
                  height="126.499"
                  viewBox="0 0 117.036 126.499"
                >
                  <path
                    id="Path_24"
                    data-name="Path 24"
                    d="M-1106.828,3979.174c-2.71.881-5.451,1.811-8.215,2.662-6.75,2.078-12.549-.9-14.452-7.654-4.162-14.781-8.2-29.6-12.246-44.409-.945-3.458,0-4.478,3.661-4.1,1.144.118,2.273.382,3.766.64l6.458-14.965c-3.453-3.067-6.937-2.582-10.376-.566a14.674,14.674,0,0,1-14.658.514,4.076,4.076,0,0,1-2.719-4.284c.138-5.57.046-11.145.046-16.551.6-.25.889-.476,1.009-.407,6.268,3.635,12.213,2.532,18.568-.322,5.876-2.638,11.441-.252,16.147,3.647.716.593.768,2.767.312,3.872-4.127,9.994-8.437,19.913-12.882,30.3,5.452,2.9,6.767,8.416,8.42,13.751,1.756,5.666,3.536,11.325,5.38,16.963,1.16,3.546,2.322,3.844,5.17,1.391,3.973-3.423,7.9-6.9,11.853-10.343a18.494,18.494,0,0,1,12.775-4.774q9.263.112,18.529,0c9.918-.1,16.307-6.6,16.312-16.542,0-6.875.08-13.755-.15-20.624-.154-4.6-.937-9.184-1.133-13.787a15.141,15.141,0,0,1,1.013-6.161,4.994,4.994,0,0,1,3.262-2.731c.786-.116,2.7,1.8,2.676,2.767-.12,4.558,2.206,6.673,6.082,8.511,1.728.819,3.366,3.815,3.416,5.863q.452,18.517-.006,37.052a24.929,24.929,0,0,1-2.658,9.622c-3.129,6.624-7.125,12.856-9.992,19.58a45.144,45.144,0,0,0-3.512,14.365c-.562,8.236-.227,16.538-.117,24.811.037,2.809-.872,3.947-3.827,3.923q-20.276-.168-40.555-.007c-2.763.019-3.85-1.04-3.651-3.711.087-1.158-.084-2.339.028-3.493C-1102.268,3995.457-1104.208,3987.356-1106.828,3979.174Zm-46.543-86.276c0,3.944,0,7.308,0,10.673,0,5.457,3.543,8.3,9.1,7.211a12.031,12.031,0,0,0,3.6-1.291c4.469-2.552,8.984-3.712,13.823-.514l5.932-13.87c-4.66-3.362-9.4-5.572-14.81-3.211C-1141.426,3894.386-1147,3896.338-1153.371,3892.9Zm112.188,15.48c1.092-6.113.611-10.747-5.907-12.745-1.274-.391-2.158-2.7-2.8-4.295a22.83,22.83,0,0,1-.877-4.708c-3.342,7.2-3,14.3-.575,21.748h10.163Zm-86.015,31.715c-.906-7.729-6.078-12.553-12.689-11.955.939,3.469,1.793,6.925,2.859,10.315a2.7,2.7,0,0,0,1.881,1.566C-1132.522,3940.2-1129.876,3940.094-1127.2,3940.094Zm33.706,6.939c-.887,1.369-1.939,2.307-1.771,2.9a3.325,3.325,0,0,0,2.154,2c.5.1,1.863-1.307,1.813-1.958C-1091.36,3949.121-1092.44,3948.349-1093.492,3947.033Zm7.53,6.129c-1.457-.952-2.315-1.933-3.178-1.937-.628,0-1.893,1.472-1.75,1.959a3.28,3.28,0,0,0,2.148,1.958C-1088.13,3955.259-1087.286,3954.158-1085.962,3953.162Zm13.1,0c-1.419-.937-2.27-1.911-3.153-1.941-.6-.02-1.862,1.46-1.722,1.962a3.215,3.215,0,0,0,2.127,1.949C-1074.992,3955.242-1074.155,3954.14-1072.865,3953.162Zm-6.588,1.065c-1.389-.927-2.3-1.976-2.882-1.819-.858.229-1.484,1.323-2.209,2.047.692.669,1.394,1.881,2.072,1.868C-1081.649,3956.307-1080.845,3955.258-1079.453,3954.227Zm7.778-7.068c-.837,1.233-1.917,2.163-1.754,2.741.241.858,1.365,1.466,2.114,2.18.647-.814,1.683-1.574,1.805-2.46C-1069.429,3949.03-1070.653,3948.261-1071.675,3947.159Z"
                    transform="translate(1155.613 -3884.687)"
                    fill="currentColor"
                  />
                  <path
                    id="Path_25"
                    data-name="Path 25"
                    d="M-712.826,4050.189c-.046,10.811-6.755,19.008-15.733,20.641a19.584,19.584,0,0,1-22.069-11.972c-.827-2.136-1.619-3.276-4.147-3.713-5.4-.936-8.734-5.8-8.389-11.256.124-1.959,1.039-3.279,3.068-2.84,6.34,1.373,11.119-1.2,15.917-5.086,6.257-5.063,13.515-5.547,20.672-1.886C-716.487,4037.667-713.011,4043.713-712.826,4050.189Zm-3.365,7.121c-7.274-2.674-13.268-6.721-16.958-14.158-3.175,7.611-8.488,11.608-16.009,12.588a16.777,16.777,0,0,0,15.393,13.158A16.894,16.894,0,0,0-716.192,4057.31Z"
                    transform="translate(805.656 -4015.779)"
                    fill="currentColor"
                  />
                  <path
                    id="Path_26"
                    data-name="Path 26"
                    d="M-596.315,4460.8c1.052,1.315,2.131,2.087,2.2,2.937.05.651-1.314,2.059-1.813,1.958a3.325,3.325,0,0,1-2.154-2C-598.254,4463.11-597.2,4462.172-596.315,4460.8Z"
                    transform="translate(658.436 -4398.457)"
                    fill="currentColor"
                  />
                  <path
                    id="Path_27"
                    data-name="Path 27"
                    d="M-552.69,4501.475c-1.324,1-2.168,2.1-2.779,1.979a3.279,3.279,0,0,1-2.148-1.958c-.143-.486,1.122-1.961,1.75-1.959C-555.005,4499.54-554.147,4500.521-552.69,4501.475Z"
                    transform="translate(622.342 -4432.999)"
                    fill="currentColor"
                  />
                  <path
                    id="Path_28"
                    data-name="Path 28"
                    d="M-431.236,4501.443c-1.289.978-2.126,2.08-2.748,1.969a3.214,3.214,0,0,1-2.127-1.949c-.14-.5,1.124-1.981,1.722-1.961C-433.506,4499.533-432.655,4500.506-431.236,4501.443Z"
                    transform="translate(513.984 -4432.968)"
                    fill="currentColor"
                  />
                  <path
                    id="Path_29"
                    data-name="Path 29"
                    d="M-493.8,4512.161c-1.392,1.032-2.2,2.081-3.02,2.1-.678.013-1.38-1.2-2.072-1.868.725-.726,1.351-1.818,2.209-2.047C-496.1,4510.186-495.194,4511.234-493.8,4512.161Z"
                    transform="translate(569.965 -4442.622)"
                    fill="currentColor"
                  />
                  <path
                    id="Path_30"
                    data-name="Path 30"
                    d="M-394.569,4461.973c1.022,1.1,2.246,1.871,2.165,2.459-.122.886-1.158,1.646-1.805,2.46-.748-.714-1.872-1.322-2.114-2.179C-396.486,4464.134-395.405,4463.206-394.569,4461.973Z"
                    transform="translate(478.507 -4399.5)"
                    fill="currentColor"
                  />
                </svg>

                <div className="container__startups__card__left__content">
                  <div className="container__startups__card__left__content__sub__heading">
                    Match
                  </div>
                  <div className="container__startups__card__left__content__heading">
                    Co-founder
                  </div>
                </div>
              </div>

              <div className="container__startups__card__right__heading">
                Connect startups with potential investors and secure initial
                meetings to pitch the venture and raise capital.
              </div>
            </Link>
          </div>
        </div>

        <div className="milestone__wrapper">
          <div className="milestone__container">
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
                <div className="milestone__container__content__card__svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="248.75"
                    height="208.031"
                    viewBox="0 0 248.75 208.031"
                  >
                    <g
                      id="Layer_2"
                      data-name="Layer 2"
                      transform="translate(-0.041 0.001)"
                    >
                      <g id="Layer_1" data-name="Layer 1">
                        <path
                          id="Path_41"
                          data-name="Path 41"
                          d="M47.07,86.51c.34-17.22,8-29.91,23.17-37.94C55,34.38,59.48,15.89,68.94,7.37,80.22-2.79,96.85-2.4,107,8.25s11.35,28-2.48,40.33c14.47,7.6,22.12,19.61,23.17,36.31h56.82c19.68,0,36.64,6.56,49.34,21.9,15.52,18.75,19.06,40.13,10.1,62.62-8.61,21.61-25.22,34.27-48.37,37.89A69.383,69.383,0,0,1,185,208q-61.77.06-123.54,0c-29.07,0-54.76-20.81-60.2-48.71-5.73-29.34,9.14-57.87,36.22-69.38C40.49,88.59,43.7,87.68,47.07,86.51ZM207.79,194c24.06-9.75,36.81-38.34,28.71-63.35a52.81,52.81,0,0,0-51.17-36.09c-40.73.34-81.47.07-122.2.12a73.441,73.441,0,0,0-10.26.75c-28.89,4.17-49,34.1-42.12,62.46,6,24.61,25.59,40.24,51.64,40.62,20.75.31,41.51,0,62.27.1,2.11,0,2.89-.6,3-2.78.6-11.22,5.38-20.46,13.81-27.77a107.115,107.115,0,0,1,8.79-6.26c-13.85-12.9-11.57-30.22-2.06-40.07a27.14,27.14,0,0,1,37.57-1.36,26.8,26.8,0,0,1,9,18c.84,9.5-3,17.2-9.91,23.5C200.79,173.22,200.79,173.22,207.79,194Zm-9.57,3.69c-1.05-12.43-6.62-21.29-17.1-26.5-10.64-5.29-21.34-4.53-31.11,2.35-8.41,5.93-12.81,14.24-13,25.15,20.56-.63,40.77.77,61.21-1.02ZM56.92,84.84h60.94c-.24-11.54-5.3-20.15-14.64-25.83-10.63-6.47-21.82-6.37-32.31.36C61.81,65.2,56.91,73.77,56.92,84.84Zm48.17-57.55A17.65,17.65,0,0,0,87.73,9.53a17.92,17.92,0,0,0-18,17.6A17.9,17.9,0,0,0,87.57,44.88a17.6,17.6,0,0,0,17.52-17.59Zm62.45,130.87c10.11,0,18-7.67,17.84-17.49A17.78,17.78,0,0,0,167.54,123a17.54,17.54,0,0,0-17.4,17.35c-.07,10.13,7.39,17.78,17.4,17.81Z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
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
                <div className="milestone__container__content__card__svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="248.75"
                    height="208.031"
                    viewBox="0 0 248.75 208.031"
                  >
                    <g
                      id="Layer_2"
                      data-name="Layer 2"
                      transform="translate(-0.041 0.001)"
                    >
                      <g id="Layer_1" data-name="Layer 1">
                        <path
                          id="Path_41"
                          data-name="Path 41"
                          d="M47.07,86.51c.34-17.22,8-29.91,23.17-37.94C55,34.38,59.48,15.89,68.94,7.37,80.22-2.79,96.85-2.4,107,8.25s11.35,28-2.48,40.33c14.47,7.6,22.12,19.61,23.17,36.31h56.82c19.68,0,36.64,6.56,49.34,21.9,15.52,18.75,19.06,40.13,10.1,62.62-8.61,21.61-25.22,34.27-48.37,37.89A69.383,69.383,0,0,1,185,208q-61.77.06-123.54,0c-29.07,0-54.76-20.81-60.2-48.71-5.73-29.34,9.14-57.87,36.22-69.38C40.49,88.59,43.7,87.68,47.07,86.51ZM207.79,194c24.06-9.75,36.81-38.34,28.71-63.35a52.81,52.81,0,0,0-51.17-36.09c-40.73.34-81.47.07-122.2.12a73.441,73.441,0,0,0-10.26.75c-28.89,4.17-49,34.1-42.12,62.46,6,24.61,25.59,40.24,51.64,40.62,20.75.31,41.51,0,62.27.1,2.11,0,2.89-.6,3-2.78.6-11.22,5.38-20.46,13.81-27.77a107.115,107.115,0,0,1,8.79-6.26c-13.85-12.9-11.57-30.22-2.06-40.07a27.14,27.14,0,0,1,37.57-1.36,26.8,26.8,0,0,1,9,18c.84,9.5-3,17.2-9.91,23.5C200.79,173.22,200.79,173.22,207.79,194Zm-9.57,3.69c-1.05-12.43-6.62-21.29-17.1-26.5-10.64-5.29-21.34-4.53-31.11,2.35-8.41,5.93-12.81,14.24-13,25.15,20.56-.63,40.77.77,61.21-1.02ZM56.92,84.84h60.94c-.24-11.54-5.3-20.15-14.64-25.83-10.63-6.47-21.82-6.37-32.31.36C61.81,65.2,56.91,73.77,56.92,84.84Zm48.17-57.55A17.65,17.65,0,0,0,87.73,9.53a17.92,17.92,0,0,0-18,17.6A17.9,17.9,0,0,0,87.57,44.88a17.6,17.6,0,0,0,17.52-17.59Zm62.45,130.87c10.11,0,18-7.67,17.84-17.49A17.78,17.78,0,0,0,167.54,123a17.54,17.54,0,0,0-17.4,17.35c-.07,10.13,7.39,17.78,17.4,17.81Z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="milestone__container__content__card  ">
                <div className="milestone__container__content__card__value">
                  49
                </div>
                <div className="milestone__container__content__card__type">
                  Successful
                </div>
                <div className="milestone__container__content__card__heading">
                  Matchmaking
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
                  Co - Founder
                </div>
                <div className="milestone__container__content__card__heading">
                  Matched
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
        <div className="partners__container">
          <img
            src={partnerImg}
            alt="partnerImg"
            className="partners__container__left"
          />

          <div className="partners__container__right">
            <div className="partners__container__right__heading">
              Our Partner
            </div>
            <div className="partners__container__right__info">
              My vision is to imtroduce crowdfunding as a safe and viable
              fundeaising option for Pakistan's start-ups. Having closely worked
              with financially constrained startups and the investor fraternity,
              I found the equation off balanced with a large influx of needy
              startups and only a handful of angels or VC's that could put in
              their money. My background in accounting and finance from IBA and
              the mentorship i recieved there gave me a sound understanding of
              the investment and funding culture in Pakistan's start-up
              ecosystem. PeerVest Global is the outcome of the thought process
              that started at IBA, and is today a functioning platform, always
              evolving. We're here to hand hold all tech startups and investors
              in their journey to succeed.
            </div>
          </div>
        </div>
        <div className="container__why__choose__us">
          <div className="container__why__choose__us__wrapper">
            <div className="container__why__choose__us__wrapper__content">
              <div className="container__why__choose__us__wrapper__content__left">
                <div className="container__why__choose__us__wrapper__content__left__heading">
                  Why Choose Us
                </div>
                <div className="container__why__choose__us__wrapper__content__left__heading__info">
                  My vision is to imtroduce crowdfunding as a safe and viable
                  fundeaising option for Pakistan's start-ups. Having closely
                  worked with financially constrained startups and the investor
                  fraternity, I found the equation off balanced with a large
                  influx of needy startups and only a handful of angels or VC's
                  that could put in their money. My background in accounting and
                  finance from IBA and the mentorship i recieved there gave me a
                  sound understanding of the investment and funding culture in
                  Pakistan's start-up ecosystem. PeerVest Global is the outcome
                  of the thought process that started at IBA, and is today a
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
              <div className="container__why__choose__us__wrapper__content__right">
                <img
                  src={whyChooseUsSvg}
                  alt="whyChooseUsSvg"
                  className="container__why__choose__us__wrapper__content__right__img"
                />
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
                        <a href="">
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
                        <a href="">
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
                        <a href="">
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
                        <a href="">
                          <svg
                            id="google"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.176"
                            height="15.176"
                            viewBox="0 0 15.176 15.176"
                          >
                            <g
                              id="Group_81"
                              data-name="Group 81"
                              transform="translate(0 4.23)"
                            >
                              <g id="Group_80" data-name="Group 80">
                                <path
                                  id="Path_144"
                                  data-name="Path 144"
                                  d="M3.367,144.209.782,142.717a7.538,7.538,0,0,0,.011,6.709l2.574-1.486a4.574,4.574,0,0,1,0-3.731Z"
                                  transform="translate(0 -142.717)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_83"
                              data-name="Group 83"
                              transform="translate(1.278 0)"
                            >
                              <g id="Group_82" data-name="Group 82">
                                <path
                                  id="Path_145"
                                  data-name="Path 145"
                                  d="M54.414,1.86A7.587,7.587,0,0,0,43.127,3.374l2.587,1.494a4.6,4.6,0,0,1,6.656-.84.491.491,0,0,0,.66-.032l1.409-1.409A.5.5,0,0,0,54.414,1.86Z"
                                  transform="translate(-43.127 0)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_85"
                              data-name="Group 85"
                              transform="translate(7.918 6.268)"
                            >
                              <g id="Group_84" data-name="Group 84">
                                <path
                                  id="Path_146"
                                  data-name="Path 146"
                                  d="M274.337,211.921a.5.5,0,0,0-.494-.441h-6.217a.5.5,0,0,0-.495.495v1.978a.5.5,0,0,0,.495.495h3.484a4.654,4.654,0,0,1-1.588,2.075l1.48,2.563a7.749,7.749,0,0,0,3.121-4.337A7.3,7.3,0,0,0,274.337,211.921Z"
                                  transform="translate(-267.131 -211.479)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_87"
                              data-name="Group 87"
                              transform="translate(1.289 10.309)"
                            >
                              <g id="Group_86" data-name="Group 86">
                                <path
                                  id="Path_147"
                                  data-name="Path 147"
                                  d="M51.651,349.3a4.59,4.59,0,0,1-5.588-1.5l-2.576,1.487a7.58,7.58,0,0,0,6.3,3.38,7.432,7.432,0,0,0,3.346-.8Z"
                                  transform="translate(-43.487 -347.801)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                          </svg>
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
                      Laraib
                    </div>
                    <div className="container__our__team__card__content__info">
                      (Co-founder)
                    </div>
                    <div className="container__our__team__card__content__social__links__container">
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
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
                        <a href="">
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
                        <a href="">
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
                        <a href="">
                          <svg
                            id="google"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.176"
                            height="15.176"
                            viewBox="0 0 15.176 15.176"
                          >
                            <g
                              id="Group_81"
                              data-name="Group 81"
                              transform="translate(0 4.23)"
                            >
                              <g id="Group_80" data-name="Group 80">
                                <path
                                  id="Path_144"
                                  data-name="Path 144"
                                  d="M3.367,144.209.782,142.717a7.538,7.538,0,0,0,.011,6.709l2.574-1.486a4.574,4.574,0,0,1,0-3.731Z"
                                  transform="translate(0 -142.717)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_83"
                              data-name="Group 83"
                              transform="translate(1.278 0)"
                            >
                              <g id="Group_82" data-name="Group 82">
                                <path
                                  id="Path_145"
                                  data-name="Path 145"
                                  d="M54.414,1.86A7.587,7.587,0,0,0,43.127,3.374l2.587,1.494a4.6,4.6,0,0,1,6.656-.84.491.491,0,0,0,.66-.032l1.409-1.409A.5.5,0,0,0,54.414,1.86Z"
                                  transform="translate(-43.127 0)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_85"
                              data-name="Group 85"
                              transform="translate(7.918 6.268)"
                            >
                              <g id="Group_84" data-name="Group 84">
                                <path
                                  id="Path_146"
                                  data-name="Path 146"
                                  d="M274.337,211.921a.5.5,0,0,0-.494-.441h-6.217a.5.5,0,0,0-.495.495v1.978a.5.5,0,0,0,.495.495h3.484a4.654,4.654,0,0,1-1.588,2.075l1.48,2.563a7.749,7.749,0,0,0,3.121-4.337A7.3,7.3,0,0,0,274.337,211.921Z"
                                  transform="translate(-267.131 -211.479)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_87"
                              data-name="Group 87"
                              transform="translate(1.289 10.309)"
                            >
                              <g id="Group_86" data-name="Group 86">
                                <path
                                  id="Path_147"
                                  data-name="Path 147"
                                  d="M51.651,349.3a4.59,4.59,0,0,1-5.588-1.5l-2.576,1.487a7.58,7.58,0,0,0,6.3,3.38,7.432,7.432,0,0,0,3.346-.8Z"
                                  transform="translate(-43.487 -347.801)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                          </svg>
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
                        <a href="">
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
                        <a href="">
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
                        <a href="">
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
                        <a href="">
                          <svg
                            id="google"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.176"
                            height="15.176"
                            viewBox="0 0 15.176 15.176"
                          >
                            <g
                              id="Group_81"
                              data-name="Group 81"
                              transform="translate(0 4.23)"
                            >
                              <g id="Group_80" data-name="Group 80">
                                <path
                                  id="Path_144"
                                  data-name="Path 144"
                                  d="M3.367,144.209.782,142.717a7.538,7.538,0,0,0,.011,6.709l2.574-1.486a4.574,4.574,0,0,1,0-3.731Z"
                                  transform="translate(0 -142.717)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_83"
                              data-name="Group 83"
                              transform="translate(1.278 0)"
                            >
                              <g id="Group_82" data-name="Group 82">
                                <path
                                  id="Path_145"
                                  data-name="Path 145"
                                  d="M54.414,1.86A7.587,7.587,0,0,0,43.127,3.374l2.587,1.494a4.6,4.6,0,0,1,6.656-.84.491.491,0,0,0,.66-.032l1.409-1.409A.5.5,0,0,0,54.414,1.86Z"
                                  transform="translate(-43.127 0)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_85"
                              data-name="Group 85"
                              transform="translate(7.918 6.268)"
                            >
                              <g id="Group_84" data-name="Group 84">
                                <path
                                  id="Path_146"
                                  data-name="Path 146"
                                  d="M274.337,211.921a.5.5,0,0,0-.494-.441h-6.217a.5.5,0,0,0-.495.495v1.978a.5.5,0,0,0,.495.495h3.484a4.654,4.654,0,0,1-1.588,2.075l1.48,2.563a7.749,7.749,0,0,0,3.121-4.337A7.3,7.3,0,0,0,274.337,211.921Z"
                                  transform="translate(-267.131 -211.479)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_87"
                              data-name="Group 87"
                              transform="translate(1.289 10.309)"
                            >
                              <g id="Group_86" data-name="Group 86">
                                <path
                                  id="Path_147"
                                  data-name="Path 147"
                                  d="M51.651,349.3a4.59,4.59,0,0,1-5.588-1.5l-2.576,1.487a7.58,7.58,0,0,0,6.3,3.38,7.432,7.432,0,0,0,3.346-.8Z"
                                  transform="translate(-43.487 -347.801)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                          </svg>
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
                      Khizr Iqbal
                    </div>
                    <div className="container__our__team__card__content__info">
                      (Co-founder)
                    </div>
                    <div className="container__our__team__card__content__social__links__container">
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
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
                        <a href="">
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
                        <a href="">
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
                        <a href="">
                          <svg
                            id="google"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.176"
                            height="15.176"
                            viewBox="0 0 15.176 15.176"
                          >
                            <g
                              id="Group_81"
                              data-name="Group 81"
                              transform="translate(0 4.23)"
                            >
                              <g id="Group_80" data-name="Group 80">
                                <path
                                  id="Path_144"
                                  data-name="Path 144"
                                  d="M3.367,144.209.782,142.717a7.538,7.538,0,0,0,.011,6.709l2.574-1.486a4.574,4.574,0,0,1,0-3.731Z"
                                  transform="translate(0 -142.717)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_83"
                              data-name="Group 83"
                              transform="translate(1.278 0)"
                            >
                              <g id="Group_82" data-name="Group 82">
                                <path
                                  id="Path_145"
                                  data-name="Path 145"
                                  d="M54.414,1.86A7.587,7.587,0,0,0,43.127,3.374l2.587,1.494a4.6,4.6,0,0,1,6.656-.84.491.491,0,0,0,.66-.032l1.409-1.409A.5.5,0,0,0,54.414,1.86Z"
                                  transform="translate(-43.127 0)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_85"
                              data-name="Group 85"
                              transform="translate(7.918 6.268)"
                            >
                              <g id="Group_84" data-name="Group 84">
                                <path
                                  id="Path_146"
                                  data-name="Path 146"
                                  d="M274.337,211.921a.5.5,0,0,0-.494-.441h-6.217a.5.5,0,0,0-.495.495v1.978a.5.5,0,0,0,.495.495h3.484a4.654,4.654,0,0,1-1.588,2.075l1.48,2.563a7.749,7.749,0,0,0,3.121-4.337A7.3,7.3,0,0,0,274.337,211.921Z"
                                  transform="translate(-267.131 -211.479)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_87"
                              data-name="Group 87"
                              transform="translate(1.289 10.309)"
                            >
                              <g id="Group_86" data-name="Group 86">
                                <path
                                  id="Path_147"
                                  data-name="Path 147"
                                  d="M51.651,349.3a4.59,4.59,0,0,1-5.588-1.5l-2.576,1.487a7.58,7.58,0,0,0,6.3,3.38,7.432,7.432,0,0,0,3.346-.8Z"
                                  transform="translate(-43.487 -347.801)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
