
//1.display the digits in given number in reverse order
let n = 342;
while(n!=0){
    let ld = n%10;
    console.log("ld=",ld);
    n = parseInt(n/10);
    // console.log("n =",n); 
}

let a = 1687;
while(a!=0){
    let ld = a%10;
    console.log("ld=",ld);
    a = parseInt(a/10);
    console.log("n =",a); 
}

//2.count the digits in given number
let counts= 0
let a1 = 436
while(a1!=0){
    let ld = a1%10
    counts+=1
    a1 = parseInt(a1/10)
    
}
console.log("count of digit :",counts);


//3 find the sum of digits in given number
let n1 = 123
let sum = 0
while(n1!=0){
    let ld = n1%10
    console.log(ld);
    sum= sum+ld
    n1 = parseInt(n1/10)
}
console.log("sum of digit :",sum);


//4. reverse order number:
let n2 = 123
let rev = 0
while(n2!=0){
    let ld = n2%10
    rev = rev * 10+ld
    n2 = parseInt(n2/10)
}
console.log("reverse order :",rev);


// 5.check whether given number palindrome or not :
let n3 = 121
let newnum = n3
let revs = 0
while(n3!=0){
    let ld = n3%10
    revs = revs*10+ld
    n3 = parseInt(n3/10)
}
if(revs==newnum){
    console.log("Palindrome");
    
}
else{
    console.log("Not a Palindrome");
    
}

//6.display even numbers
let n4 = 256
while(n4!=0){
    let ld = n4%10
    if(ld%2==0){
        console.log("even digit :",ld);
        
    }
    n4 = parseInt(n4/10)
}


//7. display count of odd numbers :
let n5 = 123
let count = 0
while(n5!=0){
    let ld = n5%10
    if(ld%2!=0){
        count+=1
    }
        n5 = parseInt(n5/10)
}
console.log("Count of Odd Digits :",count);

//8.display the largest digit in given number
let n6 = 231
let largest = 0
while(n6!=0){
    let ld = n6%10
    if(ld>largest){
        largest=ld
    }
    n6 = parseInt(n6/10)
}
console.log("largest digit :",largest);


//9.display the smallest digit in given number
let n7 = 231
let small = 9
while(n7!=0){
    let ld = n7%10

    if(ld<small){
        small=ld
    }
    n7 = parseInt(n7/10)
}
console.log("smallest digit :",small);
