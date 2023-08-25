import React, { useState } from "react";

export const HeadRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username,setUsername] = useState("");
  const [fullname,setFullname] = useState("");


  const handleSubmit = (e) => {
    
  }


  return (
    <div>
      Registration
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="register-email"
          value={email}
          placeholder = "Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="string"
          id="register-fullname"
          value={fullname}
          placeholder = "Enter Fullname"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="string"
          id="register-username"
          value={username}
          placeholder = "Enter Username"
          onChange={(e) => setFullname(e.target.value)}
        />
        <input
          type="password"
          id="register-password"
          value={password}
          placeholder = "Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" />
      </form>
    </div>
  );
};
