// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Staking {

    struct Stake {
        uint256 amount;
        uint256 startTime;
        bool active;
    }

    mapping(address => Stake) public stakes;

    event Staked(
        address indexed user,
        uint256 amount
    );

    event Unstaked(
        address indexed user,
        uint256 amount,
        uint256 reward
    );

    // Stake ETH
    function stake() external payable {
        require(msg.value > 0, "Send ETH to stake");
        require(!stakes[msg.sender].active, "Already staking");

        stakes[msg.sender] = Stake({
            amount: msg.value,
            startTime: block.timestamp,
            active: true
        });

        emit Staked(msg.sender, msg.value);
    }

    // Calculate reward (1% per day)
    function calculateReward(address user)
        public
        view
        returns (uint256)
    {
        Stake memory s = stakes[user];

        if (!s.active) {
            return 0;
        }

        uint256 stakingTime = block.timestamp - s.startTime;

        uint256 reward = (s.amount * stakingTime) / (100 * 1 days);

        return reward;
    }

    // Unstake ETH and receive reward
    function unstake() external {

        Stake storage s = stakes[msg.sender];

        require(s.active, "No active stake");

        uint256 reward = calculateReward(msg.sender);
        uint256 totalAmount = s.amount + reward;

        require(
            address(this).balance >= totalAmount,
            "Insufficient contract balance"
        );

        s.active = false;
        s.amount = 0;
        s.startTime = 0;

        payable(msg.sender).transfer(totalAmount);

        emit Unstaked(msg.sender, totalAmount, reward);
    }

    // View your stake
    function myStake()
        external
        view
        returns (
            uint256 amount,
            uint256 startTime,
            bool active,
            uint256 reward
        )
    {
        Stake memory s = stakes[msg.sender];

        return (
            s.amount,
            s.startTime,
            s.active,
            calculateReward(msg.sender)
        );
    }

    // Deposit ETH into contract for rewards
    receive() external payable {}
}