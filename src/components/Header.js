import React from "react";
import "../styles/Header.css";

const Header = (props) => {
  return (
    <div className="header-bg">
      <h1>TEMPLATE</h1>
      <div className="tabs">
        <div
          className="tab"
          style={{
            backgroundColor: props.tab === 0 ? "white" : "black",
            color: props.tab === 0 ? "black" : "whitesmoke",
          }}
          onClick={()=>{props.handleTabChange(0)}}
        >
          EMAIL
        </div>
        <div
          className="tab"
          style={{
            backgroundColor: props.tab === 1 ? "white" : "black",
            color: props.tab === 1 ? "black" : "whitesmoke",
          }}
          onClick={()=>{props.handleTabChange(1)}}
        >
          HTML
        </div>
      </div>
    </div>
  );
};

export default Header;
