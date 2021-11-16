import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../Assets/logo-light.png";

function Btn() {
  const history = useHistory();
  return (
    <button
      type="button"
      className="nav__header__btn"
      onClick={() => {
        history.push("/contact");
      }}
    >
      Contact
    </button>
  );
}

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isScrolling: false,
      isHeaderOpen: window.innerWidth > 1000,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        this.setState({
          isScrolling: true,
        });
      } else if (window.scrollY === 0) {
        this.setState({
          isScrolling: false,
        });
      }
    });
    window.addEventListener("resize", () => {
      this.setState({
        isHeaderOpen: window.innerWidth > 1000,
      });
    });
  }
  render() {
    return (
      <div
        className={this.state.isScrolling ? "header header__active" : "header"}
      >
        <div className="header__wrapper">
          <Link to="/" className="header__logo">
            <img src={logo} alt="logo" className="header__logo__img" />
          </Link>
          <button
            className="menu__btn"
            onClick={() => {
              if (!this.state.isHeaderOpen) {
                this.setState({
                  isHeaderOpen: true,
                });
              } else {
                this.setState({
                  isHeaderOpen: false,
                });
              }
            }}
          >
            {this.state.isHeaderOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
          {this.state.isHeaderOpen ? (
            <div
              className={
                this.state.isScrolling && this.state.isHeaderOpen
                  ? "header__nav header__nav__active"
                  : "header__nav"
              }
            >
              <Link to="/investor" className="nav__header__link">
                Investor
              </Link>
              {/* <Link to="/co-founder" className="nav__header__link">
                Co-founder
              </Link> */}
              <Link to="/start-up" className="nav__header__link">
                Start-up
              </Link>
              <Link to="/services" className="nav__header__link">
                Services
              </Link>
              <Link to="/about-us" className="nav__header__link">
                About Us
              </Link>
              <Link to="/faq" className="nav__header__link">
                FAQ
              </Link>
              <Btn />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
