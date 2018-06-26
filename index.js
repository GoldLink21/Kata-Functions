function add(x1,x2){
    return x1+x2;
}

function multiply(x1,x2){
    var total=0;
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
    if(n===0)
        return 0;
    if(n===1)
        return 0;
    if(n===2)
        return 1;
    
    return add(fibonacci(add(n,-1)),fibonacci(add(n,-2)));
}