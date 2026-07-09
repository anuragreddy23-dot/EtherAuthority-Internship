// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract EtherTransfer {
    address public owner;

    event Transfer(address indexed from, address indexed to, uint256 amount);

    constructor() {
        owner = msg.sender; // deployer becomes owner
    }

    // Function to send Ether to a recipient
    function sendEther(address payable recipient) public payable {
        require(msg.value > 0, "Must send some Ether");
        recipient.transfer(msg.value);
        emit Transfer(msg.sender, recipient, msg.value);
    }

    // Function to withdraw contract balance (only owner)
    function withdraw() public {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }

    // Check contract balance
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}

