// 1
let bakery = {
    Branch1: {
        CakeDetails: {
            name: "Chocolate Cake",
            price: 500,
            details: {
                category: "Birthday Cake",
                ingredients: {
                    main: {
                        flour: "Maida",
                        flavor: "Chocolate"
                    },
                    toppings: {
                        type: "Cream",
                        flavor: "Vanilla"
                    },
                    size: "1 KG"
                }
            }
        },

        CakeDetailsS2: {
            name: "Red Velvet Cake",
            price: 700,
            details: {
                category: "Premium Cake",
                ingredients: {
                    main: {
                        flour: "Maida",
                        flavor: "Red Velvet"
                    },
                    toppings: {
                        type: "Cream",
                        flavor: "Strawberry"
                    },
                    size: "1 KG"
                }
            }
        },

        CakeDetailsS3: {
            name: "Black Forest Cake",
            price: 600,
            details: {
                category: "Birthday Cake",
                ingredients: {
                    main: {
                        flour: "Maida",
                        flavor: "Chocolate"
                    },
                    toppings: {
                        type: "Cherry",
                        flavor: "Chocolate"
                    },
                    size: "1 KG"
                }
            }
        }
    }
}

// Accessing
console.log(bakery);
console.log(bakery.Branch1);
console.log(bakery.Branch1.CakeDetails);
console.log(bakery.Branch1.CakeDetailsS2);
console.log(bakery.Branch1.CakeDetailsS3);

console.log(bakery.Branch1["CakeDetails"].name);
console.log(bakery.Branch1["CakeDetails"]["details"]);
console.log(bakery.Branch1["CakeDetails"]["details"].ingredients);
console.log(bakery.Branch1["CakeDetails"]["details"].ingredients.main);

// Updating
bakery.Branch1.CakeDetailsS2.name = "Red Velvet Premium Cake";

console.log(bakery.Branch1.CakeDetailsS2.name);

// Deleting
console.log(
    "Before deleting",
    bakery.Branch1.CakeDetailsS3.details.ingredients.toppings
);

delete bakery.Branch1.CakeDetailsS3.details.ingredients.toppings;

console.log(
    "After deleting",
    bakery.Branch1.CakeDetailsS3.details.ingredients
);

// 2
let carCompany = {
    Toyota: {
        Car1: {
            name: "Fortuner",
            year: 2026,
            details: {
                engine: {
                    type: "Diesel",
                    power: "204 HP"
                },
                features: {
                    safety: "Airbags, ABS",
                    comfort: "AC, Sunroof"
                },
                price: 5000000
            }
        },

        Car2: {
            name: "Innova",
            year: 2026,
            details: {
                engine: {
                    type: "Petrol",
                    power: "172 HP"
                },
                features: {
                    safety: "Airbags, ABS",
                    comfort: "AC, Cruise Control"
                },
                price: 3000000
            }
        },

        Car3: {
            name: "Glanza",
            year: 2026,
            details: {
                engine: {
                    type: "Petrol",
                    power: "90 HP"
                },
                features: {
                    safety: "Airbags, ABS",
                    comfort: "AC, Music System"
                },
                price: 1000000
            }
        }
    }
}

// Accessing
console.log(carCompany);
console.log(carCompany.Toyota);
console.log(carCompany.Toyota.Car1);

console.log(carCompany.Toyota["Car1"].name);
console.log(carCompany.Toyota["Car1"]["details"]);
console.log(carCompany.Toyota["Car1"]["details"].engine);
console.log(carCompany.Toyota["Car1"]["details"].features);

// Updating
carCompany.Toyota.Car2.name = "Innova Hycross";

console.log(carCompany.Toyota.Car2.name);

// Deleting
console.log(
    "Before deleting",
    carCompany.Toyota.Car3.details.features.comfort
);

delete carCompany.Toyota.Car3.details.features.comfort;

console.log(
    "After deleting",
    carCompany.Toyota.Car3.details.features
);


// 3.

let library = {
    SectionA: {
        Book1: {
            name: "Python Programming",
            author: "John",
            details: {
                subject: "Programming",
                languages: {
                    programming: "Python",
                    level: "Beginner"
                },
                price: 500
            }
        },

        Book2: {
            name: "Java Programming",
            author: "James",
            details: {
                subject: "Programming",
                languages: {
                    programming: "Java",
                    level: "Intermediate"
                },
                price: 600
            }
        },

        Book3: {
            name: "Web Development",
            author: "David",
            details: {
                subject: "Web",
                languages: {
                    programming: "HTML, CSS, JavaScript",
                    level: "Beginner"
                },
                price: 450
            }
        }
    }
}

// Accessing
console.log(library);
console.log(library.SectionA);
console.log(library.SectionA.Book1);
console.log(library.SectionA.Book2);
console.log(library.SectionA.Book3);

console.log(library.SectionA["Book1"].name);
console.log(library.SectionA["Book1"]["details"]);
console.log(library.SectionA["Book1"]["details"].languages);

// Updating
library.SectionA.Book2.name = "Advanced Java Programming";

console.log(library.SectionA.Book2.name);

// Deleting
console.log(
    "Before deleting",
    library.SectionA.Book3.details.languages
);

delete library.SectionA.Book3.details.languages.level;

console.log(
    "After deleting",
    library.SectionA.Book3.details.languages
);