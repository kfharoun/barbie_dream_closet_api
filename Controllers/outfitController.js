const { Outfit } = require('../Models')

const getAllOutfits = async (req, res) => {
    try {
        const outfits = await Outfit.find({})
        res.json(outfits)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
    
}

const getOutfitById = async (req, res) => {
    const { id } = req.params;
    try {
        const outfit = await Outfit.findById(id)
        if (!outfit) {
            return res.status(404).json({ message: 'outfit not found' })
        }
        res.status(200).json(accessory);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getOutfitByType = async (req, res) => {
    try {
        const type = req.params.type
        const clothes = await Outfit.find({ type: { $regex: new RegExp(type, "i") } })
        res.json(clothes)
    } catch (error) {
        console.error("Error fetching outfit by type:", error)
        res.status(500).json({ error: error.message })
    }
}

const getOutfitByColor = async (req, res) => {
    try {
        const color = req.params.color
        const outfit = await Outfit.find({ color: { $regex: new RegExp(color, "i") } })
        res.json(outfit)
    } catch (error) {
        console.error("Error fetching outfit by color:", error)
        res.status(500).json({ error: error.message })
    }
}

const getOutfitByWord = async (req, res) => {
    try {
        const searchTerm = req.params.searchTerm
        const outfit = await Outfit.find({
            $or: [
                { name: { $regex: new RegExp(searchTerm, "i") } },
                { color: { $regex: new RegExp(searchTerm, "i") } },
                { type: { $regex: new RegExp(searchTerm, "i") } }
            ]
        })
        console.log("Outfit by search term:", outfit)
        res.json(outfit)
    } catch (error) {
        console.error("Error fetching outfit by search term:", error)
        res.status(500).json({ error: error.message })
    }
}

const deleteOutfit = async (req, res) => {
    const { id } = req.params
    try {
        const outfit = await Outfit.findByIdAndDelete(id)
        if (!outfit) {
            return res.status(404).json({ message: 'outfit not found' })
        }
        res.status(200).json({ message: 'outfit successfully deleted' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const updateOutfit  = async (req, res) => {
    try {
        let { id } = req.params;
        let outfit = await Outfit.findByIdAndUpdate(id, req.body, { new: true })
        if (outfit) {
            return res.status(200).json(outfit)
        }
        throw new Error("outfit not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createOutfit  = async (req, res) => {
    try {
        const newOutfit = await new Outfit (req.body)
        await newOutfit.save()
        return res.status(201).json({
            newOutfit
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const getOutfitsByBarbieId = async (req, res) => {
    try {
        const barbieId = req.params.barbieId
        console.log("barbieId:", barbieId)
        const outfits = await Outfit.find({ barbieId })
        res.json(outfits)
    } catch (error) {
        console.error("Error fetching outfits by Barbie ID:", error)
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllOutfits, 
    getOutfitById, 
    deleteOutfit,
    createOutfit, 
    updateOutfit, 
    getOutfitByType, 
    getOutfitByColor, 
    getOutfitByWord, 
    getOutfitsByBarbieId
}