
document.addEventListener('DOMContentLoaded', () => {
    const accessory = document.querySelector(`.accessory`)

const getBarbieById = async (barbieId) =>  {
    try {
        const barbie = await axios.get(`http://localhost:3001/barbie/${barbieId}`)
        return barbie.data
    } catch (error) {
        console.error(`can't find barbie:`, error.message)
        return null
    }
}

const getAccessory = async (barbieId) => {
    try {
        const getAccessory = await axios.get(`http://localhost:3001/accessory`)
        return getAccessory.data
    }catch (error) {
        console.error(`can't find accessory:`, error.message)
        return null
    }
}

const displayAccessory = (barbies) => {
    accessory.innerHTML = ``
    accessories.forEach (accessory => {
        const accessoryContainer = document.createElement(`div`)
        accessory.innerHTML = `
        <img src="${accessory.image}" alt="${accessory.name}" class="accessory">
        `
        console.log(accessory)
        accessoryContainer.appendChild(accessory)
    })
}
const displayBarbiesById = async () => {
    try {
        const barbieUrl = new URLSearchParams(window.location.search)
        const barbieId = barbieUrl.get(`id`)

        if (barbieId) {
            const barbieData = await getBarbieById(barbieId)
            if (barbieData) {
                const barbieDiv = document.querySelector('.barbie')
                barbieDiv.innerHTML = `
                    <img src="${barbieData.image}" alt="${barbieData.name}" class="productImage">
                `
            } else {
                console.log(`Barbie not found`)
            }
        } else  {
            console.log(`Barbie id not found in URL`)
        } 
    } catch (error) {
        console.error(`Error:`, error.message)
    }
}

displayBarbiesById()
displayAccessory()
})

