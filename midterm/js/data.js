url = 'https://67190e6d7fc4c5ff8f4c42d6.mockapi.io/hotel'

function getHotel() {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error("Error");
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
getHotel()
    .then(data => {
        const hotelCard = document.getElementById('div_card');
        data.forEach(hotel => {
            const card = `
                <div class = "div_card">
                    <h2>${hotel.id}</h2>
                    <h2>${hotel.name}</h2>
                    <img src="${hotel.img}" id = "card_img">
                    <p>${hotel.price}</p>
                    <p>${hotel.location}</p>
                    <p>${hotel.description}</p>
                    <button id="btn_edit" data-toggle="modal" data-target="#updateHotel" onClick="updateHotel('${hotel.id}')">Update</button>
                    <button id = "btn_remove" onClick = "removeHotel(${hotel.id})">Delete</button>
                    <a href="detail.html?id=${hotel.id}" class="btn_view">View More</a>
                </div>
            `;
            hotelCard.innerHTML += card;
        });
    })

