// 需求: 计算1+1/4+1/9+….+1/400，并且在控制台输出结果

//因为  1/1+ 1/4 +1/9 ... +1/400 =  1+ 1/2^2 +  1/3^2 +  1/20^2  循环20次   


var sum= 0


for (i = 1; i <= 20; i++) {
  
    sum += 1 / (i * i);     //因为  1/1+ 1/4 +1/9 ... +1/400 =  1+ 1/2^2 +  1/3^2 +  1/20^2
}

console.log(sum);

