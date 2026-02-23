import React, { useState, useEffect } from "react";
import './Contact.css';

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
            <h1>CONTACT ME</h1>
            <div className="contact">
                <div className="contact-info">

                    <h2>Let’s Connect</h2>

                    <p className="contact-desc">
                        Feel free to reach out to me for project discussions, collaborations,
                        internships, or any professional opportunities. I’m always open to
                        meaningful conversations and new ideas. You can directly contact me by clicking on email or phone number.
                    </p>

                    <div className="contact-details">

                        <p><strong>Email:</strong><a href="mailto:naveennani2605@gmail.com?subject=Contact%20From%20Portfolio&body=Hello%20I%20visited%20your%20website" target="_blank" className="email-link"> Naveennani2605@gmail.com</a></p>

                        <p><strong>Phone:</strong><a href="tel:7416990625" target="_blank" className="num-link"> +91 74169 90***</a></p>

                        <p><strong>Location:</strong> Gandi Maisamma Hyderabad, Telangana-500043</p>

                    </div>

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
