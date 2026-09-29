// 1.Arrow Function — Without Input & Without Return
let mobile = {
    brand: "Samsung",
    model: "S24",
    price: 50000,

    display: () => {
        console.log(mobile.brand);
    }
}

mobile.display();

// 2.Arrow Function — With Input & Without Return
let laptop = {
    brand: "HP",
    model: "Pavilion",
    price: 60000
}

let display = (a) => {
    console.log(a.brand);
    console.log(a.price);
}

display(laptop);

// 3.Arrow Function — Without Input & With Return
let hotel = {
    name: "Taj Hotel",
    location: "Hyderabad",
    rooms: 100,

    display: () => {
        return hotel.name;
    }
}

let result = hotel.display();
console.log(result);

// 4.Arrow Function — With Input & With Return
let car = {
    brand: "BMW",
    model: "X5",
    price: 8000000
}

let disc = (a) => {
    return a.model;
}

let ans = display(car);
console.log(ans);