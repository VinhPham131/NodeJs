const url = 'https://67190e6d7fc4c5ff8f4c42d6.mockapi.io/hotel';

// Function to get the hotel ID from the URL
function getHotelIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function fetchHotelDetails(hotelId) {
    return new Promise((resolve, reject) => {
        fetch(`${url}/${hotelId}`)
            .then(response => {
                if (!response.ok) {
                    reject("Error fetching hotel details");
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
function displayHotelDetails() {
    const hotelId = getHotelIdFromUrl();
   

    // Call fetchHotelDetails and handle the response with Promise chaining
    fetchHotelDetails(hotelId)
        .then(data => {
            const details = `
                <div>
                    <img src="${data.img}" id = "img">
                </div>
                <div class="div_des">
                    <h2 class="name" >ID: ${data.id}</h2>
                    <h2 class="name" >${data.name}</h2>
                    <p class = "price"><strong>Price:</strong> ${data.price}</p>
                    <p class="location"><strong>Location:</strong> ${data.location}</p>
                    <p><strong>Description:</strong> ${data.description}</p>
                </div>
            `;
            document.getElementById('div_details').innerHTML = details;
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById('div_details').innerHTML = "<p>Error loading hotel details.</p>";
        });
}

displayHotelDetails();