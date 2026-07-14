// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract InternshipCertificateNFT is ERC721, Ownable {

    uint256 public nextTokenId;

    constructor()
        ERC721("Internship Certificate", "ICERT")
        Ownable(msg.sender)
    {}

    function mintCertificate(address student) public onlyOwner {
        _safeMint(student, nextTokenId);
        nextTokenId++;
    }
}
