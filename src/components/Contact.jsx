import React, { useState, useEffect } from "react";

function Contact() {
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = (formData) => {
    const newErrors = {};
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    if (!name || name.length < 2) newErrors.name = "Name must be at least 2 characters";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email";
    if (!message || message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    return newErrors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setResult("Sending...");

    formData.append("access_key", "e402ded1-0edd-4e56-a14e-948b17669652");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("🎉 Congrats! Form Submitted Successfully");
        setSuccess(true); // Mark success
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong!");
        setSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setResult("Something went wrong! Please try again.");
      setSuccess(false);
    }
  };
  // Auto-refresh page after 30 seconds if submission successful
  useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        window.location.reload();
      }, 2000); // 30 seconds
    }
    return () => clearTimeout(timer);
  }, [success]);

  return (
    <section className="contact-container" id="contact">
      <h1>Contact Me</h1>
      <div className="contact">
        <div className="contact-info">
          <p><strong>Email:</strong> naveennani2605@gmail.com</p>
          <p><strong>Phone:</strong> +91 741-6990625</p>
          <p><strong>Location:</strong> Hyderabad, India</p>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}

          <input type="email" name="email" placeholder="Your Email" />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}

          <textarea name="message" rows="5" placeholder="Your Message" />
          {errors.message && <span style={{ color: "red" }}>{errors.message}</span>}

          <button type="submit">Send Message</button>
          {result && <p style={{ marginTop: "10px" }}>{result}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
