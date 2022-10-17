import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-facebook">
                  <FaFacebookF />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram">
                  <FaInstagram />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-youtube">
                  <FaYoutube />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter">
                  <FaTwitter />
                </i>
              </a>
            </li>
          </ul>
        </div>

        <div className="row">
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>

        <div className="row">
          ANYTICKET Copyright © 2022 AnyTicket - All rights reserved || Designed By: Niv&Lidan
        </div>
      </div>
    </footer>
  );
}

export default Footer;
