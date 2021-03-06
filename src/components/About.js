import React from "react";
import Xiang from "../images/20180331_124044.jpg";

const About = () => {
  return (
    <div className="About-container">
      <div className="daihyouphoto-container">
        <img src={Xiang} alt="" className="daihyouphoto" />
      </div>
      <div className="daihyoutext-container">
        <h1 className="daihyoutext-title">孙香义</h1>
        <h3 className="daihyoutext-secondtitle">
          Everything start with a dream
        </h3>
        <p className="daihyoutext-explanation">
          出生于中国北部吉林省，大学在北京专攻旅游管理。
          毕业后在上海某国际旅行社担任韩语国际导游3年。
          2009年启程到日本东京求学。在学期间兼职中日当地导游和中日韩会展翻译。
          始于2013年，就职于日本某知名饮食企业。
          针对访日旅客介绍并代行预约日本美食餐厅，例如，米其林，和式，奇异一系列餐厅。
          根据客户的需求并提供相对应的服务。 2019年移居到西班牙。
          热爱旅游的她，为了访西旅客更好的享受旅程，开启了代行预约的服务。
        </p>
      </div>
    </div>
  );
};

export default About;
