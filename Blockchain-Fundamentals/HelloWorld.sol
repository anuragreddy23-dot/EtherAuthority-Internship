// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;
contract Helloworld{
    string public message;
    constructor(){
        message="Hello World ";

    }
    function setmsg(string calldata newMessage) public{
        message =newMessage;
    }
    function getmsg()public view returns (string memory){
        return message;
    }
}
