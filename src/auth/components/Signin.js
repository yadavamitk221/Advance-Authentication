// Library imports
import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

// File Imports
import { clearAuthError, loginUserAsync, selectAuthError } from "../authSlice";
import { signinSchema } from "./schemas/authSchema";

function Signin() {
  // Redux state and dispatch
  const authError = useSelector(selectAuthError);
  const dispatch = useDispatch();

  // Local state for password visibility toggle
  const [visible, setVisible] = useState(false);

  // Formik setup
  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signinSchema,
    onSubmit: (values, action) => {
      // Dispatch clearAuthError before attempting login
      dispatch(clearAuthError());
      // Dispatch loginUserAsync to handle login logic
      dispatch(loginUserAsync(values));
      // Reset the form after submission
      action.resetForm();
    },
  });

  // Destructuring values and methods from formik
  const { handleBlur, handleSubmit, handleChange, values, errors, touched } = formik;

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto mt-10 h-16 w-auto rounded-xl"
            src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
            alt="Your Company"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && touched.email ? (
                  <p className="text-red-500">{errors.email}</p>
                ) : null}
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to={"/forget-password"}
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2 border-2 border-grey rounded-md">
                <div className="flex items-center">
                  <div className="flex-1">
                    <input
                      id="password"
                      name="password"
                      type={visible ? "text" : "password"}
                      autoComplete="new-password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full rounded-md border-transparent py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div
                    onClick={() => setVisible(!visible)}
                    className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-md ml-2"
                  >
                    {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </div>
                </div>
              </div>
              {errors.password && touched.password ? (
                <p className="text-red-500">{errors.password}</p>
              ) : null}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* Display Authentication Error */}
          {authError && <p className="text-red-500">{authError.error}</p>}

          {/* Signup Link */}
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/Signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
