// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract AttendanceToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("Attendance Token", "ATN") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }
    // ... rest of the code
    // Mint new tokens (only owner)
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Burn tokens (only owner)
    function burn(address from, uint256 amount) public onlyOwner {
        _burn(from, amount);
    }
}

