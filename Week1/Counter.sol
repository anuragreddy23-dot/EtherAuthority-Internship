// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;
contract Counter {
    uint256 public count; 
constructor(){
    count =0;
}

function increment() public{
    count+=1;
}
function decrement() public {
    require(count>0," count cant be less than 0");
    count-=1;
}
function reset() public{
    count=0;
}
function getcount() public view returns(uint256){
    return count;
}
}
