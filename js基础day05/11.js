// 11. 本金10000元存入银行，年利率是千分之三，每过1年，将本金和利息相加作为新的本金。计算5年后，获得的本金是多少？


var money = 10000;
var mun = 0;
for (var i= 1; i<= 5; i++) {
  money *= 1.003;
  mun += money;
}
console.log(money)

