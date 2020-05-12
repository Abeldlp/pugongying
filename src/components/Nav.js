import React from "react";
import Logo from "../images/dadelion-logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const style = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div className="navbar">
      <img className="Logo" src={Logo} alt="" />
      <div>
        <ul className="navitems">
          <Link to="/" style={style}>
            <li className="Navitem">主页面</li>
          </Link>
          <Link to="/service" style={style}>
            <li className="Navitem">预约项目一览</li>
          </Link>
          <Link to="/about" style={style}>
            <li className="Navitem">代表</li>
          </Link>
          <Link to="/prices" style={style}>
            <li className="Navitem">价格表一览</li>
          </Link>
          <Link to="/contact" style={style}>
            <li className="Navitem">联系方式</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
