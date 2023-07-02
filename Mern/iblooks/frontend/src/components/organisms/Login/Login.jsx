"use client";
import AnchorTag from "@/components/atoms/AnchorTag/AnchorTag";
import EventButton from "@/components/atoms/Button/EventButton";
import Checkbox from "@/components/atoms/Checkbox/Checkbox";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useUserLoginMutation } from "@/app/api/AdminLoginSlice/AdminLoginSlice";

const Login = () => {
  const [error, setError] = useState("");
  const [loginSlice] = useUserLoginMutation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (values) => {
    try {
      const { email, password } = values;
      const { data } = await loginSlice({ email, password }); // Call loginSlice as a function

      const token = data.token;
      localStorage.setItem("token", token);
      setIsLoggedIn(true); 
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      setError("Login failed");
    }
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoggedIn ? ( // Use isLoggedIn state for conditional rendering
        <div>
          <h1>Hello Admin</h1>
          {/* Render admin content */}
        </div>
      ) : (
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <Label htmlFor="email">Email</Label>
              <Field
                type="email"
                id="email"
                name="email"
                as={Input} // Use `as` prop instead of `component`
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Field
                type="password"
                id="password"
                name="password"
                as={Input} // Use `as` prop instead of `component`
              />
              <ErrorMessage name="password" component="div" />
            </div>

            <div>
              <Field
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                label="Remember me"
                component={Checkbox}
              />
            </div>
            <EventButton type="submit">Submit</EventButton>
          </Form>
        </Formik>
      )}
      <AnchorTag href="/reset-password" children="Forgot Password" />
    </div>
  );
};

export default Login;
