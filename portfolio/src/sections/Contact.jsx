import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const form = useRef();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const AUTO_REPLY_TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const validateEmail = (email) =>
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("");
    setNameError("");
    setEmailError("");
    setMessageError("");

    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required.");
      isValid = false;
    }
    if (!email.trim()) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format.");
      isValid = false;
    }
    if (!message.trim()) {
      setMessageError("Message is required.");
      isValid = false;
    }

    if (!isValid) {
      setStatusMessage("Please correct the errors.");
      return;
    }

    setStatusMessage("Sending...");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      async () => {
        setStatusMessage("Message sent successfully!");

        if (AUTO_REPLY_TEMPLATE_ID) {
          await emailjs.send(
            SERVICE_ID,
            AUTO_REPLY_TEMPLATE_ID,
            { email, to_name: name },
            PUBLIC_KEY
          );
        }

        setName("");
        setEmail("");
        setMessage("");
      },
      () => {
        setStatusMessage("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <section id="contact" className="py-40 bg-[#F6F1EB] text-gray-800">
      <div
        ref={ref}
        className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT TEXT */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Get in touch
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            Have a question, opportunity, or project in mind? Feel free to
            reach out — I’m always open to meaningful conversations.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          variants={rightVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={form}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm p-8"
        >
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none ${
                nameError ? "border-red-500" : "border-gray-300"
              }`}
            />
            {nameError && (
              <p className="text-sm text-red-500 mt-1">{nameError}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none ${
                emailError ? "border-red-500" : "border-gray-300"
              }`}
            />
            {emailError && (
              <p className="text-sm text-red-500 mt-1">{emailError}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none ${
                messageError ? "border-red-500" : "border-gray-300"
              }`}
            />
            {messageError && (
              <p className="text-sm text-red-500 mt-1">{messageError}</p>
            )}
          </div>

          {statusMessage && (
            <p className="text-center text-sm mb-4 text-gray-600">
              {statusMessage}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
