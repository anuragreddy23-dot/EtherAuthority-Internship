// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract SimpleVoting {
    address public owner;
    string[] public candidates;
    mapping(string => uint256) public votes;
    mapping(address => bool) public hasVoted;

    event CandidateAdded(string candidate);
    event Voted(address indexed voter, string candidate);

    constructor(string[] memory _candidates) {
        owner = msg.sender;
        for (uint i = 0; i < _candidates.length; i++) {
            candidates.push(_candidates[i]);
            votes[_candidates[i]] = 0;
            emit CandidateAdded(_candidates[i]);
        }
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not contract owner");
        _;
    }

    function vote(string memory candidate) public {
        require(!hasVoted[msg.sender], "Already voted");
        require(validCandidate(candidate), "Invalid candidate");

        votes[candidate] += 1;
        hasVoted[msg.sender] = true;
        emit Voted(msg.sender, candidate);
    }

    function validCandidate(string memory candidate) internal view returns (bool) {
        for (uint i = 0; i < candidates.length; i++) {
            if (keccak256(abi.encodePacked(candidates[i])) == keccak256(abi.encodePacked(candidate))) {
                return true;
            }
        }
        return false;
    }

    function getVotes(string memory candidate) public view returns (uint256) {
        return votes[candidate];
    }

    function getAllCandidates() public view returns (string[] memory) {
        return candidates;
    }
}

