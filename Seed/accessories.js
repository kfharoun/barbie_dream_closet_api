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
  const malibu = await Barbie.findOne({ name: "Malibu Barbie" })
  const dreamDate = await Barbie.findOne({ name: "Dream Date Barbie" })
  const totallyHair = await Barbie.findOne({ name: "Totally Hair Barbie" })
  const generationGirl = await Barbie.findOne({ name: "Generation Girl Barbie" })
  const rapunzel = await Barbie.findOne({ name: "Barbie as Rapunzel" })
  const fashionistaSweetie = await Barbie.findOne({ name: "Fashionista Sweetie Barbie" })
  

  const accessories = [
    
    // malibu barbie
    {
        name: "Malibu Barbie Sunglasses",
        type: "Glasses",
        color: "Blue",
        image: "../images/malibuGlasses.png", 
        inCollection: true,
        barbieId: malibu._id
    },
    {
        name: "Malibu Barbie Shoes",
        type: "Shoes",
        color: "Yellow",
        image: "../images/malibuShoes.png", 
        inCollection: true,
        barbieId: malibu._id
    },
    {
        name: "Malibu Barbie Book",
        type: "Hand",
        color: "Pink",
        image: "../images/malibuBook.png", 
        inCollection: true,
        inCollection: true,
        barbieId: malibu._id
    },
    {
        name: "Malibu Barbie Towel",
        type: "Hand",
        color: "Yellow",
        image: "../images/malibuTowel.png", 
        inCollection: true,
        barbieId: malibu._id
    },
    // dream date barbie
    
    {
        name: "Dream Date Barbie Shoes",
        type: "Shoes",
        color: "Pink",
        image: "../images/dreamShoes.png", 
        inCollection: true,
        barbieId: dreamDate._id
    },
    {
        name: "Dream Date Barbie Mirror",
        type: "Hand",
        color: "Purple",
        image: "../images/dreamMirror.png", 
        inCollection: true,
        barbieId: dreamDate._id
    },
    {
        name: "Dream Date Barbie Brush",
        type: "Hair",
        color: "Purple",
        image: "../images/dreamBrush.png", 
        inCollection: true,
        barbieId: dreamDate._id
    },
    // totally hair 
    {
        name: "Totally Hair Barbie Haircomb",
        type: "Hair",
        color: "Pink",
        image: "../images/hairComb.png", 
        inCollection: true,
        barbieId: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Book",
        type: "Hand",
        color: "Pink",
        image: "../images/hairBook.png", 
        inCollection: true, 
        barbieId: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Headband",
        type: "Head",
        color: "Pink",
        image: "../images/hairHeadband.png", 
        inCollection: true,
        barbieId: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Necklace",
        type: "Necklace",
        color: "Pink",
        image: "../images/hairNecklace.png", 
        inCollection: true,
        barbieId: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Scrunchie",
        type: "Hair",
        color: "Purple",
        image: "../images/hairScrunchie.png", 
        inCollection: true,
        barbieId: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Scrunchie",
        type: "Hair",
        color: "Pink",
        image: "../images/hairScrunchiePink.png", 
        inCollection: true,
        barbieId: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Shoes",
        type: "Shoes",
        color: "Pink",
        image: "../images/hairShoes.png", 
        inCollection: true,
        barbieId: totallyHair._id
    },
    // generation girl
    {
        name: "Barbie Generation Girl Bag",
        type: "Hand",
        color: "Red",
        image: "../images/genBag.png", 
        inCollection: true,
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Sunglasses",
        type: "Glasses",
        color: "Blue",
        image: "../images/genGlasses.png", 
        inCollection: true,
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Film Slate",
        type: "Hand",
        color: "Silver",
        image: "../images/genSlate.png", 
        inCollection: true,
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Heals",
        type: "Shoes",
        color: "Red",
        image: "../images/genHeals.png", 
        inCollection: true,
        barbieId: generationGirl._id
    }, 
    {
        name: "Barbie Generation Girl Video Tape",
        type: "Hand",
        color: "Yellow",
        image: "../images/genTape.png", 
        inCollection: true,
        barbieId: generationGirl._id
    }, 
    {
        name: "Barbie Generation Girl Video Tape",
        type: "Hand",
        color: "Yellow",
        image: "../images/genTapeSilver.png", 
        inCollection: true,
        barbieId: generationGirl._id
    }, 
    {
        name: "Barbie Generation Girl Magazine",
        type: "Hand",
        color: "White",
        image: "../images/genMagazine.png", 
        inCollection: true,
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Camera",
        type: "Hand",
        color: "Silver",
        image: "../images/genCamera.png", 
        inCollection: true,
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Cell Phone",
        type: "Hand",
        color: "Black",
        image: "../images/genPhone.png", 
        inCollection: true,
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Necklace",
        type: "Necklace",
        color: "Blue",
        image: "../images/genNecklace.png", 
        inCollection: true,
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Boots",
        type: "Shoes",
        color: "Blue",
        image: "../images/genBoots.png", 
        inCollection: true,
        barbieId: generationGirl._id
    },
    // barbie as rapunzel
    {
        name: "Barbie as Rapunzel Tiara",
        type: "Hair",
        color: "Gold",
        image: "../images/rapunzelCrown.png", 
        inCollection: true,
        barbieId: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Musical Brush",
        type: "Hair",
        color: "Pink",
        image: "../images/rapunzelBrush.png", 
        inCollection: true,
        barbieId: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Ballet Slippers",
        type: "Shoes",
        color: "Pink",
        image: "../images/rapunzelShoes.png", 
        inCollection: true,
        barbieId: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Ballet Slippers",
        type: "Shoes",
        color: "Purple",
        image: "../images/rapunzelShoesPurple.png", 
        inCollection: true,
        barbieId: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Heals",
        type: "Shoes",
        color: "Pink",
        image: "../images/rapunzelHeals.png", 
        inCollection: true,
        barbieId: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Mask",
        type: "Hand",
        color: "Gold",
        image: "../images/rapunzelMask.png", 
        inCollection: true,
        barbieId: rapunzel._id
    },
    // fashionista sweetie
    {
        name: "Fashionistas Sweetie Purse",
        type: "Hand",
        color: "Pink",
        image: "../images/sweetiePurse.png", 
        inCollection: true,
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Heart Purse",
        type: "Hand",
        color: "Pink",
        image: "../images/sweetieHeart.png", 
        inCollection: true,
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Phone",
        type: "Hand",
        color: "Pink",
        image: "../images/sweetiePhone.png", 
        inCollection: true,
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Necklace",
        type: "Necklace",
        color: "Pink",
        image: "../images/sweetiePinkNecklace.png", 
        inCollection: true,
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Heals",
        type: "Shoes",
        color: "Gold",
        image: "../images/sweetieGold.png", 
        inCollection: true,
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Bow Heals",
        type: "Shoes",
        color: "Blue",
        image: "../images/sweetieBlue.png", 
        inCollection: true,
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Bow Heals",
        type: "Shoes",
        color: "Pink",
        image: "../images/sweetiePink.png", 
        inCollection: true,
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Purse",
        type: "Hand",
        color: "Green",
        image: "../images/sweetieGreenPurse.png", 
        inCollection: true,
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Bow Necklace",
        type: "Necklace",
        color: "Pink",
        image: "../images/sweetieBowNecklace.png", 
        inCollection: true,
        barbieId: fashionistaSweetie._id
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