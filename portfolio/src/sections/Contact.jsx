import React, { useState, useRef } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"; // Import social icons
import emailjs from "@emailjs/browser"; // Import emailjs

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const form = useRef();

  // Replace with your actual EmailJS service ID, template ID, and public key
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setStatusMessage("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.log(error.text);
        setStatusMessage("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <section
      id="contact"
      className="py-20 min-h-[50vh] bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-10">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name" // Updated to match EmailJS template variable
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email" // Updated to match EmailJS template variable
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message" // Important for EmailJS
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              {statusMessage && (
                <p className="text-center text-lg mb-4">{statusMessage}</p>
              )}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 block mx-auto"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 md:pl-10 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
            <p className="text-lg mb-2">Email: sujalmangar304@gmail.com</p>
            <p className="text-lg mb-2">Phone: +91 9339271036</p>
            <p className="text-lg mb-6">Location: Kalimpong, West Bengal</p>
            <h3 className="text-2xl font-semibold mb-4">Social Links</h3>
            {/* New social icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300"
              >
                <FaLinkedinIn className="text-2xl text-blue-600 hover:text-blue-400" />
              </a>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300"
              >
                <FaGithub className="text-2xl text-gray-300 hover:text-white" />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300"
              >
                <FaInstagram className="text-2xl text-pink-500 hover:text-pink-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
