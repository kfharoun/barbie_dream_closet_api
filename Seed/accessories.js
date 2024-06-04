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
        barbieId: malibu._id
    },
    {
        name: "Malibu Barbie Shoes",
        type: "Shoes",
        color: "Yellow",
        image: "../images/malibuShoes.png",
        barbieId: malibu._id
    },
    {
        name: "Malibu Barbie Book",
        type: "Hand",
        color: "Pink",
        image: "../images/malibuBook.png",
        barbieId: malibu._id
    },
    {
        name: "Malibu Barbie Towel",
        type: "Hand",
        color: "Yellow",
        image: "../images/malibuTowel.png",
        barbieId: malibu._id
    },
    // dream date barbie
    
    {
        name: "Dream Date Barbie Shoes",
        type: "Shoes",
        color: "Pink",
        image: "../images/dreamShoes.png",
        barbieId: dreamDate._id
    },
    {
        name: "Dream Date Barbie Mirror",
        type: "Hand",
        color: "Purple",
        image: "../images/dreamMirror.png",
        barbieId: dreamDate._id
    },
    {
        name: "Dream Date Barbie Brush",
        type: "Hair",
        color: "Purple",
        image: "../images/dreamBrush.png",
        barbieId: dreamDate._id
    },
    // totally hair 
    {
        name: "Totally Hair Barbie Haircomb",
        type: "Hair",
        color: "Pink",
        image: "../images/hairComb.png",
        barbieId: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Shoes",
        type: "Shoes",
        color: "Assorted",
        description: "Stylish shoes designed to complement Totally Hair Barbie's ensemble, ensuring she stays fashionable while rocking her iconic long hair.",
        image: "Image link here",
        barbieId: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Book",
        type: "Hand",
        color: "Pink",
        image: "../images/hairBook.png",
        barbieId: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Headband",
        type: "Head",
        color: "Pink",
        image: "../images/hairHeadband.png",
        barbieId: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Necklace",
        type: "Necklace",
        color: "Pink",
        image: "../images/hairNecklace.png",
        barbieId: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Scrunchie",
        type: "Hair",
        color: "Purple",
        image: "../images/hairScrunchie.png",
        barbieId: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Scrunchie",
        type: "Hair",
        color: "Pink",
        image: "../images/hairScrunchiePink.png",
        barbieId: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Shoes",
        type: "Shoes",
        color: "Pink",
        image: "../images/hairShoes.png",
        barbieId: totallyHair._id
    },
    // generation girl
    {
        name: "Barbie Generation Girl Bag",
        type: "Hand",
        color: "Red",
        image: "../images/genBag.png",
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Sunglasses",
        type: "Glasses",
        color: "Blue",
        image: "../images/genGlasses.png",
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Film Slate",
        type: "Hand",
        color: "Silver",
        image: "../images/genSlate.png",
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Heals",
        type: "Shoes",
        color: "Red",
        image: "../images/genHeals.png",
        barbieId: generationGirl._id
    }, 
    {
        name: "Barbie Generation Girl Video Tape",
        type: "Hand",
        color: "Yellow",
        image: "../images/genTape.png",
        barbieId: generationGirl._id
    }, 
    {
        name: "Barbie Generation Girl Video Tape",
        type: "Hand",
        color: "Yellow",
        image: "../images/genTapeSilver.png",
        barbieId: generationGirl._id
    }, 
    {
        name: "Barbie Generation Girl Magazine",
        type: "Hand",
        color: "White",
        image: "../images/genMagazine.png",
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Camera",
        type: "Hand",
        color: "Silver",
        image: "../images/genCamera.png",
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Cell Phone",
        type: "Hand",
        color: "Black",
        image: "../images/genPhone.png",
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Necklace",
        type: "Necklace",
        color: "Blue",
        image: "../images/genNecklace.png",
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Boots",
        type: "Shoes",
        color: "Blue",
        image: "../images/genBoots.png",
        barbieId: generationGirl._id
    },
    // barbie as rapunzel
    {
        name: "Barbie as Rapunzel Tiara",
        type: "Hair",
        color: "Gold",
        image: "../images/rapunzelCrown.png",
        barbieId: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Musical Brush",
        type: "Hair",
        color: "Pink",
        image: "../images/rapunzelCrown.png",
        barbieId: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Ballet Slippers",
        type: "Shoes",
        color: "Pink",
        image: "../images/rapunzelShoes.png",
        barbieId: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Ballet Slippers",
        type: "Shoes",
        color: "Purple",
        image: "../images/rapunzelShoesPurple.png",
        barbieId: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Heals",
        type: "Shoes",
        color: "Pink",
        image: "../images/rapunzelHeals.png",
        barbieId: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Mask",
        type: "Hand",
        color: "Gold",
        image: "../images/rapunzelMask.png",
        barbieId: rapunzel._id
    },
    // fashionista sweetie
    {
        name: "Fashionistas Sweetie Purse",
        type: "Hand",
        color: "Pink",
        image: "../images/sweetiePurse.png",
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Heart Purse",
        type: "Hand",
        color: "Pink",
        image: "../images/sweetieHeart.png",
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Phone",
        type: "Hand",
        color: "Pink",
        image: "../images/sweetiePhone.png",
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Necklace",
        type: "Necklace",
        color: "Pink",
        image: "../images/sweetiePinkNecklace.png",
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Heals",
        type: "Shoes",
        color: "Gold",
        image: "../images/sweetieGold.png",
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Bow Heals",
        type: "Shoes",
        color: "Blue",
        image: "../images/sweetieBlue.png",
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Bow Heals",
        type: "Shoes",
        color: "Pink",
        image: "../images/sweetiePink.png",
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Purse",
        type: "Hand",
        color: "Green",
        image: "../images/sweetieGreenPurse.png",
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Bow Necklace",
        type: "Necklace",
        color: "Pink",
        image: "../images/sweetieBowNecklace.png",
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