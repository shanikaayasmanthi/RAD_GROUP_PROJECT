import React from "react";
import "./ContactUs.css";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // Send the contact information to the server

    // Show the footer component
    const footer = document.createElement("div");
    footer.innerHTML = <Footer />;
    document.body.appendChild(footer);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Your name" value={name} onChange={setName} />
      <input type="email" name="email" placeholder="Your email" value={email} onChange={setEmail} />
      <textarea name="message" placeholder="Your message" value={message} onChange={setMessage} />
      <button type="submit">Submit</button>
    </form>
  );
};

const Footer = () => {
  return (
    <div>
      <p>Copyright © 2023</p>
      <p>All rights reserved.</p>
    </div>
  );
};

export default ContactUsForm