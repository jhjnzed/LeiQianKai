// 5.打印100以内 7的倍数(用while实现)


// 分析 先循环 再对7 求余===0  

//定义初始值
var i =1;
//循环  
while(i<=100){
    if(i%7===0){  // 判断7倍数
  console.log(i)
    }
    i++        // 步进
}