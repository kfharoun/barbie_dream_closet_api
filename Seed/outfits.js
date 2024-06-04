const db = require('../DB')
const { Barbie, Outfit } = require('../Models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
    try {
        await Outfit.deleteMany({})
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
    // console.log(malibu)
    const barbies = await Barbie.find({})
    console.log(barbies)
  const outfits = [
    // malibu barbie
    {
        name: "Malibu Barbie Swimsuit",
        type: "Top",
        color: "Assorted",
        image: "./images/malibuSuit.png",
        barbieId: malibu._id
    },
    {
        name: "Malibu Barbie Yellow Top and Pant Set",
        type: "Dress",
        color: "Yellow",
        image: "./images/malibuYellow.png",
        barbieId: malibu._id
    },
     
    // dream date barbie
    {
        name: "Dream Date Barbie Evening Gown",
        type: "Dress",
        color: "Purple",
        image: "./images/dreamDress.png",
        barbieId: dreamDate._id
    },
    {
        name: "Dream Date Barbie Wrap",
        type: "Bottoms",
        color: "Pink",
        image: "./images/dreamSkirt.png",
        barbieId: dreamDate._id
    },
    // totally hair
    {
        name: "Totally Hair Barbie Dress",
        type: "Dress",
        color: "Pink",
        image: "./images/totallyDress.png",
        barbieId: totallyHair._id
    },
 
    // generation girl
    {
        name: "Barbie Generation Girl Skirt",
        type: "Bottoms",
        color: "Blue",
        image: "./images/genSkirt.png",
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Jacket",
        type: "Top",
        color: "Blue",
        image: "./images/genJacket.png",
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Tights",
        type: "Bottoms",
        color: "Blue",
        image: "./images/genTights.png",
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Bodysuit",
        type: "Top",
        color: "Red",
        image: "./images/genBody.png",
        barbieId: generationGirl._id
    },
    {
        name: "Barbie Generation Girl Dress",
        type: "Dress",
        color: "Blue",
        image: "./images/genDress.png",
        barbieId: generationGirl._id
    },
    // barbie as rapunzel
    {
        name: "Barbie as Rapunzel Gown",
        type: "Dress",
        color: "Assorted",
        image: "./images/rapunzelDress.png",
        barbieId: rapunzel._id
    },
    {
        name: "Barbie as Rapunzel Cape",
        type: "Top",
        color: "Assorted",
        image: "./images/rapunzelCape.png",
        barbieId: rapunzel._id
    },
 
    // fashionista sweetie
    {
        name: "Fashionistas Sweetie Dress",
        type: "Dress",
        color: "Pink",
        image: "./images/sweetieDress.png",
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Halter Dress",
        type: "Dress",
        color: "Pink",
        image: "./images/sweetieHalter.png",
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Striped Dress",
        type: "Dress",
        color: "Pink",
        image: "./images/sweetieDressStripe.png",
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Turtleneck Dress",
        type: "Dress",
        color: "Pink",
        image: "./images/sweetiePinkDress.png",
        barbieId: fashionistaSweetie._id
    },
    {
        name: "Fashionistas Sweetie Jacket",
        type: "Top",
        color: "Purple",
        image: "./images/sweetieJacket.png",
        barbieId: fashionistaSweetie._id
    }
  ]

  await Outfit.insertMany(outfits)
  console.log(`created outfits with barbies!`)
}
const run = async () => {
await main()
db.close()
}

run()