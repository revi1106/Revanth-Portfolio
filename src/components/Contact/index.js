import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";

import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import WhatsApp from "@mui/icons-material/WhatsApp";

import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


import { useState } from "react";

export default function Contact() {



  const [mailSent, setMailSent] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {

    setLoading(true);

    e.preventDefault();

    const { username, email, message } = e.target.elements;

    const templateParams = {

      username: username.value,

      email: email.value,

      message: message.value,
    };

    emailjs
      .send(
        "service_iuhrv8n",
        "template_tqpxbwx",
        templateParams,
        {
          publicKey: "He1sx5Rxutscl3P_j",
        }
      )

      .then(
        () => {

          setMailSent(true);

          setLoading(false);

          toast.success("Message Sent Successfully!");
        },

        () => {

          setLoading(false);

          toast.error("Error occured!");
        }
      );
  };

  return (

    <section
      id="contact"
      className="contact-section"
    >

      <div className="contact-glow contact-glow-1"></div>
      <div className="contact-glow contact-glow-2"></div>

      <div className="contact-wrapper">

        <div className="contact-title">
          Let’s Collaborate
        </div>

        <div className="contact-content">

          {/* LEFT */}

          <div className="contact-left">

            <div className="contact-heading">

              Have an
              <br />

              <span>Idea?</span>

              <br />

              Let’s Build

            </div>

            <div className="contact-description">

              I’m always open to discussing
              AI projects, startup ideas,
              collaborations, freelance work,
              and innovative software solutions.

            </div>

            {/* SOCIAL OPTIONS */}

            <div className="contact-options">
                Contact me via: 
                <br></br>

                <a
                  href="https://www.linkedin.com/in/Revanth.Palaparthi-a89637228"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-option"
                >
                  <LinkedIn />
                  LinkedIn
                </a>
                
                <a
                  href="https://github.com/InvisibleTroll54219"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-option"
                >
                  <GitHub />
                  GitHub
                </a>

                <a
                  href="https://www.instagram.com/invisibletroll.54219/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-option"
                >
                  <Instagram />
                  Instagram
                </a>

                <a
                  href="https://wa.me/919000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-option"
                >
                  <WhatsApp />
                  WhatsApp
                </a>

              </div>


          </div>

          {/* RIGHT */}

          <div className="contact-card">

            <div className="contact-lottie">

              <lottie-player
                autoplay
                loop
                mode="bounce"
                src="https://assets9.lottiefiles.com/packages/lf20_3rqwsqnj.json"
                style={{ width: "210px" }}
              />

            </div>

            <form
              onSubmit={handleSubmit}
              className="contact-form"
            >

              <div className="contact-input">

                <div className="contact-input-icon">
                  <PersonIcon />
                </div>

                <input
                  id="username"
                  type="text"
                  placeholder="Your Name"
                  required
                  disabled={mailSent}
                />
              </div>

              <div className="contact-input">

                <div className="contact-input-icon">
                  <AlternateEmailIcon />
                </div>

                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  disabled={mailSent}
                />
              </div>

              <textarea
                id="message"
                className="contact-textarea"
                placeholder="Tell me about your idea..."
                required
                disabled={mailSent}
              />

              <button
                type="submit"
                className="contact-btn"
              >

                {
                  loading
                  ? "Sending..."
                  : mailSent
                  ? "Message Sent"
                  : "Send Message"
                }

              </button>

            </form>
          </div>
        </div>

        <ToastContainer />
      </div>
    </section>
  );
}
