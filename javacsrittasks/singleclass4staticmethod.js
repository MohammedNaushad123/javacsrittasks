class Mathematics {

    // 1. Without Input & Without Return
    static add() {
        let a = 10;
        let b = 20;
        console.log("Addition =", a + b);
    }

    // 2. With Input & Without Return
    static sub(a, b) {
        console.log("Subtraction =", a - b);
    }

    // 3. Without Input & With Return
    static mul() {
        let a = 5;
        let b = 4;
        return a * b;
    }

    // 4. With Input & With Return
    static div(a, b) {
        return a / b;
    }
}

// Calling static methods

Mathematics.add();

Mathematics.sub(20, 5);

console.log("Multiplication =", Mathematics.mul());

console.log("Division =", Mathematics.div(20, 5));