// 24.一个加油站为了鼓励车主多加油，所以加的多有优惠。
//       92号汽油，每升6元；如果大于20升，那么超出部分每升5.9；
//       95号汽油，每升7元；如果大于30升，那么超出部分每升6.95
//       编写JS程序，用户输入自己的汽油编号，然后输入自己加多少升，弹出价格。



var x = 25
if(x >=20){
console.log( (x-20)*5.9+120)
}else {
    console.log(x*5)
}


var a = 35
if(a>=30){
    console.log((a-30)*6.95+210)
}else{
    console.log(a*7)
}