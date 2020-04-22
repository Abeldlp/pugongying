import React, { useState } from "react";
import Logo from "../images/dadelion-logo.png";
import { Link } from "react-router-dom";

const NavMobile = () => {
  const style = {
    textDecoration: "none",
    color: "black",
  };

  const [buttons, setButtons] = useState({
    opacity: 0,
    left: "500px",
  });
  const [buttontext, setButtontext] = useState("MENU");
  const [buttonColor, setButtonColor] = useState({
    backgroundColor: "lightgrey",
  });

  const showButtons = () => {
    if (buttontext === "MENU") {
      setButtontext("CLOSE");
      setButtonColor({ backgroundColor: "darkgrey" });
      setButtons({ opacity: 0.9, right: "20px" });
    } else {
      setButtons({ opacity: 0, left: "500px" });
      setButtontext("MENU");
      setButtonColor({ backgroundColor: "lightgrey" });
    }
  };

  return (
    <div className="navmobile">
      <img src={Logo} alt="" />
      <button style={buttonColor} className="menu-button" onClick={showButtons}>
        {buttontext}
      </button>
      <div className="navitemsmobile" id="buttons" style={buttons}>
        <ul className="mobile-list">
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
    </div>
  );
};

export default NavMobile;
