function sumtwo(){
    let n1 = parseInt(document.getElementById("a1").value);
    let result = 0;
   for(let i=1;i<=n1;i+=1){
    result=result+10
   }
document.getElementById("a3").value=result   
}

function natural(){
    let n2 = parseInt(document.getElementById("b1").value);
    let sum = 0
    for(let i=1;i<=n2;i+=1){
        sum=sum+i
    }
document.getElementById("b2").value=sum    
}

function table(){
    let n3 = parseInt(document.getElementById("c1").value)
    let n=0;
    for(let i=1;i<=10;i+=1){
       n= n+ n3*i +"\n"
    }
document.getElementById("c2").value=n    
}

function factor(){
    let n4 = parseInt(document.getElementById("e1").value);
    let result1=1
    for(let i=n4;i>=1;i=i-1){
        result1=result1*i
    }
document.getElementById("e2").value=result1    
}

function fibonacci(){
    let n5 = parseInt(document.getElementById("f1").value);
    let n6 = parseInt(document.getElementById("f2").value);
    let result = ""
    for(let i=1;i<=10;i+=1){
        let   c = n5+n6
        result=result+c +"\n"
        n5 = n6
        n6 = c
    }
document.getElementById("f3").value=result    
}