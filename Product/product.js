
function getProduct() {
    return new Promise((resolve, reject) => {
        fetch("https://656d3ffbbcc5618d3c22ee91.mockapi.io/product")
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
getProduct()
    .then(data => {
        data.forEach(product => {
            document.getElementById("card").innerHTML += card.innerHTML += `
            <div>
                <h1>${product.name}</h1>
                <img src="${product.image1}">
                <img src="${product.image2}">
                <img src="${product.image3}">
                <p>${product.price}</p>
                <p>${product.tag}</p>
                <p>${product.id}</p>
            </div>
            `
        });
    })
    .catch(error => {
        console.log("Error: ", error);
    });
