const db = require('../DB')
const { Barbie } = require('../Models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const barbies =
  [
    {
        name: "Fire Fighter Barbie" ,
        productCode: "0850-1960",
        releaseYear: 1960, 
        description: "Barbie® doll got a softer look in 1960. Arched eyebrows changed to curved. Pupils became blue, accented with either blue or brown eyeliner. Dolls came in either blonde or brunette. Gorgeous red lips, painted red nails, and blush added to her beauty. Accessories included gold hoop or pearl stud earrings, black open toe shoes, and white sunglasses with blue lenses. Barbie® #4 was the first doll that came with tan vinyl. Available as both a blonde and brunette with a hard curl on the end of their ponytail, some dolls had factory braided hair. The doll featured blue eyes, brown brows, and red lips. Barbie® #5 came in three hair colors—blond, brunette, or titian. #5 had subtler face paint, a tan-hued vinyl, and optional white sunglasses. This was the first year of the hollow body—marked Barbie®—with a small neck knob.", 
        image: { type: String, required: true}
      },
  ]
  await Barbie.insertMany(barbies)
  console.log(`created barbies!`)
}
const run = async () => {
    await main()
    db.close()
  }
  
  run()