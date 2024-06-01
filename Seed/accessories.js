const db = require('../DB')
const { Barbie, Accessory } = require('../Models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
    try {
        await Accessory.deleteMany({})
        console.log('All collection reset')
    } catch (error) {
        console.error('Error resetting collections:', error)
    }
}



const main = async () => {
    await resetCollections()
  const malibu = await Barbie.find({ name: "Malibu Barbie" })
  const dreamDate = await Barbie.find({ name: "Dream Date Barbie" })
  const totallyHair = await Barbie.find({ name: "Totally Hair 25th Anniversary" })
  const generationGirl = await Barbie.find({ name: "Generation Girl Barbie" })
  const rapunzel = await Barbie.find({ name: "Barbie as Rapunzel" })
  const fashionistaSweetie = await Barbie.find({ name: "Fashionista Sweetie Barbie" })
  
 
  const accessories = [
    
    // malibu barbie
    {
        name: "Malibu Barbie Sunglasses",
        type: "Glasses",
        color: "Blue",
        image: "./images/malibuGlasses.png",
        barbieID: malibu._id
    },
    {
        name: "Malibu Barbie Shoes",
        type: "Shoes",
        color: "Yellow",
        image: "./images/malibuShoes.png",
        barbieID: malibu._id
    },
    {
        name: "Malibu Barbie Book",
        type: "Hand",
        color: "Pink",
        image: "./images/malibuBook.png",
        barbieID: malibu._id
    },
    {
        name: "Malibu Barbie Towel",
        type: "Hand",
        color: "Yellow",
        image: "./images/malibuTowel.png",
        barbieID: malibu._id
    },
    // dream date barbie
    
    {
        name: "Dream Date Barbie Shoes",
        type: "Shoes",
        color: "Pink",
        image: "./images/dreamShoes.png",
        barbieID: dreamDate._id
    },
    {
        name: "Dream Date Barbie Mirror",
        type: "Hand",
        color: "Purple",
        image: "./images/dreamMirror.png",
        barbieID: dreamDate._id
    },
    {
        name: "Dream Date Barbie Brush",
        type: "Hair",
        color: "Purple",
        image: "./images/dreamBrush.png",
        barbieID: dreamDate._id
    },
    // totally hair 
    {
        name: "Totally Hair Barbie Haircomb",
        type: "Hair",
        color: "Pink",
        image: "./images/hairComb.png",
        barbieID: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Shoes",
        type: "Shoes",
        color: "Assorted",
        description: "Stylish shoes designed to complement Totally Hair Barbie's ensemble, ensuring she stays fashionable while rocking her iconic long hair.",
        image: "Image link here",
        barbieID: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Book",
        type: "Hand",
        color: "Pink",
        image: "./images/hairBook.png",
        barbieID: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Headband",
        type: "Head",
        color: "Pink",
        image: "./images/hairHeadband.png",
        barbieID: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Necklace",
        type: "Necklace",
        color: "Pink",
        image: "./images/hairNecklace.png",
        barbieID: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Scrunchie",
        type: "Hair",
        color: "Purple",
        image: "./images/hairScrunchie.png",
        barbieID: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Scrunchie",
        type: "Hair",
        color: "Pink",
        image: "./images/hairScrunchiePink.png",
        barbieID: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Shoes",
        type: "Shoes",
        color: "Pink",
        image: "./images/hairShoes.png",
        barbieID: totallyHair._id
    },
    // generation girl
    {
        name: "Barbie Generation Girl Bag",
        type: "Bag",
        color: "Red",
        image: "./images/genBag.png",
        barbieID: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Sunglasses",
        type: "Glasses",
        color: "Blue",
        image: "./images/genGlasses.png",
        barbieID: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Film Slate",
        type: "Hand",
        color: "Silver",
        image: "./images/genSlate.png",
        barbieID: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Heals",
        type: "Shoes",
        color: "Red",
        image: "./images/genHeals.png",
        barbieID: generationGirl._id
    }, 
    {
        name: "Barbie Generation Girl Video Tape",
        type: "Hand",
        color: "Yellow",
        image: "./images/genTape.png",
        barbieID: generationGirl._id
    }, 
    {
        name: "Barbie Generation Girl Video Tape",
        type: "Hand",
        color: "Yellow",
        image: "./images/genTapeSilver.png",
        barbieID: generationGirl._id
    }, 
    {
        name: "Barbie Generation Girl Magazine",
        type: "Hand",
        color: "White",
        image: "./images/genMagazine.png",
        barbieID: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Camera",
        type: "Hand",
        color: "Silver",
        image: "./images/genCamera.png",
        barbieID: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Cell Phone",
        type: "Hand",
        color: "Black",
        image: "./images/genPhone.png",
        barbieID: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Necklace",
        type: "Necklace",
        color: "Blue",
        image: "./images/genNecklace.png",
        barbieID: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Boots",
        type: "Shoes",
        color: "Blue",
        image: "./images/genBoots.png",
        barbieID: generationGirl._id
    },
    // barbie as rapunzel
    {
        name: "Barbie as Rapunzel Tiara",
        type: "Hair",
        color: "Gold",
        image: "./images/rapunzelCrown.png",
        barbieID: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Musical Brush",
        type: "Hair",
        color: "Pink",
        image: "./images/rapunzelCrown.png",
        barbieID: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Ballet Slippers",
        type: "Shoes",
        color: "Pink",
        image: "./images/rapunzelShoes.png",
        barbieID: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Ballet Slippers",
        type: "Shoes",
        color: "Purple",
        image: "./images/rapunzelShoesPurple.png",
        barbieID: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Heals",
        type: "Shoes",
        color: "Pink",
        image: "./images/rapunzelHeals.png",
        barbieID: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Mask",
        type: "Hand",
        color: "Gold",
        image: "./images/rapunzelMask.png",
        barbieID: rapunzel._id
    },
    // fashionista sweetie
    {
        name: "Fashionistas Sweetie Purse",
        type: "Hand",
        color: "Pink",
        image: "./images/sweetiePurse.png",
        barbieID: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Heart Purse",
        type: "Hand",
        color: "Pink",
        image: "./images/sweetieHeart.png",
        barbieID: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Phone",
        type: "Hand",
        color: "Pink",
        image: "./images/sweetiePhone.png",
        barbieID: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Necklace",
        type: "Necklace",
        color: "Pink",
        image: "./images/sweetiePinkNecklace.png",
        barbieID: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Heals",
        type: "Shoes",
        color: "Gold",
        image: "./images/sweetieGold.png",
        barbieID: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Bow Heals",
        type: "Shoes",
        color: "Blue",
        image: "./images/sweetieBlue.png",
        barbieID: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Bow Heals",
        type: "Shoes",
        color: "Pink",
        image: "./images/sweetiePink.png",
        barbieID: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Purse",
        type: "Hand",
        color: "Green",
        image: "./images/sweetieGreenPurse.png",
        barbieID: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Bow Necklace",
        type: "Necklace",
        color: "Pink",
        image: "./images/sweetieBowNecklace.png",
        barbieID: fashionistaSweetie._id
    }
  ]

  await Accessory.insertMany(accessories)
  console.log(`created accessories with barbies!`)
}
const run = async () => {
await main()
db.close()
}

run()