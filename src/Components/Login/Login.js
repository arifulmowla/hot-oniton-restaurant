import React, { useContext, useState } from "react";
import logo from "../../images/logo2.png";
import { useForm } from "react-hook-form";
import "./login.css";
import { Link, useHistory } from "react-router-dom";

// firebsase

import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../../firebaseConfig";
import { UserContext } from "../../App";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const [lognError, setLoginError] = useState("");

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);

    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        if (result) {
          const { displayName, email } = result.user;
          const signInUser = {
            name: displayName,
            email,
            isAuthenticated: true,
          };

          setLoggedInUser(signInUser);
          console.log("login", loggedInUser, result.user);
          history.push("/checkout");

          console.log(result.user);
        }
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        setLoginError(errorMessage);
        // ...
      });
  };
  return (
    <div>
      <div className="login">
        <div className="login-form">
          <img src={logo} alt="" />

          <form onSubmit={handleSubmit(onSubmit)}>
            {lognError && <span className="text-danger">{lognError}</span>}
            <div className="form-group">
              <input
                name="email"
                ref={register({ required: true })}
                className="form-control"
                type="email"
                placeholder="Enter your email"
              />
              {errors.username && (
                <span className="text-left">This field is required</span>
              )}
            </div>
            <div className="form-group">
              <input
                name="password"
                ref={register({ required: true })}
                type="password"
                className="form-control"
                placeholder="Password"
              />
              {errors.password && (
                <span className="text-left">This field is required</span>
              )}
            </div>
            <div className="form-group">
              <input type="submit" className="btn-color" value="Login" />
            </div>
          </form>
          <Link to="/register" className="text-color">
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
