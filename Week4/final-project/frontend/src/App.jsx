import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import WalletConnect from "./components/WalletConnect";
import CreateVesting from "./components/CreateVesting";
import ClaimTokens from "./components/ClaimTokens";
import VestingInfo from "./components/VestingInfo";

function App() {

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [account, setAccount] = useState("");

    return (
        <div className="App">

            <Navbar />

            <WalletConnect
                setProvider={setProvider}
                setSigner={setSigner}
                setAccount={setAccount}
            />

            {account && (
                <h3>
                    Connected:
                    <br />
                    {account}
                </h3>
            )}

            <CreateVesting signer={signer} />

            <ClaimTokens signer={signer} />

            <VestingInfo signer={signer} />

        </div>
    );
}

export default App;