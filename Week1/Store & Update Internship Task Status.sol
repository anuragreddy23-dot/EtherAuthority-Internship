// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract InternshipTasks {
    address private _owner;

    struct Task {
        string description;
        string status; // e.g., "Pending", "In Progress", "Completed"
        bool exists;
    }

    mapping(uint256 => Task) private tasks;
    uint256 private taskCounter;

    event TaskCreated(uint256 taskId, string description, string status);
    event TaskUpdated(uint256 taskId, string newStatus);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor() {
        _owner = msg.sender;
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

    // Create a new internship task
    function createTask(string memory _description) public onlyOwner {
        taskCounter++;
        tasks[taskCounter] = Task(_description, "Pending", true);
        emit TaskCreated(taskCounter, _description, "Pending");
    }

    // Update task status
    function updateTaskStatus(uint256 _taskId, string memory _newStatus) public onlyOwner {
        require(tasks[_taskId].exists, "Task does not exist");
        tasks[_taskId].status = _newStatus;
        emit TaskUpdated(_taskId, _newStatus);
    }

    // View task details
    function getTask(uint256 _taskId) public view returns (string memory, string memory, bool) {
        Task memory t = tasks[_taskId];
        return (t.description, t.status, t.exists);
    }
}

