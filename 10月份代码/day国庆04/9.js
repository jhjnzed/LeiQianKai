// 29.有个人想知道，一年之内一对兔子能繁殖多少对？
// 于是就筑了一道围墙把一对兔子关在里面。已知一对兔子每个月可以生一对小兔子，而一对兔子从出生后第3个月起每月生一对小兔子。
// 假如一年内没有发生死亡现象，那么，一对兔子一年内（12个月）能繁殖成多少对？ （不要看这些文字）这是著名的斐波那契数列
// //兔子的规律为数列，1，1，2，3，5，8，13，21    斐波那契系数 前两个数的和等于后一个  (拔高题)





 function f(x){return x<1?0:(x<3?1:f(x-1)+f(x-2));}

 for(var i=0;i<12;i++){
    console.log(f(i) + ", ");
}