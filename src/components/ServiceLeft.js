import React from "react";

const ServiceLeft = (props) => {
  return (
    <div className="service-container" id={props.id} key={props.number}>
      <div className="service-image">
        <img src={props.src} alt={props.title} />
      </div>
      <div className="service-explanation">
        <h2 className="service-title">{props.title}</h2>
        <p className="service-description">{props.text}</p>
      </div>
    </div>
  );
};

export default ServiceLeft;
