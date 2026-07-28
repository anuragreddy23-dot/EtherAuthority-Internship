import { useState } from "react";
import { stake } from "../services/blockchain";

function Stake(){

    const [amount,setAmount]=useState("");

    async function handleStake(){

        try{

            const hash=await stake(amount);

            alert("Stake Successful\n"+hash);

        }
        catch(err){

            alert(err.message);

        }

    }

    return(

        <div className="card">

            <h2>Stake ETH</h2>

            <input
            type="text"
            placeholder="Amount in ETH"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            />

            <button onClick={handleStake}>
                Stake
            </button>

        </div>

    );

}

export default Stake;