function mayor(a, b, c) {
    if (a >= b && a >= c) {
        return a + " es el número mayor";
    } else if (b >= a && b >= c) {
        return b + " es el número mayor";
    } else {
        return c + " es el número mayor";
    }
}

console.log(mayor(1, 6, 3)); 
