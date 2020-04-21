import React from "react";

const Contact = () => {
  return (
    <div>
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
        <textarea name="inquiry" cols="30" rows="10"></textarea>
        <br />
        <br />
        <button type="submit">发送</button>
      </form>
    </div>
  );
};

export default Contact;
