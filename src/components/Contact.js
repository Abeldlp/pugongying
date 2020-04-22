import React, { useState } from "react";
import Phone from "../images/PHONEandWechat.png";

const Contact = () => {
  const contactForm = (
    <form action="https://formspree.io/moqnpqvj" method="POST">
      <label>名称</label>
      <br />
      <input type="text" required name="name" />
      <br />
      <br />
      <label>电子邮件</label>
      <br />
      <input type="email" required name="email" />
      <br />
      <br />
      <label>主题</label>
      <br />
      <input type="text" required name="subject" />
      <br />
      <br />
      <label>查询</label>
      <br />
      <textarea name="inquiry" cols="30" rows="6"></textarea>
      <br />
      <br />
      <button type="submit" className="submitButton">
        发送
      </button>
    </form>
  );
  const weechat = (
    <div className="phone-container">
      <img src={Phone} alt="Phone" />
    </div>
  );

  const [display, setDisplay] = useState(contactForm);

  const ChangeState = () => {
    setDisplay(weechat);
  };
  const ResetState = () => {
    setDisplay(contactForm);
  };
  return (
    <div>
      <div className="setbuttons-container">
        <button onClick={ResetState} className="submitButton">
          Contact form
        </button>
        <button onClick={ChangeState} className="submitButton">
          Weechat
        </button>
      </div>
      {display}
    </div>
  );
};

export default Contact;
