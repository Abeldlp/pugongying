import React from "react";
import ServiceLeft from "./ServiceLeft";
import Restaurant from "../images/apex-360-ybmTVrqdjM8-unsplash.jpg";
import Museum from "../images/igor-miske-oLhTLD-RBsc-unsplash.jpg";
import Events from "../images/hulki-okan-tabak-GKx96wY_MoA-unsplash.jpg";
import ThemePark from "../images/matt-bowden-GZc4fnQsaWQ-unsplash.jpg";
import Tourism from "../images/dimitry-b-uDl5opHop7E-unsplash.jpg";

//IMPORT IMAGES TO USE ON THE SERVICES

const Services = () => {
  const textDeclaration = [
    {
      number: 1,
      id: "Left",
      title: "レストラン予約サービス",
      src: Restaurant,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam voluptatem molestias et eaque explicabo eius earum praesentium libero animi.",
    },

    {
      number: 2,
      id: "Right",
      title: "美術館予約サービス",
      src: Museum,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam voluptatem molestias et eaque explicabo eius earum praesentium libero animi.",
    },

    {
      number: 3,
      id: "Left",
      title: "イベント予約サービス",
      src: Events,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam voluptatem molestias et eaque explicabo eius earum praesentium libero animi.",
    },

    {
      number: 4,
      id: "Right",
      title: "テーマパーク予約サービス",
      src: ThemePark,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam voluptatem molestias et eaque explicabo eius earum praesentium libero animi.",
    },

    {
      number: 5,
      id: "Left",
      title: "観光予約サービス",
      src: Tourism,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam voluptatem molestias et eaque explicabo eius earum praesentium libero animi.",
    },
  ];

  return (
    <div className="services-body">
      <h1 id="title">预约项目一览</h1>
      <h2 id="title2">提供多种预订服务，使旅行更轻松</h2>
      {textDeclaration.map((currentText) => (
        <ServiceLeft
          title={currentText.title}
          text={currentText.text}
          src={currentText.src}
          id={currentText.id}
          key={currentText.number}
        />
      ))}
    </div>
  );
};

export default Services;
