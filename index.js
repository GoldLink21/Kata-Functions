function add(x1,x2){
    return x1+x2;
}

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

function factorial(n){
    if(n>0)
        return multiply(n,factorial(add(n,-1)));
}

function fibonacci(n){
    if(n<=1)
        return 0;
        
    if(n===2)
        return 1;
    
    return add(fibonacci(add(n,-1)),fibonacci(add(n,-2)));
}

function fib(n){
    var totals=[0,1];
    for(let i=1;i<n;i++){
        totals.push(add(totals[i],totals[i-1]))
    }
    return totals[add(n,-1)];
}

function fibArr(n){
    var totals=[0,1];
    for(let i=1;i<n;i++){
        totals.push(totals[i]+totals[i-1])
        
    }
    return totals;
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
text('Factorial 4!',factorial(4));
text('Fibonacci 8', fib(8));