// SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/// @title An OpenSea clone
/// @notice A simple NFT marketplace contract
/// @author François Duforest
/// @dev Marketplace Contract still under development

contract NFTMarketplace is ReentrancyGuard, Ownable, ERC721URIStorage {
    // using is used for including a library within a contract in solidity
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    mapping(string => uint8) hashes;
    address contractAddress;

    constructor(address marketplaceAddress)
        ERC721("MoonRocket Tokens ", "MORT")
    {
        contractAddress = marketplaceAddress;
        // owner = payable(msg.sender);
    }

    // ::::::::::::: MINT ::::::::::::: //

    /// @notice Function for allowing an address to mint an NFT & authorize the marketplace to transfer sold items from sender address to the buyer's address.
    /// @param _to The address of the voter
    /// @param _hash The CID hash
    /// @param _metadata The json metadata CID hash
    /// @return tokenId The NFT token id
    function mint(
        address _to,
        string memory _hash,
        string memory _metadata
    ) public returns (uint256) {
        // Check if the token has been already minted
        require(hashes[_hash] != 1);
        hashes[_hash] = 1;

        // Attribute a unique token Id
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();

        // Mint & set Token URI
        _mint(_to, tokenId);
        _setTokenURI(tokenId, _metadata);

        // Authorize the marketplace to transfer sold items from sender address to the buyer's address.
        setApprovalForAll(contractAddress, true);

        return tokenId;
    }
}
