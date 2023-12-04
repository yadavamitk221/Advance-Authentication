import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  name: Yup.string().min(2).max(25).required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
    `- at least 8 characters\n
    - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number \n
    - Can contain special characters`
  ).required("Password is required"),
  confirm_password: Yup.string()
    .oneOf(
      [Yup.ref("password")],
      "Password and confirm password must be same"
    )
    .required("Confirm Password is required"),
});

export const signinSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"), 
    password: Yup.string().required("Password is required"), 
  });

  export const forgetPasswordSchema = Yup.object().shape({
    new_password: Yup.string().matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
      `- at least 8 characters\n
      - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number \n
      - Can contain special characters`
    ).required("Password is required"),
    confirm_password: Yup.string()
      .oneOf(
        [Yup.ref("new_password")],
        "Password and confirm password must be same"
      )
      .required("Confirm Password is required"),
  });
