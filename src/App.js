import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SigninPage from "./pages/authPages/SigninPage";
import SignupPage from "./pages/authPages/SignupPage";
import ForgerPasswordPage from "./pages/authPages/ResetPasswordPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SigninPage />,
  },
  {
    path: "/login",
    element: <SigninPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/forget-password",
    element: <ForgerPasswordPage />,
  },
]);

function App() {
  return <div className="App">{<RouterProvider router={router} />}</div>;
}

export default App;
