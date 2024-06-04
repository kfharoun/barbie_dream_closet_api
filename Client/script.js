



document.addEventListener('DOMContentLoaded', () => {
    const productName = document.getElementById("productName")
    const releaseYear = document.getElementById("releaseYear")
    const description = document.getElementById("description")
    const barbieInfo = document.querySelector('.barbies')
    const displayBarbies = (barbies) => {
        barbieInfo.innerHTML = ''
        barbies.forEach(barbie => {
            const barbieContainer = document.createElement('div')
            const barbieLink = document.createElement('a')
            barbieLink.href = `#`
            barbieLink.onclick = () => displayPopup(barbie._id)
            barbieLink.innerHTML = `
                <img src="${barbie.image}" alt="${barbie.name}" class="barbiePic ${barbie.name}">
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
            console.error('There was a problem with the fetch operation:', error)
        }
    }

    const displayPopup = async (barbieId) => {
        try {
            const response = await fetch(`http://localhost:3001/barbie/${barbieId}`)
            const barbieDetails = await response.json()
            productName.textContent = barbieDetails.name
            releaseYear.textContent = barbieDetails.releaseYear
            description.textContent = barbieDetails.description

            document.querySelector(`.barbieDesc`).style.display = `block`

            const closetButton = document.getElementById('closetLink')
            closetButton.addEventListener('click', function() {
                window.location.href=`closetIndex.html?id=${barbieId}`
            })
        } catch (error) {
            console.error(`unable to fetch barbie details:`, error)
        }
    }

    getBarbies()

    const popupClose = document.getElementById(`closeDesc`)
    popupClose.addEventListener(`click`, function(){
    document.querySelector(`.barbieDesc`).style.display=`none`
})
})
