const db = require('../DB')
const { Barbie } = require('../Models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const barbies =
  [
    {
        name: "Ponytail Barbie" ,
        releaseYear: 1960, 
        description: "Barbie® doll got a softer look in 1960. Arched eyebrows changed to curved. Pupils became blue, accented with either blue or brown eyeliner. Dolls came in either blonde or brunette. Gorgeous red lips, painted red nails, and blush added to her beauty. Accessories included gold hoop or pearl stud earrings, black open toe shoes, and white sunglasses with blue lenses. Barbie® #4 was the first doll that came with tan vinyl. Available as both a blonde and brunette with a hard curl on the end of their ponytail, some dolls had factory braided hair. The doll featured blue eyes, brown brows, and red lips. Barbie® #5 came in three hair colors—blond, brunette, or titian. #5 had subtler face paint, a tan-hued vinyl, and optional white sunglasses. This was the first year of the hollow body—marked Barbie®—with a small neck knob.", 
        image: "./images/ponytailBarbie.png"
      },
      {
        name: "Dream Date Barbie" ,
        releaseYear: 1983, 
        description: "She's everybody's Dream Date! The best looking dates around town! Dream Date Barbie was a sensation in 1982, epitomizing glamour and romance. She came dressed in a stunning pink satin gown with a cascading ruffle down the front and a bow accent at the waist. Her blonde hair was styled in soft curls, and her makeup featured rosy cheeks, shimmery eyeshadow, and glossy pink lips. Completing her ensemble were a matching pink clutch purse and high-heeled shoes.", 
        image: "./images/dreamDate.png"
      },
      {
        name: "Totally Hair 25th Anniversary" ,
        releaseYear: 2016, 
        description: "Totally Hair Barbie rocked the '90s with her long, flowing locks and vibrant style. Her hair was a dazzling cascade of blonde hair that reached down to her ankles, making her a standout among Barbie collectors. She wore a colorful, form-fitting minidress with bold patterns and accessorized with hoop earrings and chunky bracelets. This doll captured the essence of the fashionable and free-spirited '90s.", 
        image: "./images/totallyHair.png"
      },
      {
        name: "Generation Girl Barbie" ,
        releaseYear: 1999, 
        description: "The Generation Girl series was a parallel line at the turn of the century. It was a short series about a group of 8 friends at an international high school in New York City. Barbie Generation Girl is a girl who loves making home videos and dreams of being an actress. She comes wearing a blue dress, denim jacket, bodysuit, skirt, necklace, tights, shoes, and sunglasses. It also comes with a camcorder (with camera bag and two video cassettes), water bottle, movie clapboard, cell phone, and doll stand.", 
        image: "./images/totallyHair.png"
      },
      {
        name: "Barbie as Rapunzel" ,
        releaseYear: 2001, 
        description: "Barbie as Rapunzel #12 enchanted audiences with her fairy-tale beauty and charm in 2001. Inspired by the classic story, she wore a stunning purple gown with a flowing skirt adorned with shimmering details and floral accents. Her long, flowing blonde hair was adorned with a tiara and intertwined with colorful ribbons. This doll captured the magic of the beloved fairy tale and sparked imaginations around the world.", 
        image: "./images/rapunzel.png"
      },
      {
        name: "Fashionista Barbie" ,
        releaseYear: 2010, 
        description: "Fashionista Barbie #13 reflected the diversity and inclusivity of the modern world when she debuted in 2010. With her diverse range of skin tones, body types, and hairstyles, she celebrated individuality and personal style. This Barbie came with an array of trendy fashion outfits and accessories, allowing for endless mix-and-match possibilities. Fashionista Barbie empowered girls to express themselves and embrace their unique identities.", 
        image: "./images/fashionista.png"
      }
  ]
  await Barbie.insertMany(barbies)
  console.log(`created barbies!`)
}
const run = async () => {
    await main()
    db.close()
  }
  
  run()