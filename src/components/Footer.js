import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import dribbble from "./images/dribbble-128.png";
import github from "./images/github-128.png";
import googleplus from "./images/googleplus-128.png";
import linkedin from "./images/linkedin-512.png";
import twitter from "./images/twitter-128.webp";

const Footer = () => {
  const mystyle = {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  };

  return (
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4 py-3">
      <hr />
      <div className="text-center" >
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
              <img src={dribbble} style={{height: "5vh"}}/>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1">
              <img src={github} style={{height: "5vh"}}/>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1">
              <img src={googleplus} style={{height: "5vh"}}/>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1">
              <img src={linkedin} style={{height: "5vh"}}/>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-dribbble mx-1">
              <img src={twitter} style={{height: "5vh"}}/>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.CarolLiu.com"> CarolLiu.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
