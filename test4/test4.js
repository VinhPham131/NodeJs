const users = [
    {
        name: "Vinh",
        age: "20",
        address: "Hanoi"
    },
    {
        name: "Hoa",
        age: "22",
        address: "Hanoi"
    },
    {
        name: "Hue",
        age: "23",
        address: "Hanoi"
    }
]

for (let {name, age, address} of users) {
    document.getElementById('card').innerHTML += 
        `<div>
            <h1>${name}</h1>
            <p>${age}</p>
            <p>${address}</p>
        </div>`;
}