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


const mintNFT = (name, eyeColor, shirtType, bling )=> {

    const NFT ={
        "id": NFTs.length+1,
        "name":name,
        "eyeColor":eyeColor,
        "shirtType":shirtType,
        "bling":bling
    }

    NFTs.push(NFT)
    console.log("Minted NFT :"+ NFT.name)
}


mintNFT("Bob","Brown","Over Coat","Fossil Watch")
mintNFT("Alice","Green","Scarlet Gown","Necklace")
mintNFT("Chad","Black","T-Shirt","Beige Hat")




// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs () {
    for(let i in NFTs){
        console.log("ID :\t\t"+NFTs[i].id)
        console.log("name :\t\t"+NFTs[i].name)
        console.log("Eye Color :\t"+NFTs[i].eyeColor)
        console.log("Shirt Type :"+NFTs[i].shirtType)
        console.log("Bling :\t\t"+NFTs[i].bling+"\n")
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("The total number of NFTs minted: "+ NFTs.length)
}






// call your functions below this line

listNFTs()
getTotalSupply()
