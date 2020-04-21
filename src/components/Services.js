import React from "react";
import ServiceLeft from "./ServiceLeft";
import Logo from "../images/dadelion-logo.png";
//IMPORT IMAGES TO USE ON THE SERVICES

const Services = () => {
  const textDeclaration = [
    {
      number: 1,
      id: "Left",
      title: "レストラン予約サービス",
      src: Logo,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam voluptatem molestias et eaque explicabo eius earum praesentium libero animi.",
    },

    {
      number: 2,
      id: "Right",
      title: "美術館予約サービス",
      src: Logo,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam voluptatem molestias et eaque explicabo eius earum praesentium libero animi.",
    },

    {
      number: 3,
      id: "Left",
      title: "イベント予約サービス",
      src: Logo,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam voluptatem molestias et eaque explicabo eius earum praesentium libero animi.",
    },

    {
      number: 4,
      id: "Right",
      title: "テーマパーク予約サービス",
      src: Logo,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam voluptatem molestias et eaque explicabo eius earum praesentium libero animi.",
    },

    {
      number: 5,
      id: "Left",
      title: "観光予約サービス",
      src: Logo,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam voluptatem molestias et eaque explicabo eius earum praesentium libero animi.",
    },
  ];

  return (
    <div>
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
