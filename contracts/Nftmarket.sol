// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <=0.9.0;
import "@openzeppelin/contracts/utils/Counters.sol"; // using as a counter whit keep track of id and counter
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; // Using ERC721 standard
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Nftmarket is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
     Counters.Counter private _tokenSold;
   address payable public owner;
   uint tax = 2;
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

  function mintToken(string memory _tokenURI,uint _price) public payable returns (uint){

     _tokenIds.increment();
     uint temp_id = _tokenIds.current();
     _mint(msg.sender,temp_id);
     _setTokenURI(temp_id,_tokenURI);
     // once the user has minted the token , the user needs to list it on the market plae
     //then the ownership changes to the contract
     createToken(temp_id,_price);
    return temp_id;
  }

  function createToken(uint _tokenId,uint _price) public payable{
    require(_price>0, "Price must be greater than zero");
    require(msg.value == tax,"Please pay the listing price");
    TokenDetails[_tokenId] = TokenDetail(
    _tokenId,
    _price,
    payable(address(this)),
    payable(msg.sender),
    false
    );


     _transfer(msg.sender, address(this), _tokenId);
     owner.transfer(tax);

  }

function sellToken(uint _tokenId) public payable{
    require(msg.sender == TokenDetails[_tokenId].owner, "Only owner of the token can call the function");
    require(TokenDetails[_tokenId].price > msg.value,"Please pay the purchasing price");
    _transfer(TokenDetails[_tokenId].owner,msg.sender, _tokenId);
    TokenDetails[_tokenId].owner = payable(msg.sender);
    TokenDetails[_tokenId].exists = false;
    _tokenSold.increment();
    TokenDetails[_tokenId].seller.transfer(msg.value);

  }



}
