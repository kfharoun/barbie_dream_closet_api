
document.addEventListener('DOMContentLoaded', async () => {
    const accessoryInfo = document.querySelector('.accessory')
    const outfitInfo = document.querySelector(`.outfits`)
    const wishlistAccessories = document.querySelector(`.wishlistAccessories`)
    const wishlistOutfit = document.querySelector(`.wishlistOutfits`)

    const getBarbieById = async (barbieId) => {
        try {
            const barbie = await axios.get(`http://localhost:3001/barbie/${barbieId}`)
            return barbie.data
        } catch (error) {
            console.error(`Can't find barbie:`, error.message)
            return null
        }
    }

    const displayTrueOutfitsById = (outfits) => {
        outfits.forEach(outfit => {
            const outfitContainer = document.createElement(`div`)
            outfitContainer.innerHTML=`
            <div class="bubbleOutfit ${outfit.name}">
            <img src="${outfit.image}" alt="(outfit.name)" class="outfitPicFalse ${outfit.name}">
            </div>
            `
            outfitContainer.addEventListener('click', async function() {
                try {
                    const outfitId = outfit._id
            
                    await axios.put(`http://localhost:3001/outfit/${outfitId}`, { inCollection: false })
                    displayFalseAccessoriesById([outfit])
                    outfitContainer.style.display="none"
                    outfitContainerFalse.style.display="block"
                } catch (error) {
                    console.error(`unable to update outfit status:`, error.message)
                }
            })
            outfitInfo.appendChild(outfitContainer)
        })
    }

    const getTrueOutfitsById = async (barbieId) => {
        try {
        const barbieUrl = new URLSearchParams(window.location.search)
        barbieId = barbieUrl.get(`id`)
        const response = await fetch (`http://localhost:3001/outfit/barbie/${barbieId}`)
        const outfitData = await response.json()
        const trueOutfits = outfitData.filter(outfit => outfit.inCollection)
        displayTrueOutfitsById(trueOutfits)
    } catch (error) {
        console.log(`error fetching outfits by ID:`, error.message)
        return null
        }
    }    
    
    const displayFalseOutfitsById = (outfits) => {
        outfits.forEach(outfit => {
            const outfitContainerFalse = document.createElement(`div`)
            outfitContainerFalse.innerHTML=`
            <div class="bubbleOutfitFalse">
            <img src="${outfit.image}" alt="(outfit.name)" class="outfitPicFalse ${outfit.name}">
            </div>
            `
            outfitContainerFalse.addEventListener('click', async function() {
                try {
                    const outfitId = outfit._id

                    await axios.put(`http://localhost:3001/outfit/${outfitId}`, { inCollection: true })
                    displayTrueOutfitsById([outfit])
                    outfitContainerFalse.style.display="none"
                    outfitContainer.style.display="block"
                } catch (error) {
                    console.error(`Error updating outfit status:`, error.message)
                }
            })
            wishlistOutfit.appendChild(outfitContainerFalse)
        })
    }

    const getFalseOutfitsById = async (barbieId) => {
        try {
        const barbieUrl = new URLSearchParams(window.location.search)
        barbieId = barbieUrl.get(`id`)
        const response = await fetch (`http://localhost:3001/outfit/barbie/${barbieId}`)
        const outfitData = await response.json()
        const falseOutfits = outfitData.filter(outfit => !outfit.inCollection)
        displayFalseOutfitsById(falseOutfits)
    } catch (error) {
        console.log(`error fetching outfits by ID:`, error.message)
        return null
        }
    }   

    const displayFalseAccessoriesById = (accessories) => {
        accessories.forEach(accessory => {
            const accessoryContainerFalse = document.createElement('div');
            accessoryContainerFalse.innerHTML = `
                <div class="bubbleFalse">
                    <img src="${accessory.image}" alt="${accessory.name}" class="accessoryPicFalse ${accessory.name}">
                </div>
            `
            accessoryContainerFalse.addEventListener('click', async function() {
                try {
                    const accessoryId = accessory._id

                    await axios.put(`http://localhost:3001/accessory/${accessoryId}`, { inCollection: true })
    
                    displayTrueAccessoriesById([accessory])
                    accessoryContainerFalse.style.display="none"
                    accessoryContainer.style.display="block"
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
                    accessoryContainer.style.display="none"
                    accessoryContainerFalse.style.display="block"
                } catch (error) {
                    console.error(`unable to update accessory status:`, error.message)
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
    getTrueOutfitsById()
    getFalseAccessoriesById()
    getFalseOutfitsById()
    document.addEventListener('mousemove', (e) => {
        const customCursor = document.querySelector('.cuteCursor');
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
      })
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