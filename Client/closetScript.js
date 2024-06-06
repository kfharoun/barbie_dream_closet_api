
document.addEventListener('DOMContentLoaded', async () => {
    const accessoryInfo = document.querySelector('.accessory')
    const outfitInfo = document.querySelector(`.outfits`)
    const wishlistAccessories = document.querySelector(`.wishlistAccessories`)
    const wishlistOutfit = document.querySelector(`.wishlistOutfit`)

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
            <div class="bubbleOutfit ${outfit.name}">
            <img src="${outfit.image}" alt="(outfit.name)" class="outfitPic ${outfit.name}">
            </div>
            `
            outfitContainer.addEventListener('click', function(){
                removeOutfits(outfitContainer)
            })
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
    

    const displayFalseAccessoriesById = (accessories) => {
        wishlistAccessories.innerHTML = '';
        accessories.forEach(accessory => {
            const accessoryContainerFalse = document.createElement('div');
            accessoryContainerFalse.innerHTML = `
                <div class="bubbleFalse">
                    <img src="${accessory.image}" alt="${accessory.name}" class="accessoryPicFalse ${accessory.name}">
                </div>
            `;
            accessoryContainerFalse.addEventListener('click', async function() {
                try {
                    const accessoryId = accessory._id

                    await axios.put(`http://localhost:3001/accessory/${accessoryId}`, { inCollection: true })
    
                    displayTrueAccessoriesById([accessory])
    
                    accessoryContainerFalse.remove()
                    
                } catch (error) {
                    console.error(`Error updating accessory status:`, error.message)
                }
            })
            wishlistAccessories.appendChild(accessoryContainerFalse)
        })
    }

    const getFalseAccessoriesById = async (barbieId) => {
        try {
            const barbieUrl = new URLSearchParams(window.location.search);
            const barbieId = barbieUrl.get('id')
            const response = await fetch(`http://localhost:3001/accessory/barbie/${barbieId}`)
            const accessoryData = await response.json()
            const trueAccessories = accessoryData.filter(accessory => !accessory.inCollection)
            
            displayFalseAccessoriesById(trueAccessories)
        } catch (error) {
            console.error(`Can't find accessories for Barbie:`, error.message)
            return null
        }
    }

    const displayTrueAccessoriesById = (accessories) => {
        accessoryInfo.innerHTML = ''
        accessories.forEach(accessory => {
            const accessoryContainer = document.createElement('div');
            accessoryContainer.innerHTML = `
                <div class="bubble">
                    <img src="${accessory.image}" alt="${accessory.name}" class="accessoryPic ${accessory.name}">
                </div>
            `
            accessoryContainer.addEventListener('click', async function() {
                try {
                    const accessoryId = accessory._id
            
                    await axios.put(`http://localhost:3001/accessory/${accessoryId}`, { inCollection: false })
                    displayFalseAccessoriesById([accessory])
                    accessoryContainer.remove()
                } catch (error) {
                    console.error(`unable to update accessory status:`, error.message);
                }
            })
            accessoryInfo.appendChild(accessoryContainer)
        })
    }

    const getTrueAccessoriesById = async (barbieId) => {
        try {
            const barbieUrl = new URLSearchParams(window.location.search);
            const barbieId = barbieUrl.get('id')
            const response = await fetch(`http://localhost:3001/accessory/barbie/${barbieId}`)
            const accessoryData = await response.json()
            const trueAccessories = accessoryData.filter(accessory => accessory.inCollection)
            
            displayTrueAccessoriesById(trueAccessories)
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
    getTrueAccessoriesById()
    getOutfitsById()
    getFalseAccessoriesById()
  
})


// code graveyard

// const removeOutfits = (outfitContainer)=> {
    //     outfitContainer.style.display = `none`
    // }

    // const removeAccessories = (accessoryContainer) => {
    //     const clone = accessoryContainer.cloneNode(true)
    //     const cloneDiv = document.createElement('div')
    //     accessoryContainer.style.display = `none`
    
    //     clone.style.position = 'absolute'
    //     clone.style.marginLeft = `120vh`
    //     clone.style.top = `20vh`
    
    //     const existingClones = document.querySelectorAll('.cloned-accessory')
    //     const leftOffset = existingClones.length * 100;
    //     clone.style.left = `${leftOffset}px`
    
    //     clone.classList.add('cloned-accessory')
    
    //     cloneDiv.appendChild(clone)
        
    //     document.body.appendChild(cloneDiv)
        
    // }