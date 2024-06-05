
document.addEventListener('DOMContentLoaded', async () => {
    const accessoryInfo = document.querySelector('.accessory')
    const outfitInfo = document.querySelector(`.outfits`)

    const getBarbieById = async (barbieId) => {
        try {
            const barbie = await axios.get(`http://localhost:3001/barbie/${barbieId}`)
            return barbie.data
        } catch (error) {
            console.error(`Can't find barbie:`, error.message)
            return null
        }
    }

    const displayOutfitsById = (outfits) => {
        outfitInfo.innerHTML = ``
        outfits.forEach(outfit => {
            const outfitContainer = document.createElement(`div`)
            outfitContainer.innerHTML=`
            <img src="${outfit.image}" alt="(outfit.name)" class="outfitPic ${outfit.name}">
            `
            outfitInfo.appendChild(outfitContainer)
        })
    }

    const getOutfitsById = async (barbieId) => {
        try {
        const barbieUrl = new URLSearchParams(window.location.search)
        barbieId = barbieUrl.get(`id`)
        const response = await fetch (`http://localhost:3001/outfit/barbie/${barbieId}`)
        const outfitData = await response.json()
        displayOutfitsById(outfitData)
    } catch (error) {
        console.log(`error fetching outfits by ID:`, error.message)
        return null
        }
    }
   

    const displayAccessoriesById = (accessories) => {
        accessoryInfo.innerHTML = ''
        accessories.forEach(accessory => {
            const accessoryContainer = document.createElement('div')
            accessoryContainer.innerHTML = `
            <div class="bubble">
                <img src="${accessory.image}" alt="${accessory.name}" class="accessoryPic ${accessory.name}">
            </div>
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
            // console.log("accessoryData:", accessoryData)
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
    getOutfitsById()
    
    
})


