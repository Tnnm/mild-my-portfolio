import React, { useRef } from "react";
import Card from "../../components/Card";
import Profile from "../../assets/images/profile.jpeg";
import Facebook from "../../assets/images/facebook.png";
import Gmail from "../../assets/images/gmail.png";
import "./style.scss";
const PageIndex = () => {
  const constraintsRef = useRef(null);
  return (
    <div
      ref={constraintsRef}
      className="wrapper-index-page"
      defaultEffect={"cube"}
      width={`${window.innerWidth}px`}
    >
      <div className="wrapper-card">
        <Card className="" header="profile">
          <div className="profile-picture-wrapper">
            <img className="profile-picture" src={Profile} alt="" />
            <div className="wrapper-profile-info">
              <h1 className="profile-name">Thananan J.</h1>
              <h1 className="profile-position">UX/UI designer</h1>
              <h1 className="profile-email">Thanan.j@acaya.ai</h1>
              <h1 className="profile-tel">086-983-4785</h1>
            </div>
          </div>
        </Card>
      </div>
      <div className="social-card-wrapper">
        <Card>
          <div className="social">
            <div className="wrapper-social">
              <img src={Facebook} alt="" />
            </div>
            <div className="wrapper-social">
              <img className="gmail" src={Gmail} alt="" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PageIndex;
