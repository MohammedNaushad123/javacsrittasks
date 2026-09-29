// 1. Print 1–50, skipping multiples of 5.
for(let n=1; n<=50; n++){

    if(n%5==0){
        continue;
    }

    console.log(n);
}


// 2. Print 1–100, skipping odd numbers.
for(let n=1; n<=100; n++){

    if(n%2!=0){
        continue;
    }

    console.log(n);
}


// 3. Print 1–100, skipping multiples of both 4 and 6.
for(let n=1; n<=100; n++){

    if(n%4==0 && n%6==0){
        continue;
    }

    console.log(n);
}


// 4. Print 1–50, skipping numbers between 20 and 30.
for(let n=1; n<=50; n++){

    if(n>=20 && n<=30){
        continue;
    }

    console.log(n);
}


// 5. Extract 7294058, skipping digit 5.
let n1 = 7294058;

while(n1!=0){

    let ld = n1%10;
    n1 = parseInt(n1/10);

    if(ld==5){
        continue;
    }

    console.log(ld);
}


// 6. Extract 8642397, print only odd digits.
let n2 = 8642397;

while(n2!=0){

    let ld = n2%10;
    n2 = parseInt(n2/10);

    if(ld%2==0){
        continue;
    }

    console.log(ld);
}


// 7. Extract 9038172, skip digit 0 and digit 8.
let n3 = 9038172;

while(n3!=0){

    let ld = n3%10;
    n3 = parseInt(n3/10);

    if(ld==0 || ld==8){
        continue;
    }

    console.log(ld);
}


// 8. Print 1–200, skipping numbers divisible by 4 or 7.
for(let n=1; n<=200; n++){

    if(n%4==0 || n%7==0){
        continue;
    }

    console.log(n);
}


// 9. Print 1–300, skipping numbers whose digit sum is greater than 10.
for(let n=1; n<=300; n++){

    let temp = n;
    let sum = 0;

    while(temp!=0){

        let ld = temp%10;
        sum = sum + ld;
        temp = parseInt(temp/10);
    }

    if(sum>10){
        continue;
    }

    console.log(n);
}


// 10. Print 1–500, skipping numbers containing digit 5.
for(let n=1; n<=500; n++){

    let temp = n;
    let hasFive = false;

    while(temp!=0){

        let ld = temp%10;
        temp = parseInt(temp/10);

        if(ld==5){
            hasFive = true;
            break;
        }
    }

    if(hasFive){
        continue;
    }

    console.log(n);
}



// ---------------------------------Break-----------------------------
// 1. Print numbers from 1–100 and stop when you reach 65.
for(let n=1; n<=100; n++){
    console.log(n);

    if(n==65){
        break;
    }
}


// 2. Find the first number divisible by both 6 and 8 between 1 and 100.
for(let n=1; n<=100; n++){
    if(n%6==0 && n%8==0){
        console.log(n);
        break;
    }
}


// 3. Find the first number between 100 and 200 whose digit sum is 12.
for(let n=100; n<=200; n++){

    let temp = n;
    let sum = 0;

    while(temp!=0){
        let ld = temp%10;
        sum = sum + ld;
        temp = parseInt(temp/10);
    }

    if(sum==12){
        console.log(n);
        break;
    }
}


// 4. Print numbers from 1–100 and stop at the first number divisible by 11.
for(let n=1; n<=100; n++){

    if(n%11==0){
        console.log(n);
        break;
    }

    console.log(n);
}


// 5. Find the first palindrome between 100 and 500.
for(let n=100; n<=500; n++){

    let temp = n;
    let rev = 0;

    while(temp!=0){
        let ld = temp%10;
        rev = rev*10 + ld;
        temp = parseInt(temp/10);
    }

    if(rev==n){
        console.log(n);
        break;
    }
}


// 6. Find the first perfect square between 20 and 100.
for(let n=20; n<=100; n++){

    for(let i=1; i<=n; i++){

        if(i*i==n){
            console.log(n);
            break;
        }
    }

    if(n==25){
        break;
    }
}


// 7. Find the first number between 1 and 100 having exactly 4 divisors.
for(let n=1; n<=100; n++){

    let count = 0;

    for(let i=1; i<=n; i++){

        if(n%i==0){
            count++;
        }
    }

    if(count==4){
        console.log(n);
        break;
    }
}


// 8. Print even numbers and stop after printing 7 even numbers.
let count = 0;

for(let n=1; n<=100; n++){

    if(n%2==0){
        console.log(n);
        count++;
    }

    if(count==7){
        break;
    }
}


// 9. Extract digits from 9274531 and stop when digit 4 is found.
let n = 9274531;

while(n!=0){

    let ld = n%10;
    console.log(ld);

    n = parseInt(n/10);

    if(ld==4){
        break;
    }
}


// 10. Find the first number between 50 and 100 divisible by both 5 and 7.
for(let n=50; n<=100; n++){

    if(n%5==0 && n%7==0){
        console.log(n);
        break;
    }
}


// ---------------------------continue + break----------------------------------
// 1. Print 1–100, skip multiples of 4, stop at 70.
for(let n=1; n<=100; n++){

    if(n==70){
        break;
    }

    if(n%4==0){
        continue;
    }

    console.log(n);
}


// 2. Print odd numbers, skip multiples of 3, stop at 50.
for(let n=1; n<=100; n++){

    if(n==50){
        break;
    }

    if(n%2==0 || n%3==0){
        continue;
    }

    console.log(n);
}


// 3. Extract 7482053, skip even digits, stop at 8.
let n4 = 7482053;

while(n4!=0){

    let ld = n4%10;
    n4 = parseInt(n4/10);

    if(ld==8){
        break;
    }

    if(ld%2==0){
        continue;
    }

    console.log(ld);
}


// 4. Extract 9361527, skip digit 2, stop at digit 5.
let n5 = 9361527;

while(n5!=0){

    let ld = n5%10;
    n5 = parseInt(n5/10);

    if(ld==5){
        break;
    }

    if(ld==2){
        continue;
    }

    console.log(ld);
}


// 5. Search from 30 to 100, skip non-multiples of 8,
// stop after finding the second multiple of 8.

let count2 = 0;

for(let n=30; n<=100; n++){

    if(n%8!=0){
        continue;
    }

    console.log(n);
    count2++;

    if(count2==2){
        break;
    }
}


// 6. Print numbers from 1–100,
// skip multiples of 5 and stop at the first multiple of 9.

for(let n=1; n<=100; n++){

    if(n%9==0){
        break;
    }

    if(n%5==0){
        continue;
    }

    console.log(n);
}


// 7. Print odd numbers from 1–100,
// skip multiples of 7 and stop at 75.

for(let n=1; n<=100; n++){

    if(n==75){
        break;
    }

    if(n%2==0 || n%7==0){
        continue;
    }

    console.log(n);
}


// 8. Extract 5826419,
// skip even digits and stop when digit 1 is found.

let n6 = 5826419;

while(n6!=0){

    let ld = n6%10;
    n6 = parseInt(n6/10);

    if(ld==1){
        break;
    }

    if(ld%2==0){
        continue;
    }

    console.log(ld);
}