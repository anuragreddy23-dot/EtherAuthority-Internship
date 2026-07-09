// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract AccountOwnership {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event EtherReceived(address indexed from, uint256 amount);

    constructor() {
        _owner = msg.sender; // deployer becomes initial owner
        emit OwnershipTransferred(address(0), _owner);
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "Not contract owner");
        _;
    }

    function owner() public view returns (address) {
        return _owner;
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Invalid address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }

    // Allow contract to receive Ether
    receive() external payable {
        emit EtherReceived(msg.sender, msg.value);
    }

    // Withdraw balance (only owner)
    function withdraw() public onlyOwner {
        payable(_owner).transfer(address(this).balance);
    }

    // Check contract balance
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}

