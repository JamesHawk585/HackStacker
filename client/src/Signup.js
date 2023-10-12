import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import React from "react";
import "./style.css";
import { Formik, Form, ErrorMessage } from "formik";
import TextField from "./components/TextField";
import * as Yup from "yup";

// function SignUpForm({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");
//   const [bio, setBio] = useState("");
//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setErrors([]);
//     setIsLoading(true);
//     fetch("/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username,
//         password,
//         password_confirmation: passwordConfirmation,
//         bio,
//       }),
//     }).then((r) => {
//       setIsLoading(false);
//       if (r.ok) {
//         r.json().then((user) => onLogin(user));
//       } else {
//         r.json().then((err) => setErrors(err.errors));
//       }
//     });
//   }

import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import React from "react";
import "./style.css";
import { Formik, Form, ErrorMessage } from "formik";
import TextField from "./components/TextField";
import * as Yup from "yup";

export default function SignUpForm() {
    const validate = Yup.object({
      firstName: Yup.string().required("Firstname Required!"),
      lastName: Yup.string(),
      email: Yup.string().email("Email is invalid!").required("Email Required!"),
      password: Yup.string()
        .min(4, "Password must be minimum 4 digits!")
        .required("Password Required!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match!")
        .required("Confirm password is reqired!"),
      age: Yup.number()
        .min(14, "Age must be minimum 14 Years!")
        .required("Age must be required!"),
    });
  
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formik) => (
          <div>
            <h1 className="">Signup</h1>
            <Form className="form p-3">
              <TextField
                type="text"
                label="Firstname"
                name="firstName"
                placeholder="Lorem"
              />
              <TextField
                type="text"
                name="lastName"
                label="Lastname"
                placeholder="Ipsum"
              />
              <TextField
                type="email"
                name="email"
                label="Email"
                placeholder="loremipsum@gmail.com"
              />
              <TextField
                type="text"
                name="password"
                label="Password"
                placeholder="qwert@123"
              />
              <div className="mb-2">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  className={`form-control shadow-none ${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword &&
                    "is-invalid"
                  }`}
                  type="text"
                  name="confirmPassword"
                  placeholder="confirm password..."
                  {...formik.getFieldProps("confirmPassword")}
                />
                <ErrorMessage
                  component="div"
                  name="confirmPassword"
                  className="error"
                />
              </div>
              <TextField
                type="number"
                name="age"
                label="Age"
                placeholder="19"
              />
              <button className="btn btn-dark m-3" type="submit">
                Register
              </button>
              <button className="btn btn-primary m-3" type="reset">
                Reset
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    confirmPassword: "",
  };
  
//   Use React Bootstrap
  
