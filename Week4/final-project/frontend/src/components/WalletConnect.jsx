import { useState } from "react";
import { ethers } from "ethers";

export default function WalletConnect({ setProvider, setSigner, setAccount }) {
    const [connected, setConnected] = useState(false);

    const connectWallet = async () => {
        try {
            if (!window.ethereum) {
                alert("Please install MetaMask.");
                return;
            }

            await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const account = await signer.getAddress();

            setProvider(provider);
            setSigner(signer);
            setAccount(account);

            setConnected(true);
        } catch (error) {
            console.error(error);
            alert("Wallet connection failed.");
        }
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            {connected ? (
                <h3>Connected Wallet</h3>
            ) : (
                <button onClick={connectWallet}>
                    Connect MetaMask
                </button>
            )}
        </div>
    );
}