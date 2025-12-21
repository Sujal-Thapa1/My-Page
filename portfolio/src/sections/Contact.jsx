import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser"; // Import emailjs

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const form = useRef();

  // Replace with your actual EmailJS service ID, template ID, and public key
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage(""); // Clear previous status messages
    setNameError(""); // Clear previous errors
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
      className="py-20 min-h-[70vh] bg-gray-900 text-white relative overflow-hidden flex items-center justify-center rounded-3xl"
    >
      {/* Decorative Shape 1 */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-500 opacity-20 transform -translate-x-1/2 -translate-y-1/2 filter blur-3xl"></div>
      {/* Decorative Shape 2 */}
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-pink-500 opacity-20 transform translate-x-1/2 translate-y-1/2 filter blur-3xl"></div>

      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-center">
        {/* Left side: Message text */}
        <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-center md:text-left">
            Let's connect and create something new
          </h2>
        </div>

        {/* Right side: Contact Form */}
        <div className="md:w-1/2 md:pl-8">
          <form ref={form} onSubmit={handleSubmit} className="p-6 bg-gray-800 rounded-lg shadow-xl">
            <div className="mb-4">
                              <label
                                htmlFor="name"
                                className="block text-lg mb-2 text-white"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="from_name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`w-full p-3 rounded-md bg-gray-700 border ${nameError ? 'border-red-500' : 'border-gray-400'} focus:outline-none focus:border-blue-500 text-white`}
                                required
                              />
                              {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
                            </div>
                            <div className="mb-4">
                              <label
                                htmlFor="email"
                                className="block text-lg mb-2 text-white"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="from_email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full p-3 rounded-md bg-gray-700 border ${emailError ? 'border-red-500' : 'border-gray-400'} focus:outline-none focus:border-blue-500 text-white`}
                                required
                              />
                              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                            </div>
                            <div className="mb-4">
                              <label
                                htmlFor="message"
                                className="block text-lg mb-2 text-white"
                              >
                                Message
                              </label>
                              <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className={`w-full p-3 rounded-md bg-gray-700 border ${messageError ? 'border-red-500' : 'border-gray-400'} focus:outline-none focus:border-blue-500 text-white`}
                                required
                              ></textarea>
                              {messageError && <p className="text-red-500 text-sm mt-1">{messageError}</p>}
                            </div>
                            {statusMessage && (
                              <p className={`text-center text-lg mb-4 ${statusMessage.includes('Failed') ? 'text-red-500' : 'text-green-500'} text-white`}>
                                {statusMessage}
                              </p>
                            )}
                            <button
                              type="submit"
                              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 block mx-auto"
                            >
                              Send Message
                            </button>          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
