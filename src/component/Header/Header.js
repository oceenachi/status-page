import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <>
      <div className="heroDiv d-flex justify-content-center m-4 align-items-center">
        <div>
          <img
            className="d-block mx-auto mb-4"
            src="./assets/schoolable_fav.png"
            alt=""
            width="72"
            height="72"
          ></img>
        </div>
        <div>
          <h1 className="h1 pl-5">Schoolable</h1>
        </div>
      </div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            homepage
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav w-100">
              <a className="nav-item nav-link" href="#">
                Status
              </a>
              <div className="rightNav ml-auto d-flex">
              <a className="nav-item nav-link" href="#">
                Report a Problem
              </a>
              <a className="nav-item nav-link" href="#">
                Subscribe
              </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
     
    </>
  );
}

export default Header;
