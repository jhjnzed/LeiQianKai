// 3. 小区楼号范围1-30，但是由于风水讲究，小区没有包含4、7、14、18、24的楼号，请为小区楼号报号。



// 分析  循环   4、7、14、18、24 跳过 

var i = 1;  // 初始值

while (i <= 30) {  // 循环
    if (i != 4 && i != 7 && i != 14 && i != 18 && i != 24) {   //  判断没有这些号  直接输出
       
        console.log(i)
    }

i++     // 步进
     
} 