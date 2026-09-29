// 1
function hospitalDetails(patient) {
    console.log(patient.name);
    console.log(patient.age);
    console.log(patient["disease"]);
    console.log(patient.address);
    console.log(patient["treatment"]);
}

let patient = {
    name: "Rahul",
    age: 25,
    disease: "Fever",
    address: "Hyderabad",
    treatment: {
        doctor: "Dr. Ravi",
        room: "205",
        hospital: "Sunrise Hospital",
        fee: {
            consultationFee: 1000,
        }
    }
};

hospitalDetails(patient);

// 2
 function restaurantDetails(restaurant) {
    console.log(restaurant.name);
    console.log(restaurant.location);
    console.log(restaurant["type"]);
    console.log(restaurant.owner);
    console.log(restaurant["menu"]);
}

let restaurant = {
    name: "Spice Garden",
    location: "Hyderabad",
    type: "South Indian",
    owner: "Ramesh",
    menu: {
        starter: "Paneer Tikka",
        mainCourse: "Biryani",
        dessert: "Gulab Jamun",
        price: {
            total: 650,
        }
    }
};

restaurantDetails(restaurant);