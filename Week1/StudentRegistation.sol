// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract StudentRegistration {
    address private _owner;

    struct Student {
        string name;
        uint256 age;
        string course;
        bool registered;
    }

    mapping(address => Student) private students;

    event StudentRegistered(address indexed studentAddress, string name, string course);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

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

    // Register a student
    function registerStudent(string memory _name, uint256 _age, string memory _course) public {
        require(!students[msg.sender].registered, "Already registered");
        students[msg.sender] = Student(_name, _age, _course, true);
        emit StudentRegistered(msg.sender, _name, _course);
    }

    // View student details
    function getStudent(address _studentAddress) public view returns (string memory, uint256, string memory, bool) {
        Student memory s = students[_studentAddress];
        return (s.name, s.age, s.course, s.registered);
    }
}

