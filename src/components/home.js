import { useState } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className={`body `}>
      <div className={`dex4 ${props.active ? "bg-dark" : ""} `}>
        <div className="aaa">
          <div className={`dex1 ${props.active ? "bg-dark" : ""}`}>
            <div className={`box1 `}>
              <img
                className="img1"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b65ca6a-2e94-4b14-b8b3-fc4fc3ffa328/daoc64d-4fb367a7-325e-41c4-9099-dce58802d0e3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJiNjVjYTZhLTJlOTQtNGIxNC1iOGIzLWZjNGZjM2ZmYTMyOFwvZGFvYzY0ZC00ZmIzNjdhNy0zMjVlLTQxYzQtOTA5OS1kY2U1ODgwMmQwZTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6uktCNSyErXA9BVMzrxD1Oa80iIqWg35SB805_AOb3o"
              ></img>
              <p className="txt1">
                I'm Mahee, a student from india.I'n intrested in Code, Design,
                Buisiness, Crypto, Startups and Marketing{" "}
              </p>
            </div>
            <div className="box2">
              <img
                className="img2"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b65ca6a-2e94-4b14-b8b3-fc4fc3ffa328/daoc64d-4fb367a7-325e-41c4-9099-dce58802d0e3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJiNjVjYTZhLTJlOTQtNGIxNC1iOGIzLWZjNGZjM2ZmYTMyOFwvZGFvYzY0ZC00ZmIzNjdhNy0zMjVlLTQxYzQtOTA5OS1kY2U1ODgwMmQwZTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6uktCNSyErXA9BVMzrxD1Oa80iIqWg35SB805_AOb3o"
              ></img>
            </div>
          </div>
          <div className="dex3">
            <div className="aa">
              <div className="dex2">
                <div className="box1 toggle">
                  <label className="switch">
                    <input type="checkbox" onClick={props.handleClick} />
                    <span className="slider round"></span>
                  </label>
                </div>
                <div className="linkedin">
                  <p className="txt2">
                    <a href="https://in.linkedin.com/">in</a>
                  </p>
                </div>
              </div>
              <div className="box3">
                <h1 className="personal">How it started vs. how it's going</h1>
                <p className="p_txt">
                  A short personal history as it relates to design and
                  development,and how i' ve found value in the cross-section
                  between both disciplines
                </p>
                <div className="rm">
                  <Link to="/about">Read more</Link>
                </div>
              </div>
            </div>
            <div className="bb">
              <div className="css">
                css
                <div className="myProgress">
                  <div className="myBar">
                    <p className="p">70%</p>
                  </div>
                </div>
              </div>

              <div className="cpp">
                cpp
                <div className="myProgress">
                  <div className="myBar1">
                    <p className="p">85%</p>
                  </div>
                </div>
              </div>

              <div className="java">
                java
                <div className="myProgress">
                  <div className="myBar2">
                    <p className="p">30%</p>
                  </div>
                </div>
              </div>

              <div className="c">
                c
                <div className="myProgress">
                  <div className="myBar3">
                    <p className="p">75%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="boxes">
          <div className="box4">
            <p className="proj">Projects</p>
            <div className="pb">
              <Link to="/projects">Know more</Link>
            </div>
          </div>
          
          <div className="box5">
            <a className="ideas" href="">
              ideas
            </a>
            <div className="ib">
              <Link to="/ideas">💡</Link>
            </div>
          </div>

          <div className="box6">
            <a className="cv" href="">
              Hire Me
            </a>
            <div className="ib1">
              <Link to="">Get CV</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
