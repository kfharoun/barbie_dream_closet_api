
document.addEventListener('DOMContentLoaded', async () => {
    const accessory = document.querySelector('.accessory')

    const getBarbieById = async (barbieId) => {
        try {
            const barbie = await axios.get(`http://localhost:3001/barbie/${barbieId}`)
            return barbie.data
        } catch (error) {
            console.error(`Can't find barbie:`, error.message)
            return null
        }
    }

    const getAccessoriesById = async (barbieId) => {
        try {
            const accessoryData = await axios.get(`http://localhost:3001/accessory/barbie/${barbieId}`);
            return accessoryData.data;
        } catch (error) {
            console.error(`Can't find accessories for Barbie:`, error.message);
            return null;
        }
    }
    
    const displayAccessory = async () => {
        try {
            const barbieUrl = new URLSearchParams(window.location.search);
            const barbieId = barbieUrl.get(`id`);
    
            if (barbieId) {
                const accessories = await getAccessoriesById(barbieId);
                if (accessories) {
                    accessory.innerHTML = ``;
                    accessories.forEach(accessory => {
                        const accessoryContainer = document.createElement(`div`);
                        accessoryContainer.innerHTML = `
                            <img src="${accessory.image}" alt="${accessory.name}" class="accessory">
                        `;
                        accessory.appendChild(accessoryContainer);
                    });
                } else {
                    console.log(`Accessories not found for Barbie`);
                }
            } else {
                console.log(`Barbie id not found in URL`);
            }
        } catch (error) {
            console.error(`Error displaying accessories for Barbie:`, error.message);
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

    displayAccessory()

    displayAccessory()
})


