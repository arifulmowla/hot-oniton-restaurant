import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo2.png";
import "./register.css";

// firebsase

import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../../firebaseConfig";
firebase.initializeApp(firebaseConfig);

const Register = () => {
  const { register, handleSubmit, errors } = useForm();

  const [signInError, setSingInError] = useState("");

  const histroy = useHistory();
  const onSubmit = (data) => {
    console.log(data);

    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        if (result) {
          result.user
            .updateProfile({
              displayName: data.name,
            })
            .then((s) => console.log(s));
          histroy.push("/checkout");
        }
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        setSingInError(errorMessage);
        // ...
      });
  };
  return (
    <div>
      <div className="register">
        <div className="register-form">
          <img src={logo} alt="" />

          <form onSubmit={handleSubmit(onSubmit)}>
            {signInError && <span className="text-danger">{signInError}</span>}
            <div className="form-group">
              <input
                name="name"
                ref={register({ required: true })}
                className="form-control"
                placeholder="name"
              />
              {errors.name && (
                <span className="text-left">This field is required</span>
              )}
            </div>
            <div className="form-group">
              <input
                name="email"
                ref={register({ required: true })}
                className="form-control"
                placeholder="email"
              />
              {errors.email && (
                <span className="text-left">This field is required</span>
              )}
            </div>
            <div className="form-group">
              <input
                name="password"
                ref={register({ required: true })}
                className="form-control"
                placeholder="password"
              />
              {errors.password && (
                <span className="text-left">This field is required</span>
              )}
            </div>
            <div className="form-group">
              <input
                name="confirmPassword"
                ref={register({ required: true })}
                className="form-control"
                placeholder="confirmPassword"
              />
              {errors.confirmPassword && (
                <span className="text-left">This field is required</span>
              )}
            </div>
            <div className="form-group">
              <input type="submit" className="btn-color" value="Register" />
            </div>
          </form>
          <Link to="/login" className="text-color">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
