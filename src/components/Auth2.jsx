import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { addAccount } from "../features/accounts/thunks";

export default function (props) {
  let [authMode, setAuthMode] = useRef("signin")
  // const refFName = useRef();
  // const refLName = useRef();
  // const refEmail = useRef();
  const [refFName, setFName] = useState([]);
  const [refLName, setLName] = useState([]);
  const [refEmail, setEmail] = useState([]);
  // const [fname, setFName] = useState('');
  // const [numberType, setNumberType] = useState('')
  const dispatch = useDispatch();
  const goBack = useNavigate();
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            {/* <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p> */}
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control mt-1 fname"
              placeholder="e.g Jane"
             onChangeText={(text) => this.setFName({fname: text})} value={this.state.fname}
              // ref={refFName}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mt-1 lname"
              placeholder="e.g Do"
              ref={refLName}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1 email"
              placeholder="Email Address"
              ref={refEmail}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary"
            onClick={() => dispatch(addAccount({ email: refEmail.current.value , firstName: refFName.current.value , lastName: refLName.current.value }))}>
              Submit
            </button>
          </div>
          {/* <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
    </div>
  )
}