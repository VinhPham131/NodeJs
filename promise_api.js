function getHotel() {
    return new Promise((resolve, reject) => {
        fetch('https://67190e6d7fc4c5ff8f4c42d6.mockapi.io/hotel')
            .then(response => {
                if(!response.ok) {
                    throw new Error('Failed to fetch data');
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
    .then(hotel => {
        console.log("List Hotel: ", hotel);
        console.log("Total Hotel: ", hotel.length);
    })
    .catch(error => {
        console.log("Error: ", error);
    });