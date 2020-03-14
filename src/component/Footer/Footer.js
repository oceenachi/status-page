import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer(props) {
  return (
    <>
      <div className="row wrapper mt-5 pt-5 text-decoration-none">
        <div className="icon-wrapper col-md-2">
          <div className="heroDiv d-flex justify-content-center align-items-center">
            <div>
              <img
                className="d-block mx-auto mb-4"
                src="./assets/schoolable_fav.png"
                alt=""
                width="32"
                height="32"
              ></img>
            </div>
            <div>
              <h6 className="h6 pl-2">Schoolable</h6>
            </div>
          </div>

          <div>
            <ul className="list-unstyled d-flex flex-row justify-content-between">
              <li>
                <NavLink to="">
                  <FaTwitter className="icons"/>
                </NavLink>
              </li>
              <li>
                <NavLink to=""><FaLinkedin className="icons"/></NavLink>
              </li>
              <li>
                <NavLink to=""><FaFacebook className="icons"/></NavLink>
              </li>
              <li>
                <NavLink to=""><FaInstagram className="icons"/></NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-3 col-md-10">
          <div className="d-flex justify-content-around">
            <div className="row w-100">
              <div className="col-sm-3 col">
                <h6 className="h6 footerword">Company</h6>
                <div className="d-flex flex-column">
                  <ul className="list-unstyled">
                    <li>
                      <NavLink to="">About Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="">Blog</NavLink>
                    </li>
                    <li>
                      <NavLink to="">FAQ</NavLink>
                    </li>
                    <li>
                      <NavLink to="">Contact</NavLink>
                    </li>
                    <li>
                      <NavLink to="">Help</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 col">
                <h6 className="h6 footerword">Products</h6>
                <div className="d-flex flex-column">
                  <ul className="list-unstyled">
                    <li>
                      <NavLink to="">Parents</NavLink>
                    </li>
                    <li>
                      <NavLink to="">Schools</NavLink>
                    </li>
                    <li>
                      <NavLink to="">Partners</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 col">
                <h6 className="h6 footerword">Legal</h6>
                <div className="d-flex flex-column">
                  <ul className="list-unstyled">
                    <li>
                      <NavLink to="">Privacy Policy</NavLink>
                    </li>
                    <li>
                      <NavLink to="">Terms of Service</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 col">
                <h6 className="h6 footerword">Office</h6>
                <div className="d-flex flex-column">
                  <ul className="list-unstyled">
                    <li>
                      <span>Victoria Garden City, Lagos</span><br/>
                    </li>
                    <li>
                      <span>
                        4344 Fruitvale Avenue, Oakland, Califonia, USA.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default Footer;
