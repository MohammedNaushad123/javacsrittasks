//1 Named Function — Without Input & Without Return
let car = {
    brand: "Toyota",
    model: "Fortuner",
    price: 4000000
}

car.display = function show() {
    console.log(car.brand);
}

car.display();

// 2. Named Function — With Input & Without Return
let car = {
    brand: "tata",
    model: "Nexon",
    price: 700000
}

function display(a) {
    console.log(a.brand);
    console.log(a.model);
}

display(car.price);

// 3.Named Function — Without Input & With Return
let bank = {
    name: "SBI",
    location: "Hyderabad",
    branches: 25,

    display: function show() {
        return bank.name;
    }
}

let result = bank.display();
console.log(result);

// 4.Named Function — With Input & With Return
let employee = {
    name: "Rahul",
    role: "Developer",
    salary: 50000
}

function display(a) {
    return a.name;
}

let ans = display(employee);
console.log(ans);
