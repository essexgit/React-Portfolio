import React from "react";
import SvgTitle from "../../assets/images/SVGTitle.jsx";
import SvgPortrait from "../../assets/images/SVGPortrait.jsx";

function Home(props) {
  return (
    <div className="container">
      <div className="pageTitle">
        <SvgTitle />
      </div>
      <div className="pagePortrait">
        <SvgPortrait />
      </div>
      <div className="sloganWrapper">
        <h1 className="sloganA">Make the Rules</h1>
        <h1 className="sloganB">Shout the Loudest</h1>
      </div>
    </div>
  );
}

export default Home;
