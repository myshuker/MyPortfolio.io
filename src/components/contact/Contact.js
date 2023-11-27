import React, { useRef } from "react";
import "./Contact.css";
import linkd from "../../assets/images/linkedin.png";
import facebk from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import github from "../../assets/images/github.png";
import sendme from "../../assets/images/sendme.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gwgrvhb",
        "template_q7j4kqe",
        form.current,
        "2vkFao5Xzedf7oZGL"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email has been sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle"> Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to send me a message.
        </span>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="user_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            name="message"
            className="msg"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            <img src={sendme} className="submitImg" alt="submit" />
            Submit
          </button>
        </form>
      </div>
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/mohammad-alshoker-365376b8/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkd} alt="" className="socialMediaIcon" />
        </a>
        <a href="https://github.com/myshuker" target="_blank" rel="noreferrer">
          <img src={facebk} alt="" className="socialMediaIcon" />
        </a>
        <a href="https://github.com/myshuker" target="_blank" rel="noreferrer">
          <img src={twitter} alt="" className="socialMediaIcon" />
        </a>
        <a href="https://github.com/myshuker" target="_blank" rel="noreferrer">
          <img src={github} alt="" className="socialMediaIcon" />
        </a>
      </div>

      <footer className="footer">
        <p>
          <small>
            &copy; Copyright &copy; {new Date().getFullYear()} Mohammad
            Alshoker. All rights reserved{" "}
          </small>
        </p>
      </footer>
    </section>
  );
}

export default Contact;
