import React, { Component } from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <div className="body1">
      <div className={`mix2 ${props.active ? 'bg-dark':'bisque'}`}>
        <div className="mix1">
          <div className="a">
            <h1 className="ft1">ENVOY</h1>
            <p className="ft2">
              we create possibilities for the connected world
            </p>
            <h1 className="ft3">Be Bold</h1>
          </div>
          <div className="b">
            <a>
              <h1 className="ft4">EXPLORE</h1>
            </a>

            <div className="ft5">
              <Link to="/">HOME</Link>
            </div>
            <div className="ft6">
              <Link to="/about">ABOUT</Link>
            </div>
            <div className="ft7">
              <Link to="/ideas">IDEAS</Link>
            </div>
            <div className="ft8">
              <Link to="/projects">PROJECTS</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="call">
            <h1 className="contact">Contact</h1>
            <a  href="">
              <p className="mail">727721euec083@skcet.ac.in</p>
            </a>
            <a  href="">
              <p className="ph_no">8778483181</p>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
