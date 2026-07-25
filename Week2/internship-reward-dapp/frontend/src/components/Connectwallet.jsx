import { useState } from "react";
import { BrowserProvider } from "ethers";

function ConnectWallet() {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask.");
        return;
      }

      const provider = new BrowserProvider(window.ethereum);

      const accounts = await provider.send("eth_requestAccounts", []);

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
      alert("Failed to connect wallet.");
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {account ? (
        <>
          <h3>Wallet Connected</h3>
          <p>{account}</p>
        </>
      ) : (
        <button onClick={connectWallet}>
          Connect MetaMask
        </button>
      )}
    </div>
  );
}

export default ConnectWallet;