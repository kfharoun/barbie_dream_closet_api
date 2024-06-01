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
        color: "Pink"
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
        type: "Hat",
        color: "Gold",
        description: "A gold tiara adorned with intricate designs, fit for Barbie as Rapunzel Doll's royal attire. This tiara adds a touch of regal elegance to Barbie's look, complementing her long, flowing hair.",
        image: "Image link here",
        barbieID: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Brush",
        type: "Hair",
        color: "Assorted",
        description: "An assorted brush accessory that Barbie as Rapunzel Doll can use to groom and style her long, flowing hair. This brush helps Barbie maintain her enchanting appearance, keeping her hair smooth and tangle-free.",
        image: "Image link here",
        barbieID: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Necklace",
        type: "Necklace",
        color: "Silver",
        description: "A silver necklace adorned with a pendant, designed to accessorize Barbie as Rapunzel Doll's royal attire. This necklace adds a touch of sparkle and glamour to Barbie's look, complementing her elegant ensemble.",
        image: "Image link here",
        barbieID: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Hair Extensions",
        type: "Hair",
        color: "Assorted",
        description: "Assorted hair extensions that Barbie as Rapunzel Doll can use to enhance her long, flowing hair. These extensions add volume and length to Barbie's hair, allowing her to create enchanting hairstyles.",
        image: "Image link here",
        barbieID: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Cape",
        type: "Clothing",
        color: "Assorted",
        description: "A regal cape designed to keep Barbie as Rapunzel warm and stylish during her fairy tale adventures, adding an extra layer of enchantment to her ensemble.",
        image: "Image link here",
        barbieID: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Shoes",
        type: "Shoes",
        color: "Assorted",
        description: "Enchanting shoes designed to complement Barbie as Rapunzel's royal attire, ensuring she walks with grace and elegance as she embarks on her fairy tale journey.",
        image: "Image link here",
        barbieID: rapunzel._id
    },
    // fashionista sweetie
    {
        name: "Fashionistas Sweetie Purse",
        type: "Bag",
        color: "Assorted",
        description: "An assorted purse accessory that complements Fashionistas Sweetie Doll's chic style. This purse adds a touch of flair to Sweetie's ensemble while allowing her to carry her essentials in style.",
        image: "Image link here",
        barbieID: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Sunglasses",
        type: "Glasses",
        color: "Assorted",
        description: "A pair of assorted sunglasses that adds a trendy touch to Fashionistas Sweetie Doll's look. These sunglasses shield Sweetie's eyes from the sun while adding a cool and stylish flair to her ensemble.",
        image: "Image link here",
        barbieID: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Bracelet",
        type: "Bracelet",
        color: "Assorted",
        description: "An assorted bracelet accessory that Fashionistas Sweetie Doll can wear to add a pop of color and style to her ensemble. This bracelet complements Sweetie's trendy outfit and adds a playful touch to her look.",
        image: "Image link here",
        barbieID: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Shoes",
        type: "Shoes",
        color: "Assorted",
        description: "A pair of assorted shoes that perfectly complement Fashionistas Sweetie Doll's chic style. These shoes are comfortable for walking and add a fashionable finishing touch to Sweetie's ensemble.",
        image: "Image link here",
        barbieID: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Hair Accessory",
        type: "Hair",
        color: "Assorted",
        description: "An assorted hair accessory that Fashionistas Sweetie Doll can use to add flair to her hairstyle. This accessory adds a fun and playful touch to Sweetie's look, allowing her to express her unique style.",
        image: "Image link here",
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