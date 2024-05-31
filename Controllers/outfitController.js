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


module.exports = {
    getAllOutfits, 
    getOutfitById, 
    deleteOutfit,
    createOutfit, 
    updateOutfit
}