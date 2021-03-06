import React, { useState } from "react";

import ScrollableAnchor from "react-scrollable-anchor";
import GitHub from "./images/GitHub.png";
import LinkedIn from "./images/linkedin.svg";
import Twitter from "./images/twitter.png";

import cls from "./Contact.module.css";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [sentNotice, setSentNotice] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "company":
        setCompany(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        return;
    }
  };
  const handleSentNotice = () => {
    window.setTimeout(() => {
      setSentNotice(false);
      setAlertMessage("");
    }, 3000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSentNotice(true);
    if (name !== "" && company !== "" && email !== "" && message !== "") {
      setAlertMessage(<p>Thank you for reaching out. I look forward to talking with you!</p>);
      axios
        .post("https://formcarry.com/s/QYjWz6aXeju", { name, email, company, message }, { headers: { Accept: "application/json" } })
        .then((res) => {
          console.log("success: ", res);
        })
        .catch(function (error) {
          console.log("error: ", error);
        });
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } else {
      setAlertMessage(<p>Information is missing from this form.</p>);
    }
    handleSentNotice();
  };
  return (
    <ScrollableAnchor id="contact">
      <div className={cls.ContactContainer}>
        <form className={cls.FormContainer}>
          <input type="text" className={cls.name} name="name" placeholder="Name" value={name} onChange={handleChange} />
          <input type="email" className={cls.email} name="email" placeholder="Email" value={email} onChange={handleChange} />
          <input type="text" className={cls.company} name="company" placeholder="Company" value={company} onChange={handleChange} />
          <textarea type="textarea" className={cls.message} name="message" placeholder="Message" value={message} onChange={handleChange} />
          <button onClick={handleSubmit} className={cls.submit}>
            Send
          </button>
        </form>
        <div className={cls.socialMediaContainer}>
          <a href={"https://github.com/lwood54"} target="blank">
            <img src={GitHub} alt="GitHub" className={cls.icons} />
          </a>
          <a href={"https://www.linkedin.com/in/logan-wood-8b3535109/"} target="blank">
            <img src={LinkedIn} alt="LinkedIn" className={cls.icons} />
          </a>
          <a href={"https://twitter.com/lwood54"} target="blank">
            <img src={Twitter} alt="Twitter" className={cls.icons} />
          </a>
        </div>
        {sentNotice ? <div className={cls.noticeContainer}>{alertMessage}</div> : null}
      </div>
    </ScrollableAnchor>
  );
};

export default Contact;
