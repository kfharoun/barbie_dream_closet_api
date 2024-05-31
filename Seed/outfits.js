const db = require('../DB')
const { Barbie, Outfit } = require('../Models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const malibu = await Barbie.find({ name: "Malibu Barbie" })
  const dreamDate = await Barbie.find({ name: "Dream Date Barbie" })
  const totallyHair = await Barbie.find({ name: "Totally Hair 25th Anniversary" })
  const generationGirl = await Barbie.find({ name: "Generation Girl Barbie" })
  const rapunzel = await Barbie.find({ name: "Barbie as Rapunzel" })
  const fashionistaSweetie = await Barbie.find({ name: "Fashionista Sweetie Barbie" })
  

  const accessories = [
    // malibu barbie
    {
        name: "Malibu Barbie Swimsuit",
        type: "Clothing",
        color: "Assorted",
        description: "The iconic swimsuit that epitomizes the carefree and sun-kissed style of Malibu Barbie, perfect for beach days and pool parties.",
        image: "Image link here",
        barbieID: malibu._id
    },
    {
        name: "Malibu Barbie Yellow Top and Pant Set",
        type: "Clothing",
        color: "Yellow",
        description: "A chic yellow top and pant set designed for Malibu Barbie, adding a stylish layer to her beach ensemble and reflecting the sunny vibes of Malibu.",
        image: "Image link here",
        barbieID: malibu._id
    },
     
    // dream date barbie
    {
        name: "Dream Date Barbie Evening Gown",
        type: "Dress",
        color: "Pink",
        description: "A glamorous evening gown designed for Dream Date Barbie, typically in elegant fabrics with shimmering details, perfect for a romantic night out.",
        image: "Image link here",
        barbieID: dreamDate._id
    },
    // totally hair
    {
        name: "Totally Hair Barbie Dress",
        type: "Dress",
        color: "Assorted",
        description: "A vibrant and colorful dress reflecting the bold and trendy style of Totally Hair Barbie, featuring patterns and designs that capture the essence of the 1990s.",
        image: "Image link here",
        barbieID: totallyHair._id
    },
    {
        name: "Totally Hair Barbie Skirt",
        type: "Skirt",
        color: "Assorted",
        description: "A trendy skirt reflecting the fashion trends of the 1990s, perfect for mixing and matching with Totally Hair Barbie's colorful tops and accessories.",
        image: "Image link here",
        barbieID: totallyHair._id
    }, 
 
    // generation girl
    {
        name: "Barbie Generation Girl Top",
        type: "Top",
        color: "Assorted",
        description: "A trendy top reflecting the fashion-forward style of Barbie Generation Girl, perfect for expressing individuality and confidence.",
        image: "Image link here",
        barbieID: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Skirt",
        type: "Skirt",
        color: "Assorted",
        description: "A stylish skirt designed to complement Barbie Generation Girl's chic and modern look, ideal for mixing and matching with other wardrobe pieces.",
        image: "Image link here",
        barbieID: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Tights",
        type: "Tights",
        color: "Assorted",
        description: "Assorted tights to add flair and personality to Barbie Generation Girl's outfit, providing warmth and style for any occasion.",
        image: "Image link here",
        barbieID: generationGirl._id
    },
    // barbie as rapunzel
    {
        name: "Barbie as Rapunzel Gown",
        type: "Dress",
        color: "Assorted",
        description: "A majestic gown fit for a princess, inspired by Rapunzel's fairy tale. This gown features intricate details and luxurious fabrics, perfect for magical adventures.",
        image: "Image link here",
        barbieID: rapunzel._id
    },
 
    // fashionista sweetie
    {
        name: "Fashionistas Sweetie Dress",
        type: "Dress",
        color: "Assorted",
        description: "A trendy and chic dress reflecting the sweet and stylish personality of Fashionistas Sweetie Barbie, perfect for expressing her unique fashion sense.",
        image: "Image link here",
        barbieID: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Skirt",
        type: "Skirt",
        color: "Assorted",
        description: "A fashionable skirt designed to complement Fashionistas Sweetie Barbie's trendy look, ideal for mixing and matching with other wardrobe pieces.",
        image: "Image link here",
        barbieID: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Top",
        type: "Top",
        color: "Assorted",
        description: "A stylish top that perfectly captures the sweet and trendy style of Fashionistas Sweetie Barbie, allowing her to stand out with confidence.",
        image: "Image link here",
        barbieID: fashionistaSweetie._id
    }
  ]

  await Outfit.insertMany(accessories)
  console.log(`created outfits with barbies!`)
}
const run = async () => {
await main()
db.close()
}

run()