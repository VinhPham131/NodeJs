async function fetchProduct() {
    const response = await fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products');   
    const data = await response.json();

    const {createdAt, name, avatar} = data;
    const cloneProduct = {
        createdAt,
        name,
        avatar
    };
    cloneProduct.forEach(product => {
        const {createdAt, name, avatar} = product;
        document.getElementById('dcard').innerHTML += `
        `
    });
}

fetchProduct();