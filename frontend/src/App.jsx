import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Todo />
    </>
  );
}

export default App;
