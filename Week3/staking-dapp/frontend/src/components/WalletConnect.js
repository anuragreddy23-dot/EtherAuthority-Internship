import { useState } from "react";
import { connectWallet } from "../services/blockchain";

function WalletConnect(){

    const [account,setAccount]=useState("");

    async function connect(){

        try{

            const acc=await connectWallet();

            setAccount(acc);

        }
        catch(err){

            alert(err.message);

        }

    }

    return(

        <div className="card">

            <h2>Wallet</h2>

            <button onClick={connect}>
                Connect MetaMask
            </button>

            <p>{account}</p>

        </div>

    );

}

export default WalletConnect;