const url = 'https://67190e6d7fc4c5ff8f4c42d6.mockapi.io/hotel';

//Search
document.getElementById('btn_search').addEventListener('click', function(event) {
    event.preventDefault();
    const search = document.getElementById('search').value.toLowerCase();
    const result = document.getElementById('result');
    fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(data => {
            result.innerHTML = '';
            data.forEach(hotel => {
                if(hotel.name.toLowerCase().includes(search)) {
                    result.innerHTML += `
                        <div class="card">
                            <img src="${hotel.img}" id = "img">
                            <div class="card-body">
                                <h1 class="card-title">${hotel.name}</h1>
                                <p class="card-text">${hotel.description}</p>
                                <p class="card-text">Price: ${hotel.price}</p>
                                <p class="card-text">Location: ${hotel.location}</p>
                            </div>
                        </div>
                    `;   
                }
            });
        })
        .catch(error => {
            console.log(error);
        });
});