function Fibonacci(fiboNo) {
    var a = 1, b = 1;
    console.log(a);
    for (var i = 2; b <= fiboNo; i++) {
        console.log(b);
        var next = a + b;
        a = b;
        b = next;
    }
}
var input = 21;
Fibonacci(input);
