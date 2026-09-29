// 1.Static method — Without Input & Without Return
class ATM {
    static welcome() {
        console.log("Welcome to ATM");
    }
}

ATM.welcome();

// 2.Static method — With Input & Without Return
class Student {
    static displayName(name) {
        console.log("Student Name is : ", name);
    }
}

Student.displayName("Naushad");

// 3. Static method — Without Input & With Return
class Bank {
    static bankName() {
        return "SBI";
    }
}

console.log(Bank.bankName());


// 4.static method — With Input & With Return
class Calculator {
    static add(a, b) {
        return a + b;
    }
}

console.log(Calculator.add(10, 20));