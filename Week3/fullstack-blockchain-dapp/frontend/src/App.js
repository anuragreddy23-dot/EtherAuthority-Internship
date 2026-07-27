import React from "react";
import "./App.css";

import WalletConnect from "./components/WalletConnect";
import RegisterForm from "./components/RegisterForm";
import InternList from "./components/InternList";

function App() {
  return (
    <div className="container">
      <h1>Full Stack Blockchain DApp</h1>

      <WalletConnect />

      <RegisterForm />

      <InternList />
    </div>
  );
}

export default App;