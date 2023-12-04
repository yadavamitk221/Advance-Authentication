import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { forgetPasswordSchema } from "./schemas/authSchema";
import { Link } from "react-router-dom";

function ForgetPassword() {
  const [visible, setVisible] = useState(false);

  const initialValues = {
    new_password: "",
    confirm_password: "",
  };

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: forgetPasswordSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

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
            Reset Your Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div>
                <label
                  htmlFor="new_password"
                  className="block text-sm font-medium leading-6 text-gray-900 "
                >
                  New Password
                </label>
              </div>
              <div className="mt-2 border-2 border-grey rounded-md">
                <div className="flex items-center">
                  <div className="flex-1">
                    <input
                      id="new_password"
                      type={visible ? "text" : "password"}
                      autoComplete="new-password"
                      name="new_password"
                      value={values.new_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full rounded-md border-transparent py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 "
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
              {errors.new_password && touched.new_password ? (
                <p className="text-red-500 text-sm mt-1">
                  {errors.new_password}
                </p>
              ) : null}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm_password"
                  autoComplete="new-password"
                  type="password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirm_password}
                  </p>
                ) : null}
              </div>
            </div>

    

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Go Back to{" "}
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgetPassword;
