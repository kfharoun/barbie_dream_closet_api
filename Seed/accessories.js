const db = require('../DB')
const { Barbie, Accessory } = require('../Models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
    try {
        await Accessory.deleteMany({})
        await Barbie.deleteMany({})
        console.log('All collection reset')
    } catch (error) {
        console.error('Error resetting collections:', error)
    }
}



const main = async () => {
    await (resetCollections) 
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
        color: "Assorted",
        description: "Chic sunglasses designed to shield Malibu Barbie's eyes from the sun while adding a touch of glamour to her beach look.",
        image: "Image link here",
        barbieID: malibu._id
    },
    {
        name: "Malibu Barbie Sandals",
        type: "Shoes",
        color: "Assorted",
        description: "Stylish sandals perfect for strolling along the sandy shores of Malibu, ensuring Barbie stays comfortable and fashionable.",
        image: "Image link here",
        barbieID: malibu._id
    },
    {
        name: "Malibu Barbie Beach Bag",
        type: "Bag",
        color: "Assorted",
        description: "A trendy beach bag designed to hold Malibu Barbie's essentials for a day of fun in the sun, adding a touch of practicality to her beach ensemble.",
        image: "Image link here",
        barbieID: malibu._id
    },
    {
        name: "Malibu Barbie Hat",
        type: "Hat",
        color: "Assorted",
        description: "A stylish hat that provides shade and style for Malibu Barbie's beach adventures, ensuring she looks fabulous while staying protected from the sun.",
        image: "Image link here",
        barbieID: malibu._id
    },
    // dream date barbie
    
    {
        name: "Dream Date Barbie Shoes",
        type: "Shoes",
        color: "White",
        description: "A pair of white heels or flats that perfectly complement Dream Date Barbie's outfit. These shoes are comfortable for dancing and add an elegant finishing touch to her ensemble.",
        image: "Image link here",
        barbieID: dreamDate._id
    },
    {
        name: "Dream Date Barbie Clutch",
        type: "Bag",
        color: "Silver",
        description: "A sleek silver clutch purse designed to hold Dream Date Barbie's essentials for the evening. It adds sophistication to her ensemble while being practical for carrying lipstick, keys, and other small items.",
        image: "Image link here",
        barbieID: dreamDate._id
    },
    {
        name: "Dream Date Barbie Scarf",
        type: "Necklace",
        color: "Pink",
        description: "A soft pink scarf that Dream Date Barbie can drape elegantly around her shoulders or tie around her neck. It adds a pop of color to her outfit and keeps her warm on chilly evenings.",
        image: "Image link here",
        barbieID: dreamDate._id
    },
    {
        name: "Dream Date Barbie Bracelet",
        type: "Bracelet",
        color: "Silver",
        description: "A delicate silver bracelet that adds a touch of glamour to Dream Date Barbie's wrist. It complements her overall look and adds sparkle as she dances the night away.",
        image: "Image link here",
        barbieID: dreamDate._id
    },
    // totally hair 
    {
        name: "Totally Hair Barbie Hairbrush",
        type: "Hair",
        color: "Pink",
        description: "A pink hairbrush designed to style the long and colorful hair of Totally Hair 25th Anniversary Barbie Doll. This hairbrush helps Barbie maintain her signature look and keeps her hair smooth and tangle-free.",
        image: "Image link here",
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
        name: "Totally Hair Barbie Hair Accessories",
        type: "Hair",
        color: "Assorted",
        description: "A set of assorted hair accessories, including clips, bows, and hair ties, designed to style Totally Hair 25th Anniversary Barbie Doll's vibrant hair. These accessories add fun and flair to Barbie's look, allowing for endless styling possibilities.",
        image: "Image link here",
        barbieID: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Necklace",
        type: "Necklace",
        color: "Silver",
        description: "A silver necklace designed to accessorize Totally Hair 25th Anniversary Barbie Doll's trendy ensemble. This necklace adds a touch of glamour to Barbie's look, complementing her vibrant hair and fashionable outfit.",
        image: "Image link here",
        barbieID: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Bracelet",
        type: "Necklace",
        color: "Pink",
        description: "A pink bracelet designed to add a pop of color to Totally Hair 25th Anniversary Barbie Doll's outfit. This bracelet complements Barbie's colorful style and adds a playful touch to her ensemble.",
        image: "Image link here",
        barbieID: totallyHair._id
    },
    // generation girl
    {
        name: "Barbie Generation Girl Backpack",
        type: "Accessory",
        color: "Blue",
        description: "A blue backpack designed to complement Barbie Generation Girl Doll's trendy style. This backpack is spacious enough to carry all of Barbie's school essentials while adding a touch of flair to her look.",
        image: "Image link here",
        barbieID: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Book",
        type: "Accessory",
        color: "Assorted",
        description: "An assorted book accessory that Barbie Generation Girl Doll can hold or carry. This book adds a realistic touch to Barbie's schoolgirl ensemble, allowing her to study and learn while looking fashionable.",
        image: "Image link here",
        barbieID: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Sunglasses",
        type: "Accessory",
        color: "Black",
        description: "A pair of black sunglasses designed to shield Barbie Generation Girl Doll's eyes from the sun while adding a stylish flair to her outfit. These sunglasses complement Barbie's trendy look and add a touch of coolness to her ensemble.",
        image: "Image link here",
        barbieID: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Bracelet",
        type: "Jewelry",
        color: "Assorted",
        description: "An assorted bracelet accessory that Barbie Generation Girl Doll can wear to add a pop of color and style to her ensemble. This bracelet complements Barbie's trendy outfit and adds a playful touch to her look.",
        image: "Image link here",
        barbieID: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Shoes",
        type: "Shoes",
        color: "Assorted",
        description: "A pair of assorted shoes that perfectly complement Barbie Generation Girl Doll's trendy style. These shoes are comfortable for walking and add a fashionable finishing touch to Barbie's ensemble.",
        image: "Image link here",
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