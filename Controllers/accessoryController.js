const { Accessory } = require('../Models')



const getAllAccessories = async (req, res) => {
    try {
        const { type } = req.params
        const accessories = await Accessory.find({ type: type })
        res.json(accessories)
    } catch (error) {
        console.error("Error fetching accessories:", error);
        res.status(500).json({ error: error.message })
    }
}


const getAccessoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const accessory = await Accessory.findById(id)
        if (!accessory) {
            return res.status(404).json({ message: 'accessory not found' })
        }
        res.status(200).json(accessory);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getAccessoriesByType = async (req, res) => {
    try {
        const type = req.params.type
        const accessories = await Accessory.find({ type: { $regex: new RegExp(type, "i") } })
        res.json(accessories)
    } catch (error) {
        console.error("Error fetching accessories by type:", error)
        res.status(500).json({ error: error.message })
    }
}


const deleteAccessory = async (req, res) => {
    const { id } = req.params
    try {
        const accessory = await Accessory.findByIdAndDelete(id)
        if (!accessory) {
            return res.status(404).json({ message: 'accessory not found' })
        }
        res.status(200).json({ message: 'accessory successfully deleted' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const updateAccessory  = async (req, res) => {
    try {
        let { id } = req.params;
        let accessory = await Accessory.findByIdAndUpdate(id, req.body, { new: true })
        if (accessory) {
            return res.status(200).json(accessory)
        }
        throw new Error("accessory not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createAccessory  = async (req, res) => {
    try {
        const newAccessory = await new Accessory (req.body)
        await newAccessory.save()
        return res.status(201).json({
            newAccessory 
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


module.exports = {
    getAllAccessories,
    getAccessoryById,
    createAccessory,
    updateAccessory,
    deleteAccessory, 
    getAccessoriesByType
}