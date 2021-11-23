const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Veg", "Hop", "Lucky"],       // Names
    ["https://imgur.com/4VrTgHj.gif", // Images
    "https://i.imgur.com/s97RKii.gif", 
    "https://i.imgur.com/B8OoEYq.gif"],
    [100, 200, 300],                    // HP values
    [100, 50, 25],                       // Attack damage values
    [10, 10, 5],                          // Immune system multiplier
    "the sick", // Boss name
    "https://i.imgur.com/40Bj6Dxb.jpg", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

   /* let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    // Get the value of the NFT's URI.
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);*/

    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #3");

   /* txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #2");

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #3");

    console.log("Done deploying and minting!");*/

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    console.log("Done!");

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
