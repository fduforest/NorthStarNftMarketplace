// SPDX-License-Identifier: MIT

pragma solidity 0.8.13;
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/// @title An OpenSea clone
/// @author François Duforest
/// @notice Use this contract for only the most basic simulation
/// @dev Contract still under development

contract NFTMarketplace is ERC721URIStorage, Ownable {

}
