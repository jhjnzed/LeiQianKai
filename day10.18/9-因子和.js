// 9. 写一个函数，该函数用于计算一个正数的因子和（比如6的因子和是1+2+3+6=12）


function sum(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {

            sum += i;
        }
    }
    return sum;
}
var num = 6;

console.log(sum(num));