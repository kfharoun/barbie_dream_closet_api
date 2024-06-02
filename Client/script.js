const displayBarbies = (barbies) => {
    const barbieInfo = document.querySelector('.barbies')
    barbieInfo.innerHTML = ''
    barbies.forEach(barbie => {
        console.log(barbie.image)
        const barbieContainer = document.createElement('div')
        const barbieLink = document.createElement('a')
        barbieLink.href = `barbieInfo.html?id=${barbie.id}`
        barbieLink.innerHTML = `
            <img src="${barbie.image}" alt="${barbie.name} class="barbiePic">
        `
        
        barbieContainer.appendChild(barbieLink)
        barbieInfo.appendChild(barbieContainer)
    })
}

const getBarbies = async () => {
    try {
        const response = await fetch('http://localhost:3001/barbie')
        const barbieData = await response.json()
        displayBarbies(barbieData)
    } catch (error) {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error)
    }
}

getBarbies()


