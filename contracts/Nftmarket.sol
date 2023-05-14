// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <=0.9.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Nftmarket is ERC721{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
   address payable public owner;
   uint tax = 2;
   struct TokenDetail {
    uint id;
    uint price;
    string tokenURI;
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

   modifier onlyOwner(){
    require(owner == msg.sender,"Only pwner of the smart contract can call this function");
    _;
   }

   mapping(uint=>TokenDetail) TokenDetails;
   

   constructor() ERC721("NFT Token","NFTT"){
    owner = payable(msg.sender);
   }

   function updateTax(uint _tax) public payable onlyOwner{
    tax = _tax;
   }

  function createToken(string memory _tokenURI,uint _price) public payable returns (uint){
     
     _tokenIds.increment();

     TokenDetail storage newToken = TokenDetails[_tokenIds];
     newToken.owner = owner;
     newToken.id = _tokenIds;
     newToken.price= _price;
     newToken.exists=true;
     newToken.tokenURI=_tokenURI;
     newToken.seller = owner;
  }


  function buyToken(uint _tokenId) public payable returns (uint){
     require(msg.value >= TokenDetails[_tokenId],"The amount is less than the token price");
     newToken.owner = payable(msg.sender);
     newToken.seller = payable(msg.sender);
  }

}
