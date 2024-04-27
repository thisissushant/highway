import {} from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>{" "}
    </>
  );
}

export default App;
