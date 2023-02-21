import React, { Fragment } from "react";
import "./header.css";

const Header = () => {
  return (
    <Fragment>
      <header id="topHeader" className="header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">
              <img src="/images/logo.png" className="logoBrand" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    STORY
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ROADMAP
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    TEAM
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    WHITEPAPER
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center">
              <a className="joinBtn" href="#">
                join our discord
              </a>
              <div className="socialLinks">
                <a className="socialLink" href="#">
                  <img src="/images/twitter.svg" alt="" />
                </a>
                <a className="socialLink" href="#">
                  <img src="/images/opensea.svg" alt="" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
