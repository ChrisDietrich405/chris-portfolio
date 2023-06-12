import React from "react";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin, AiFillMail, AiFillPhone } from "react-icons/ai";

import { SectionContext } from "@/app/context/LinkContext";
import { useContext } from "react";

import styles from "./styles.module.css";

const Contact = () => {
  const { getInTouchRef } = useContext(SectionContext);
  return (
    <main ref={getInTouchRef}>
      <h2>Get In Touch</h2>
      <div className={styles.footer_container}>
        <div>
          <div className={styles.contact_container}>
            <div className={styles.flex_container}>
              <p>
                <AiFillMail size="1.5em" />
              </p>
              <p>
                <a className="email" href="mailto:chrisdietrich3666@gmail.com">
                  chrisdietrichdev@gmail.com
                </a>
              </p>
            </div>
            <div className={styles.flex_container_phone}>
              <p>
                <AiFillPhone size="1.5em" />
              </p>
              <p>240 814 4208</p>
            </div>
            <div className={styles.contact_icons}>
              <Link href="https://github.com/ChrisDietrich405/" target="_blank">
                <FaGithubSquare
                  size="2.5em"
                  color="white"
                  className="github-icon"
                  style={{ marginTop: "2px" }}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/chris-dietrich-frontend-developer/"
                target="_blank"
              >
                <AiFillLinkedin size="2.8em" color="white" />
              </Link>
              <Link
                href="https://tinyurl.com/chrisdietrichdevresume"
                target="_blank"
              >
                <img
                  src="/images/resumeicon.png"
                  alt="logo"
                  style={{
                    width: "42px",

                    borderRadius: "30px",
                    marginTop: "2px",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.message_container}>
          <div>
            <label
              htmlFor="exampleFormControlInput1"
              className={styles.form_label}
            >
              Email
            </label>
            <input
              className={styles.email_input}
              type="email"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className={styles.form_label}
            >
              Message
            </label>
            {/* <form ref={form} onSubmit={sendEmail}> */}
            <form>
              <textarea
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Add message here"
              ></textarea>
              <button>SUBMIT</button>
              {/* <ToastContainer /> */}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
