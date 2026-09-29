//1. Anonymous Function — Without Input & Without Return
let restaurant = {
    name: "Paradise",
    location: "Hyderabad",
    rating: 4.5,

    display: function() {
        console.log(restaurant.name);
    }
}

restaurant.display();

// 2.Anonymous Function — With Input & Without Return
let product = {
    name: "iPhone",
    price: 70000,
    brand: "Apple"
}

let display = function(a) {
    console.log(a.name);
    console.log(a.price);
}

display(product);

// 3.Anonymous Function — Without Input & With Return
let movie = {
    name: "RRR",
    language: "Telugu",
    year: 2022,

    display: function() {
        return movie.name;
    }
}

let result = movie.display();
console.log(result);

// 4.Anonymous Function — With Input & With Return
let bike = {
    brand: "Royal Enfield",
    model: "GT 650",
    price: 350000
}

let disc = function(a) {
    return a.model;
}

let ans = display(bike);
console.log(ans);