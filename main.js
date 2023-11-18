function fibonacci(n) {
    let a = 0;
    let b = 1;
    for (let i = 1; i <= n; i++) {
        console.log(a);
        let tmp = a;
        a = b;
        b = tmp + b; 
    }
    return a;
}

console.log(fibonacci(15));