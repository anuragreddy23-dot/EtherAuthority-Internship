// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract VestingToken is ERC20, Ownable {
    constructor(address initialOwner)
    ERC20("Vesting Token", "VEST")
    Ownable(initialOwner)
{
    _mint(initialOwner, 1000000 * 10 ** decimals());
}
function mint(address to, uint256 amount) public onlyOwner {
    _mint(to, amount);
}
}