
document.addEventListener('DOMContentLoaded', async () => {
    const accessoryInfo = document.querySelector('.accessory')

    const getBarbieById = async (barbieId) => {
        try {
            const barbie = await axios.get(`http://localhost:3001/barbie/${barbieId}`)
            return barbie.data
        } catch (error) {
            console.error(`Can't find barbie:`, error.message)
            return null
        }
    }
   

    const displayAccessoriesById = (accessories) => {
        accessoryInfo.innerHTML = ''
        accessories.forEach(accessory => {
            const accessoryContainer = document.createElement('div')
            // barbieLink.onclick = () => displayPopup(barbie._id)
            accessoryContainer.innerHTML = `
                <img src="${accessory.image}" alt="${accessory.name}" class="barbiePic ${accessory.name}">
            `
            accessoryInfo.appendChild(accessoryContainer)
        })
    }
    

    const getAccessoriesById = async (barbieId) => {
        try {
            const barbieUrl = new URLSearchParams(window.location.search)
            // console.log("barbieURL:", barbieUrl)
            const barbieId = barbieUrl.get('id')
            // console.log("barbieId:", barbieId)
            const response = await fetch(`http://localhost:3001/accessory/barbie/${barbieId}`)
            // console.log("response:", response)
            const accessoryData = await response.json()
            console.log("accessoryData:", accessoryData)
            displayAccessoriesById(accessoryData)
        } catch (error) {
            console.error(`Can't find accessories for Barbie:`, error.message)
            return null
        }
    }

    const displayBarbieById = async () => {
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
            } else {
                console.log(`Barbie id not found in URL`)
            }
        } catch (error) {
            console.error(`Error:`, error.message)
        }
    }
    displayBarbieById()
    getAccessoriesById()
    
    
})


