import React from "react";
import main__background from "../Assets/main__background.png";
import join__us__background from "../Assets/join__us__background.png";
import founderPic from "../Assets/founderPic.png";
import visionPic from "../Assets/visionPic.png";
import Header from "../Components/Header";
import container__our__team__wrapper__entry__img__1 from "../Assets/container__our__team__wrapper__entry__img__1.png";
import container__our__team__wrapper__entry__img__2 from "../Assets/container__our__team__wrapper__entry__img__2.png";
import container__our__team__wrapper__entry__img__3 from "../Assets/container__our__team__wrapper__entry__img__3.png";
import Footer from "../Components/Footer";
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
              <button className="homepage__main__container__jumbotron__wrapper__content__cta">
                Become a Part
              </button>
            </div>
          </div>
        </div>
        <div className="container">
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
              <div className="container__startups__card__right">
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
              <div className="container__startups__card__right">
                Connect startups with potential investors and secure initial
                meetings to pitch the venture and raise capital.
              </div>
            </Link>
            <Link to="/" className="container__startups__card">
              <div className="container__startups__card__left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150.01"
                  height="125.715"
                  viewBox="0 0 150.01 125.715"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        id="Rectangle_30"
                        data-name="Rectangle 30"
                        width="150.01"
                        height="125.715"
                        fill="currentColor"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_10"
                    data-name="Group 10"
                    transform="translate(0)"
                  >
                    <g
                      id="Group_8"
                      data-name="Group 8"
                      transform="translate(0)"
                      clip-path="url(#clip-path)"
                    >
                      <g
                        id="Group_7"
                        data-name="Group 7"
                        transform="translate(4.094 4.614)"
                      >
                        <path
                          id="Path_31"
                          data-name="Path 31"
                          d="M-106,4661.127H9.876c-4.154-2.791-3.245-7.179-3.248-11.238q-.021-31.8-.007-63.59v-4.073c-3.441,3.237-6.368,6-9.307,8.753-3.821,3.578-6.322,3.612-10.175.14q-5.11-4.6-10.2-9.23c-.226-.2-.445-.42-.663-.636-2.412-2.384-2.962-4.977-1.469-6.921s4.305-1.765,6.885.521c1.9,1.689,3.751,3.452,5.634,5.167,1.271,1.16,2.56,2.3,4,3.584,3.967-3.723,7.686-7.518,11.734-10.86a11.278,11.278,0,0,1,6.1-2.5c5.741-.358,11.512-.242,17.27-.172,5.991.075,8.1,2.215,8.808,8.593.172,1.544.393,3.083.591,4.622v19.619a13.733,13.733,0,0,1-.668,3.022c-1.082,2.293-1.963,4.919-3.647,6.59a4.782,4.782,0,0,0-1.691,3.888c.034,11.8-.041,23.6.054,35.394.029,3.617-.319,6.89-4.408,9.326H35.819v12.013H-106Zm24.385,6.487-1.738-.793.5,2.326Zm96.393-6.665h6.87l-3.439-3.865Z"
                          transform="translate(106 -4538.991)"
                          fill="currentColor"
                        />
                        <path
                          id="Path_32"
                          data-name="Path 32"
                          d="M-23.173,4521c8.35,3.257,10.715,6.911,10.715,16.56v19.928c-2.252-1.74-4.231-3.089-5.977-4.72a4.278,4.278,0,0,1-.849-2.762c-.083-4.743-.008-9.49-.047-14.235-.043-5.221-1.986-7.411-6.806-7.421q-33.064-.058-66.127,0c-4.864.008-6.849,2.152-6.86,7.36q-.055,25.307,0,50.616c.011,5.488,1.912,7.49,6.979,7.492q32.915.016,65.829,0c5.08,0,6.948-2,6.989-7.478.035-4.617.008-9.236.008-14.426,2.362,1.953,4.356,3.559,6.292,5.242a1.984,1.984,0,0,1,.539,1.346c-.036,3.79.229,7.638-.295,11.357-1,7.1-6.134,11.34-13.287,11.4-7.937.062-15.874.014-24.417.014.863,1.04,1.356,1.721,1.932,2.312,5,5.131,9.989,10.265,15.026,15.351,1.716,1.731,2.577,3.569.927,5.783-1.436,1.926-3.4,1.746-5.636-.516-5.181-5.229-10.313-10.514-15.473-15.768-.541-.551-1.134-1.044-2.179-2,0,4.228-.039,7.868.014,11.5.037,2.571-.717,4.466-3.442,4.424-2.543-.039-3.307-1.869-3.292-4.288.023-3.648.006-7.3.006-11.8-3.887,3.939-7.223,7.312-10.548,10.7-2.509,2.554-5,5.125-7.506,7.683-1.592,1.626-3.374,1.994-5,.261-1.724-1.843-1.351-3.808.334-5.538q7.39-7.583,14.808-15.134a24.608,24.608,0,0,1,2.577-2.017l-.506-.947H-90.313c-9.063,0-12.4-2.4-15.687-11.292v-58.22c1.834-5.544,5.237-9.324,10.726-10.758Z"
                          transform="translate(106 -4521)"
                          fill="currentColor"
                        />
                        <path
                          id="Path_33"
                          data-name="Path 33"
                          d="M-25.114,4570.454c0,6.847-.08,13.7.043,20.544.046,2.547-.675,3.7-3.2,3.578-2.97-.145-5.952-.092-8.927-.017-2.053.053-3.079-.62-3.067-3.061q.107-21.177.014-42.354c-.006-1.982.648-2.928,2.584-2.892,3.273.062,6.549.076,9.821-.005,2.055-.05,2.785.868,2.76,3.031C-25.165,4556.333-25.114,4563.394-25.114,4570.454Z"
                          transform="translate(79.434 -4530.269)"
                          fill="currentColor"
                        />
                        <path
                          id="Path_34"
                          data-name="Path 34"
                          d="M-63.56,4592.456c0,3.582-.074,7.168.027,10.746.066,2.335-.863,3.222-3.006,3.163-3.271-.09-6.547-.047-9.821-.021-1.717.012-2.542-.777-2.535-2.661.031-7.586-.061-15.174.119-22.754a3.39,3.39,0,0,1,2.268-2.389c3.453-.273,6.937-.087,10.408-.125,1.953-.021,2.586,1.054,2.556,2.978C-63.6,4585.08-63.561,4588.768-63.56,4592.456Z"
                          transform="translate(95.046 -4542.07)"
                          fill="currentColor"
                        />
                        <path
                          id="Path_35"
                          data-name="Path 35"
                          d="M13.537,4602.412q0,2.365,0,4.731c0,4.38-.1,4.489-4.089,4.5-2.87.007-5.74-.043-8.609.01-1.888.035-2.68-.86-2.657-2.853.051-4.413.033-8.828.008-13.242-.01-1.776.6-2.762,2.426-2.734,3.463.051,6.927.042,10.39,0,1.736-.019,2.554.806,2.535,2.649C13.518,4597.789,13.536,4600.1,13.537,4602.412Z"
                          transform="translate(63.898 -4547.372)"
                          fill="currentColor"
                        />
                        <path
                          id="Path_36"
                          data-name="Path 36"
                          d="M96.587,4557.442a8.856,8.856,0,0,1-8.631-9.224c.074-5.08,4.078-9.218,8.814-9.115,4.629.1,8.431,4.2,8.481,9.15A8.83,8.83,0,0,1,96.587,4557.442Z"
                          transform="translate(27.619 -4527.646)"
                          fill="currentColor"
                        />
                        <path
                          id="Path_37"
                          data-name="Path 37"
                          d="M-66.256,4723.79l-1.235,1.532-.5-2.324.781,1.756Z"
                          transform="translate(90.641 -4595.168)"
                          fill="currentColor"
                        />
                        <path
                          id="Path_38"
                          data-name="Path 38"
                          d="M-66.256,4723.79l-.956.964-.781-1.756Z"
                          transform="translate(90.641 -4595.168)"
                          fill="currentColor"
                        />
                      </g>
                    </g>
                  </g>
                </svg>

                <div className="container__startups__card__left__content">
                  <div className="container__startups__card__left__content__sub__heading">
                    Raising
                  </div>
                  <div className="container__startups__card__left__content__heading">
                    Deck and Model
                  </div>
                </div>
              </div>
              <div className="container__startups__card__right">
                Connect startups with potential investors and secure initial
                meetings to pitch the venture and raise capital.
              </div>
            </Link>
          </div>
        </div>
        <div className="container" style={{ minHeight: "fit-content" }}>
          <div className="milestone__container">
            <div className="milestone__container__heading">Milestones</div>
            <div className="milestone__container__content">
              <div className="milestone__container__content__card">
                <div className="milestone__container__content__card__value">
                  56
                </div>
                <div className="milestone__container__content__card__type">
                  Arranged
                </div>
                <div className="milestone__container__content__card__heading">
                  Meetings
                </div>
              </div>
              <div className="milestone__container__content__card milestone__container__content__card__blue ">
                <div className="milestone__container__content__card__value">
                  49
                </div>
                <div className="milestone__container__content__card__type">
                  Successful
                </div>
                <div className="milestone__container__content__card__heading">
                  Matchmaking
                </div>
              </div>
              <div className="milestone__container__content__card milestone__container__content__card__border">
                <div className="milestone__container__content__card__value">
                  59
                </div>
                <div className="milestone__container__content__card__type">
                  Co - Founder
                </div>
                <div className="milestone__container__content__card__heading">
                  Matched
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="join__us__container">
          <img
            src={join__us__background}
            alt="join__us__background"
            className="join__us__img"
          />
          <div className="join__us__container__content__wrapper">
            <div className="join__us__container__content">
              <div className="join__us__container__content__heading">
                Some Fancy Heading Here
              </div>
              <div className="join__us__container__content__info">
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
              <button className="join__us__container__content__cta">
                Join Us Now
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container__our__team">
            <div className="container__our__team__heading">Our Team</div>
            <div className="container__our__team__card">
              <div className="container__our__team__card__content">
                <div className="container__our__team__card__content__left">
                  <div className="container__our__team__card__content__left__img__container">
                    <img
                      src={founderPic}
                      alt="founderPic"
                      className="container__our__team__card__content__left__img"
                    />
                  </div>
                  <div className="container__our__team__card__content__left__heading">
                    Fizza Nadeem Siddique (Founder)
                  </div>
                </div>
                <div className="container__our__team__card__content__right">
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
              </div>
            </div>
            <div className="container__our__team__wrapper">
              <div className="container__our__team__wrapper__entry">
                <img
                  src={container__our__team__wrapper__entry__img__1}
                  alt="container__our__team__wrapper__entry__img"
                  className="container__our__team__wrapper__entry__img"
                />
                <div className="container__our__team__wrapper__entry__heading">
                  Laraib
                </div>
                <div className="container__our__team__wrapper__entry__sub__heading">
                  (Co-founder)
                </div>
              </div>
              <div className="container__our__team__wrapper__entry">
                <img
                  src={container__our__team__wrapper__entry__img__2}
                  alt="container__our__team__wrapper__entry__img"
                  className="container__our__team__wrapper__entry__img"
                />
                <div className="container__our__team__wrapper__entry__heading">
                  Tajulle Ahmed
                </div>
                <div className="container__our__team__wrapper__entry__sub__heading">
                  (Co-founder)
                </div>
              </div>
              <div className="container__our__team__wrapper__entry">
                <img
                  src={container__our__team__wrapper__entry__img__3}
                  alt="container__our__team__wrapper__entry__img"
                  className="container__our__team__wrapper__entry__img"
                />
                <div className="container__our__team__wrapper__entry__heading">
                  Khizr Iqbal
                </div>
                <div className="container__our__team__wrapper__entry__sub__heading">
                  (Co-founder)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our__vision__container">
          <img src={visionPic} alt="visionPic" className="our__vision__img" />
          <div className="our__vision__container__wrapper">
            <div className="our__vision__container__wrapper__content">
              <div className="our__vision__container__wrapper__content__heading">
                Some Fancy Heading Here
              </div>
              <div className="our__vision__container__wrapper__content__info">
                My vision is to imtroduce crowdfunding as a safe and viable
                fundeaising option for Pakistan's start-ups. Having closely
                worked with financially constrained startups and the investor
                fraternity, I found the equation off balanced with a large
                influx of needy startups and only a handful of angels or VC's
                that could put in their money. My background in accounting and
                finance from IBA and the mentorship i recieved there gave me a
                sound.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
