// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;
contract SimpleStorage{
    uint256 private store;
    function set(uint256  _num) public {
        store=_num;
    }
    function get() public view returns(uint256){
        return store;
    }
    
}
