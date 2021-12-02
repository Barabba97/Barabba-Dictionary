import React from "react";
import "./Footer.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = ({ lightMode }) => {
  return (
    <div 
        className="footer"
        style={{ 
            backgroundColor: lightMode ? "#fff" : "#282c34",
            color: lightMode ? "black" : "white",
        }}
    >
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by Barabba
      </span>
      <div className="iconContainer">
        <a href="https://twitter.com/Barabba_FDM" target="__blank">
          <TwitterIcon fontSize="large" />
        </a>
        <a href="https://github.com/Barabba97" target="__blank">
          <GitHubIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default Footer;