const url = 'https://67190e6d7fc4c5ff8f4c42d6.mockapi.io/hotel';

//Add Hotel
function saveHotel() {
    return new Promise((resolve, reject) => {
        const name = document.getElementById('name').value;
        const image = document.getElementById('image').value;
        const price = document.getElementById('price').value;
        const location = document.getElementById('location').value;
        const description = document.getElementById('description').value;

        const newHotel = {
            name : name,
            img : image,
            price : price,
            location : location,
            description : description
        };

        fetch(url, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(newHotel)
        })
            .then(response => {
                if(!response.ok) {
                    throw new Error('Error');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
                window.location.reload();
                $('#exampleModal').modal('hide');
                clearForm();
                
            })
            .catch(error => {
                reject(error);
            });
    });   
}

function clearForm() {
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('image').value = '';
    document.getElementById('price').value = '';
    document.getElementById('location').value = '';
    document.getElementById('description').value = '';
}


// Remove Hotel
function removeHotel(id) {
    return new Promise((resolve, reject) => {
        fetch(`${url}/${id}`, {
            method : 'DELETE'
        })
            .then(response => {
                if(!response.ok) {
                    throw new Error('Error');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
                window.location.reload();
            })
            .catch(error => {
                reject(error);
            });
    });
}

// Update Hotel
function updateHotel(id) {
    fetch(`${url}/${id}`)
        .then(response => {
            if(!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('idd').value = data.id;
            document.getElementById('named').value = data.name;
            document.getElementById('imaged').value = data.img;
            document.getElementById('priced').value = data.price;
            document.getElementById('locationd').value = data.location;
            document.getElementById('descriptiond').value = data.description;
            document.getElementById("idd").setAttribute("disabled", "disabled");

            document.getElementById("div_button").innerHTML = `
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="submitUpdate(${id})">Save Changes</button>
        `;
        console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}

function submitUpdate(id) {
    const updatedHotel = {
        name: document.getElementById('named').value,
        img: document.getElementById('imaged').value,
        price: document.getElementById('priced').value,
        location: document.getElementById('locationd').value,
        description: document.getElementById('descriptiond').value
    };

    return new Promise((resolve, reject) => {
        fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedHotel)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error updating hotel data");
            }
            return response.json();
        })
        .then(data => {
            resolve(data);
            window.location.reload();
            $('#updateHotel').modal('hide'); 
        })
        .catch(error => {
            reject(error);
        });
    });
}



