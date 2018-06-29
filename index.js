function add(x1,x2){
    return x1+x2;
}

//I only used recursion here to ensure that multiplying
//by two negatives could be done much easier
function multiply(x1,x2){
    var total=x1;
    if(x2<0&&x1<0)
        return multiply(-x1,-x2);
    
    if(x1===0||x2===0)
        return 0;
    
    if(x2<0){
        total=x2;
        x2=x1;
        x1=total;
    }
    for(let i=1;i<x2;i++){
        total = add(total,x1);
    }
    return total;
}

function power(base,pow){
    var total=base;
    for(let i=1;i<pow;i++){
        total = multiply(total,base);
    }
    return total;
}

//Factorial with recursion
function factorial(n){
    if(n>0)
        return multiply(n,factorial(add(n,-1)));
}

//Factorial done with no recursion
function factorialNoRecursion(n){
    var total=n;
    for(let i=2;i<n;i++){
        total=multiply(total,i);
    }
    return total;
}

//Fibonacci with recursion
function fibonacci(n){
    if(n<=1)
        return 0;
        
    if(n===2)
        return 1;
    
    return add(fibonacci(add(n,-1)),fibonacci(add(n,-2)));
}

//Fibinacci without recusrsion
function fibonacciNoRecursion(n){
    var totals=[0,1];
    for(let i=1;i<n;i++){
        totals.push(add(totals[i],totals[i-1]))
    }
    return totals[add(n,-1)];
}

function text(title,text){
    var p = document.createElement('p');
    p.innerHTML = '<strong>'+title+'</strong><br>'+text;
    document.body.appendChild(p);
    console.log(title+': '+text);
}

text('Add funtion 2+4',add(2,4));
text('Multiply function 6*8',multiply(6,8));
text('Power 2^8',power(2,8));
text('Factorial 4!',factorialNoRecursion(4));
text('Fibonacci 8', fibonacciNoRecursion(8));