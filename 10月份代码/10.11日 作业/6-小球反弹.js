// 6. 一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，
// 编程实现获取它在 第10次落地时，共经过多少米？第10次反弹多高？


// 分析 因为 每次 落地反跳  高 = 高 *0.5  一半  然后循环10次

var a =1;  // 初始值
var b =100;   //  高度100m
var c =0;   // 定义 一个 累加  变量  经过多少米
while(a<=10){

b*=0.5;  
c+=b*2;   //   第一次从100米高落下,以后都是弹上落下所以乘以2
a++  
}console.log(c) 
console.log(b)


