const { Barbie } = require('../Models')



const getAllBarbies = async (req, res) => {
    try {
        const barbies = await Barbie.find({})
        res.json(barbies)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
    
}

const getBarbieById = async (req, res) => {
    const { id } = req.params;
    try {
        const barbie = await Barbie.findById(id)
        if (!barbie) {
            return res.status(404).json({ message: 'Barbie not found' })
        }
        res.status(200).json(barbie);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteBarbie = async (req, res) => {
    const { id } = req.params
    try {
        const barbie = await Barbie.findByIdAndDelete(id)
        if (!barbie) {
            return res.status(404).json({ message: 'Barbie not found' })
        }
        res.status(200).json({ message: 'Barbie successfully deleted' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const updateBarbie = async (req, res) => {
    try {
        let { id } = req.params;
        let barbie = await Barbie.findByIdAndUpdate(id, req.body, { new: true })
        if (barbie) {
            return res.status(200).json(barbie)
        }
        throw new Error("Barbie not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createBarbie = async (req, res) => {
    try {
        const newBarbie = await new Barbie(req.body)
        await newBarbie.save()
        return res.status(201).json({
            newBarbie
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


module.exports = {
    getAllBarbies, 
    getBarbieById, 
    deleteBarbie,
    updateBarbie, 
    createBarbie
}