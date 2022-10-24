import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hi() {
  return (
    <div>
      <div className="container">
        <div className="left_side">
          <div className="profileText">
          <img
              src="https://raw.githubusercontent.com/nomani113/Html-and-CSS/main/my%20pic.png"
              alt="left"
              width={150}
            />
            <h2>Abdullah nomani</h2>
        
          </div>
          <div className="ContactInfo">
            <h3 className="title">Contact Info:</h3>
            <ul>
              <li>
                <span className="icon">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <span className="text">+92 335 3265783</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </span>
                <span className="text">abdullahnomani113@gmail.com</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                <span className="text">A-102 Sector R1 Maymar </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                <span className="text">karachi,Pakistan</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </span>
                <span className="text">nomani113</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </span>
                <span className="text">Abdullah Nomani</span>
              </li>
            </ul>
          </div>

          <div className="ContactInfo education">
            <h3 className="title">Education:</h3>
            <ul>
              <li>
                <h5>2018-2019</h5>
                <h4>Matriculation In Science</h4>
                <h4>Jinnah Foundation School</h4>
              </li>
              <li>
                <h5>20219-2021</h5>
                <h4>intermadiate In Pre-Engineering</h4>
                <h4>Balochistan collage</h4>
              </li>
              <li>
                <h5>2021-2022</h5>
                <h4>BS Degree In CE(Undergraduate)</h4>
                <h4>Sir Syed University</h4>
              </li>
            </ul>
          </div>

          <div className="ContactInfo language">
            <h3 className="title">Language:</h3>
            <ul>
              <li>
                <span className="text">English</span>
                <span className="percent"></span>
              </li>
              <li>
                <span className="text">Urdu</span>
                <span className="percent"></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right_side">
          <div className="about">
            <h2 className="title2">Profile:</h2>
            <h3 className="title2">Objective</h3>
            <p>
              To build career in growing organization,where i can get the
              oppertunites to prove my abilities by accepting challenges,
              fulfilling the organizational goal and climb the career ladder
              through continous learning and commitment
            </p>
          </div>
          <div className="about">
            <h2 className="title2">Experience</h2>
            <div className="box">
              <div className="year_company">
                <h5>2021-Present</h5>
                <h5>Hello International</h5>
              </div>
              <div className="text">
                <h4>Senior Supervisor</h4>
                <p>
                  Hello International strives to cater solutions that meet your
                  needs. We deliver a fast rate customer experience by
                  cooperating with our clients. We have strategized our services
                  according to your needs
                </p>
              </div>
            </div>
          </div>

          <div className="about skills">
            <h2 className="title2">Professional Skills</h2>
            <div className="box">
              <h4>HTML</h4>
              <div className="percent"></div>
            </div>
            <div className="box">
              <h4>CSS</h4>
              <div className="percent"></div>
            </div>
            <div className="box">
              <h4>C++</h4>
              <div className="percent"></div>
            </div>
            <div className="box">
              <h4>python</h4>
              <div className="percent"></div>
            </div>
            <div className="box">
              <h4>Javascript</h4>
              <div className="percent"></div>
            </div>
          </div>
          <div className="about interest">
            <h2 className="title2">Interest</h2>
            <ul>
              <li>
                <i className="fa fa-gamepad" aria-hidden="true"></i> Online
                Gaming
              </li>
              <li>
                <i className="fa fa-futbol-o" aria-hidden="true"></i> football
              </li>
              <li>
                <i className="fa fa-microphone" aria-hidden="true"></i> Singing
              </li>
              <li>
                <i className="fa fa-headphones" aria-hidden="true"></i>{" "}
                listening
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
