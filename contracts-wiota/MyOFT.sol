// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import "./OFTVotesPermit.sol";

contract MyOFT is OFTVotesPermit {
    constructor(
        string memory _name,
        string memory _symbol,
        address _lzEndpoint,
        address _delegate
    ) OFTVotesPermit(_name, _symbol, _lzEndpoint, _delegate) {}
}
