

// 需求: 求1~100以内(包含1和100)能同时被3，5整除的数的和，并将求出的和打印到控制台上.


var x=0
for(i=1;i<=100;i++){
    if(i%3==0&&i%5==0){
        x+=i
    }
}console.log(x)