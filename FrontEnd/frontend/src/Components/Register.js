import React, { useState } from "react";

export const Register = (props) => {
  const [username, setuserName] = useState("");
  const [userid, setid] = useState(""); //updates email
  const [password, SetPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlfor="username">userName</label>
        <input
          value={username}
          onChange={(e) => setuserName(e.target.value)}
          type="username"
          placeholder="yourusername"
        />
        <label htmlfor="userid">userID</label>
        <input
          value={userid}
          onChange={(e) => setid(e.target.value)}
          type="userid"
          placeholder="youruserid"
        />
        <label htmlfor="password">password</label>
        <input
          value={password}
          onChange={(e) => SetPass(e.target.value)}
          type="password"
          placeholder="*******"
        />
        <button className="register-btn" type="submit">
          Sign Up
        </button>
      </form>
      <button
        className="link-button"
        onClick={() => props.onFormSwitch("login")}
      >
        Already have an account? Login Here
      </button>
    </div>
  );
};
