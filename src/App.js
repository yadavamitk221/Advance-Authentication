import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SigninPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";
import ForgerPasswordPage from "./pages/auth/ResetPasswordPage";
import HomePage from "./pages/Home/HomePage";
import Protected from "./auth/components/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <HomePage />
      </Protected>
    ),
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
