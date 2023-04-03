import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="layout--container">
      <div className="wrapper--layoutContainer">
        <div className="layout--container__navbar">
          <Header />
        </div>
      </div>
      <div className="wrapper--main-footer">
        <main>{children}</main>
        <div className="layout--container__footer">
        </div>
      </div>
    </div>
  );
};

export default Layout;
