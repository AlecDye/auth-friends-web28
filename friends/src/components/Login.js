import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [login, setLogin] = useState({
    credentials: {
      username: "",
      password: ""
    }
  });
  const handleChanges = e => {
    e.preventDefault();
    setLogin({
      credentials: {
        ...login.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  const handleLogin = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("login", login.credentials)
      .then(res => {
        // console.log(res)
        window.localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => console.error(err));
  };
  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        name="username"
        value={login.credentials.username}
        onChange={handleChanges}
      />
      <input
        type="password"
        name="password"
        value={login.credentials.password}
        onChange={handleChanges}
      />
      <button>Log In</button>
    </form>
  );
};

export default Login;
