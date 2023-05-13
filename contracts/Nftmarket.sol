// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <=0.9.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Nftmarket {
    using Counters for Counters.Counter;
   address payable public owner;

   struct TokenDetail {
    uint id;
    uint price;
    address payable owner;
    address payable seller;
    bool exists;

   }

   event TokenCreated(
    uint id,
    uint price,
    address payable owner,
    address payable seller,
    bool exists

   );

   mapping(uint=>TokenDetail) TokenDetails;
   Counters.Counter private _tokengen;
   Counters.Counter private _tokensold;

//    constructor(){
//     owner = payable(msg.sender);
//    }

}
