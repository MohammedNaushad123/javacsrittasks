//1
class Hospital {

    display() {

        console.log("my name is    : ", this.p_name);
        console.log("my Age is     : ", this.age);
        console.log("my Disease is : ", this.disease);
    }

}

let p1 = new Hospital()

p1.p_name = "Hero"
p1.age = 21
p1.disease = "Fever"

console.log("----patient 1 details-----");

p1.display()


let p2 = new Hospital()

p2.p_name = "Zero"
p2.age = 25
p2.disease = "Cold"

console.log("----patient 2 details-----");

p2.display()

// 2
class Airplane {

    display() {

        console.log("my model is    : ", this.model);
        console.log("my airline is  : ", this.airline);
        console.log("my seats are   : ", this.seats);

    }

}

let a1 = new Airplane()

a1.model = "Boeing 737"
a1.airline = "IndiGo"
a1.seats = 180

console.log("----airplane 1 details-----");

a1.display()


let a2 = new Airplane()

a2.model = "Airbus A320"
a2.airline = "Air India"
a2.seats = 186

console.log("----airplane 2 details-----");

a2.display()

//3
class Bank {

    // creating instance variable and assigning the values to them

    set_Data(accountName, accountNumber, balance) {

        this.accountName = accountName
        this.accountNumber = accountNumber
        this.balance = balance

    }

    displayDetails() {

        console.log("Account Name is   : ", this.accountName);
        console.log("Account Number is : ", this.accountNumber);
        console.log("Balance is        : ", this.balance);

    }

}

let user1 = new Bank()

user1.set_Data("Hero", 123456, 50000)

console.log("------bank 1 details-----");

user1.displayDetails()


let user2 = new Bank()

user2.set_Data("Zero", 789012, 75000)

console.log("----bank 2 details-------");

user2.displayDetails()

//4
class Bakery {

    // creating instance variable and assigning the values to them

    set_Data(productName, quantity, price) {

        this.productName = productName
        this.quantity = quantity
        this.price = price

    }

    displayDetails() {

        console.log("Product Name is : ", this.productName);
        console.log("Quantity is     : ", this.quantity);
        console.log("Price is        : ", this.price);

    }

}

let b1 = new Bakery()

b1.set_Data("Cake", 2, 500)

console.log("------bakery 1 details-----");

b1.displayDetails()


let b2 = new Bakery()

b2.set_Data("Bread", 5, 200)

console.log("----bakery 2 details-------");

b2.displayDetails()


//5
class CarCompany {

    // creating instance variable and assigning the values to them

    set_Data(companyName, model, price) {

        this.companyName = companyName
        this.model = model
        this.price = price

    }

    displayDetails() {

        console.log("Company Name is  : ", this.companyName);
        console.log("Model is         : ", this.model);
        console.log("Price is         : ", this.price);

    }

}

let c1 = new CarCompany()

c1.set_Data("Toyota", "Fortuner", 4000000)

console.log("------car company 1 details-----");

c1.displayDetails()


let c2 = new CarCompany()

c2.set_Data("Hyundai", "Creta", 2000000)

console.log("----car company 2 details-------");

c2.displayDetails()