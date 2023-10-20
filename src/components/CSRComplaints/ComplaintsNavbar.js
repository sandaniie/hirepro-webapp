import React from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import "./index.css";

const ComplaintsNavbar = ({ firstName, avatar, name, role }) => {
  return (
    <div className="dash-navbar">
      <div>
        <div className="dash-nav-heading">Complaints</div>
        <div className="dash-nav-subheading">
          Lorem ipsum dolor si amet welcome back johny
        </div>
      </div>
      <div className="dash-nav-section2">
        <img className="dash-nav-icon" src="Icon-Menu.png" alt="CardIcon" />
        <img
          className="dash-nav-icon"
          src="Icon-notification.png"
          alt="CardIcon"
        />

        <div className="dash-nav-avatar">
          <PowerSettingsNewIcon/>
          <img className="dash-nav-avatar-img" src={avatar} alt="avatar" />
          <div>
            <div className="dash-nav-avatar-name">{name}</div>
            <div className="dash-nav-avatar-role">{role}</div>
          </div>
          <img
            src="caret-down.png"
            style={{ width: "10px", height: "10px", marginTop: "20px" }}
            alt="down"
          />
        </div>
      </div>
    </div>
  );
};

export default ComplaintsNavbar;
