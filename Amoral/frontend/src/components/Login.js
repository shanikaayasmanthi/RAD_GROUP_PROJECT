import React from "react";
import "./Login.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // Check the username and password

    // If the username and password are valid, redirect the user to the home page
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="username" placeholder="Username" value={username} onChange={setUsername} />
      <input type="password" name="password" placeholder="Password" value={password} onChange={setPassword} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm