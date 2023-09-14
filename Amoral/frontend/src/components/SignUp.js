import React from "react";
import "./Login.css";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // Check the username, email, and password

    // If the username, email, and password are valid, create a new user account
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="username" placeholder="Username" value={username} onChange={setUsername} />
      <input type="email" name="email" placeholder="Email" value={email} onChange={setEmail} />
      <input type="password" name="password" placeholder="Password" value={password} onChange={setPassword} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;