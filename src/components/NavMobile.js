import React, { useState } from "react";
import Logo from "../images/dadelion-logo.png";
import { Link } from "react-router-dom";

const NavMobile = () => {
  const style = {
    textDecoration: "none",
    color: "black",
  };

  const [buttons, setButtons] = useState("");
  const [buttontext, setButtontext] = useState("MENU");

  const showButtons = () => {
    if (buttons === "") {
      setButtontext("CLOSE");
      setButtons(
        <div className="navitems" id="buttons">
          <ul>
            <Link to="/" style={style}>
              <li>主页面</li>
            </Link>
            <Link to="/service" style={style}>
              <li>预约项目一览</li>
            </Link>
            <Link to="/about" style={style}>
              <li>代表</li>
            </Link>
            <Link to="/prices" style={style}>
              <li>价格表一览</li>
            </Link>
            <Link to="/contact" style={style}>
              <li>联系方式</li>
            </Link>
          </ul>
        </div>
      );
    } else {
      setButtons("");
      setButtontext("MENU");
    }
  };

  return (
    <div className="navmobile">
      <img src={Logo} alt="" />
      <button className="buttonman" onClick={showButtons}>
        {buttontext}
      </button>
      {buttons}
    </div>
  );
};

export default NavMobile;
