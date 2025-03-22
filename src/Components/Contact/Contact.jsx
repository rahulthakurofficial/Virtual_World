import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../../utils/motion";
// import styles from "./Contact.module.scss";
import "../../styles.scss"; 


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_ba86wds',
        'template_82ct9ps',
        {
          from_name: form.name,
          to_name: "Priyansh Negi",
          from_email: form.email,
          to_email: "priyansh.negiji@gmail.com",
          message: form.message,
        },
        'h3KKxdGO6oM1Cm55j'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={styles.container}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className={styles.formContainer}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            <span>Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your good name?" className={styles.input} />
          </label>
          <label className={styles.label}>
            <span>Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your web address?" className={styles.input} />
          </label>
          <label className={styles.label}>
            <span>Your Message</span>
            <textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder="What you want to say?" className={styles.textarea} />
          </label>

          <button type="submit" className={styles.button}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className={styles.earthContainer}>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");