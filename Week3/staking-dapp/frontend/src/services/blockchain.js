import { BrowserProvider, Contract, parseEther } from "ethers";

const CONTRACT_ADDRESS = "0x1157Ec1f5Dee6beCe06C94A4112ae6aFaB18b53c";
const ABI=[
{
"inputs":[],
"name":"stake",
"outputs":[],
"stateMutability":"payable",
"type":"function"
},
{
"inputs":[],
"name":"unstake",
"outputs":[],
"stateMutability":"nonpayable",
"type":"function"
},
{
"inputs":[
{
"internalType":"address",
"name":"user",
"type":"address"
}
],
"name":"calculateReward",
"outputs":[
{
"internalType":"uint256",
"name":"",
"type":"uint256"
}
],
"stateMutability":"view",
"type":"function"
},
{
"inputs":[],
"name":"myStake",
"outputs":[
{"internalType":"uint256","name":"amount","type":"uint256"},
{"internalType":"uint256","name":"startTime","type":"uint256"},
{"internalType":"bool","name":"active","type":"bool"},
{"internalType":"uint256","name":"reward","type":"uint256"}
],
"stateMutability":"view",
"type":"function"
}
];

async function getContract(){

    if(!window.ethereum){

        throw new Error("Install MetaMask");

    }

    const provider=new BrowserProvider(window.ethereum);

    await provider.send("eth_requestAccounts",[]);

    const signer=await provider.getSigner();

    return new Contract(CONTRACT_ADDRESS,ABI,signer);

}

export async function connectWallet(){

    const provider=new BrowserProvider(window.ethereum);

    const accounts=await provider.send("eth_requestAccounts",[]);

    return accounts[0];

}

export async function stake(amount){

    const contract=await getContract();

    const tx=await contract.stake({

        value:parseEther(amount)

    });

    await tx.wait();

    return tx.hash;

}

export async function unstake(){

    const contract=await getContract();

    const tx=await contract.unstake();

    await tx.wait();

    return tx.hash;

}