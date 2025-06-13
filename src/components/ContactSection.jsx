import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [firstName, ...rest] = formData.fullName.split(" ");
    const lastName = rest.join(" ");

    try {
      const res = await fetch("https://animated-portfolio-backend.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully.");
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h1 className="section-title autoDisplay">Let's connect:</h1>

      <div className="social-box autoBlur">
        <a href="#"><i className="bx bxs-phone"></i> +234 911 835 5953</a>
        <a href="#"><i className="bx bxl-telegram"></i>@Femik84</a>
        <a href="#"><i className="bx bxl-twitter"></i>@Mr_Fe_mi</a>

        <div className="social-icons">
          <a href="https://github.com/Femik84" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://wa.me/2347051342759" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a href="https://twitter.com/Mr_Fe_mi" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
      </div>

      <form className="contact-box autoBlur" onSubmit={handleSubmit}>
        <p>Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.</p>

        <p>Full Name</p>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Your Full Name"
          type="text"
          required
        />

        <p>Email Address</p>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          type="email"
          required
        />

        <p>Your Message</p>
        <input
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input-message"
          placeholder="Share your thoughts..."
          rows={4}
          required
        />

        <button type="submit">
          Send Message <i className="bx bx-mail-send"></i>
        </button>

        {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
      </form>
    </section>
  );
}
