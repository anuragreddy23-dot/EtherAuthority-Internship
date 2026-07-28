import { unstake } from "../services/blockchain";

function Unstake(){

    async function handle(){

        try{

            const hash=await unstake();

            alert("Unstake Successful\n"+hash);

        }
        catch(err){

            alert(err.message);

        }

    }

    return(

        <div className="card">

            <h2>Withdraw</h2>

            <button onClick={handle}>
                Unstake
            </button>

        </div>

    );

}

export default Unstake;