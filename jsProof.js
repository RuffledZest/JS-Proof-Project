/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

//Vibhansh Alok - 22BCS15573
// JS-Proof Project 1

// create a variable to hold your NFT's
const NFTs = []  //This NFTs array will store the Minted NFT along with it's metadata. 


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.


const mintNFT = (name, senderAddress, recieverAddress, bling)=> {

    const NFT ={
        "id": NFTs.length+1,
        "name":name,
        "senderAddress":senderAddress,
        "recieverAddress":recieverAddress,
        "bling":bling
    }

    NFTs.push(NFT)
    console.log("Minted NFT :"+ NFT.name)
}






// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs () {
    for(let i in NFTs){
        console.log("ID :\t\t\t\t"+NFTs[i].id)
        console.log("name :\t\t\t\t"+NFTs[i].name)
        console.log("Sender Address :\t"+NFTs[i].senderAddress)
        console.log("Reciever Address :\t"+NFTs[i].recieverAddress)
        console.log("Bling :\t\t\t\t"+NFTs[i].bling+"\n")
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("The total number of NFTs minted: "+ NFTs.length)
}


// call your functions below this line

mintNFT("Bob","0x4F77E56dfA40990349e1078e97AC3Eb479e0dAd8","0x4G77E56dfA40990349e1078e97AC3Eb479e0dCc6","Fossil Watch")
mintNFT("Alice","0x4R77E56dfA40990349e1078e97AC3Eb479e0dAc6","0x4Q77E56dfA40990349e1078e97AC3Eb479e0dFg9","Necklace")
mintNFT("Chad","0x4L77E56dfA40990349e1078e97AC3Eb479e0dGx7","0x4T77E56dfA40990349e1078e97AC3Eb479e0dRt1","Beige Hat")


listNFTs()

getTotalSupply()
