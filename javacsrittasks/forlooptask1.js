// 1.Find the average of numbers from 1 to N.
// Example: If N = 5, calculate the average of 1, 2, 3, 4, 5.
let n1 = 5
let summ = 0
for(let i=1;i<=5;i+=1){
    summ=summ+i
    avg = summ/5
}
console.log(avg);

// 2.Find the sum of squares of numbers from 1 to N.
// Example: If N = 5, calculate 1² + 2² + 3² + 4² + 5².
let n2 = 5
let sum = 0
for(let i=1;i<=5;i++){
    sum+=i
console.log(i*2);   
}
console.log("sum of squares",sum);

// 3.Find the sum of cubes of numbers from 1 to N.
// Example: If N = 5, calculate 1³ + 2³ + 3³ + 4³ + 5³.
let n3 = 5
let sumi = 0
for(let i=1;i<=5;i++){
    sumi+=i
    console.log(i**3);  
}
console.log("sum of cubes",sum);

// 4.Calculate the power of a number without using the ** operator.
// Example: If base = 2 and power = 5, calculate 2 × 2 × 2 × 2 × 2.
let base = 2
let power = 5
let result = 1
for(let i=1;i<=power;i++){
    result=result*base
}
console.log(result);

// 5.Display the first N terms of the Fibonacci series.
// Example: If N = 7, display 0, 1, 1, 2, 3, 5, 8.
let n4 = 7
let a = 0
let b = 1
for(let i=1;i<=8;i++){
     console.log(a);
     c = a+b
     a = b
     b = c 
}

// 6.Display the first N terms of the series:
// 1, 1/2, 1/3, 1/4, ...
// Example: If N = 4, display 1, 1/2, 1/3, 1/4.
let n = 4
for(i=1;i<=n;i++){
    console.log("1/",i);
    
}
    
// 7.Display the first N terms of the series:
// 1, 11, 111, 1111, 11111, ...
// Example: If N = 5, display 1, 11, 111, 1111, 11111.
let n5 = 5
term = 0
for(let i=1;i<=n5;i++){
    term=term*10+1  
    console.log(term);   
}

// 8.Display the first N terms of the series:
// 1, 3, 9, 27, 81, ...
// Each term is obtained by multiplying the previous term by 3.
let n6 = 5
let num = 1
for(let i=1;i<=n6;i++){
    console.log(num);
    num=num*3
}

// 1.Print all numbers from 10 to 150 that are divisible by both 3 and 5.
for(let i=10;i<=150;i++){
    if(i%3==0 && i%5==0){
        console.log(i);
    }
}

// 2.Count how many numbers from 200 down to 50 are divisible by 7.
count = 0
for(let i=200;i>=50;i--){
    if(i%7==0){
        count+=1
    }
}
console.log(count);

// 3.Print numbers from 120 down to 20 that are not divisible by 5.
for(let i=120;i>=20;i--){
    if(i%5!=0){
        console.log(i);
        
    }
}

// 4.Find the average of all even numbers in the range from 10 to 100.
let count1 = 0
let sum1 = 0
for(i=10;i<=100;i++){
    if(i%2==0){
        count1+=1
        sum1+=i
        avg=sum1/count
    }
}
console.log(avg);


//5.Find the average of all factors of a given number.
let n7 = 5
let sums = 0
let counts = 0
for(let i=1;i<=n7;i++){
        if(n%i==0){
          sums+=i
         counts+=1  
        } 
    }
let  average = sums/counts       
console.log(average);
