import React, { useState } from "react";
import { connectWallet } from "../services/blockchain";

function WalletConnect() {
  const [wallet, setWallet] = useState("");

  const handleConnect = async () => {
    try {
      const signer = await connectWallet();

      if (!signer) return;

      const address = await signer.getAddress();

      setWallet(address);
    } catch (err) {
      console.error(err);
      alert("Failed to connect wallet");
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <h2>Wallet</h2>

      <button onClick={handleConnect}>Connect MetaMask</button>

      <p>
        <strong>Address:</strong>{" "}
        {wallet || "Wallet not connected"}
      </p>
    </div>
  );
}

export default WalletConnect;