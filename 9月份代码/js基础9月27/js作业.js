// 1.利用JavaScript打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位 数字立方和等于该数本身。
// for (var num = 100; num < 1000; num++) {
//     var ge = num % 10;//个位     
//     var shi = parseInt((num / 10) % 10)//十位;
//     var bai = parseInt(num / 100)//百位
//     if (num == (shi * shi * shi) + (ge * ge * ge) + (bai * bai * bai)) {
//         console.log(num);
//     }
// }
//2.求任意三个数字的最大值和最小值
// var a = 90, b = 12, c = 50;
// var max = a > b ? (a > c ? a : c) : (b > c ? b : c);
// var min = a < b ? (a < c ? a : c) : (b < c ? b : c);
// console.log(max);
// console.log(min);

//3. 给一个数字赋值给一个变量num1，求出是奇数还是偶数
// var a=10,num;
// num=a%2;
// if(num==0){
//     console.log("是偶数");
// }
// else{
//     console.log("是奇数");
// }

// 4. 利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数
// var a=54.66,b;
// b=parseInt(a)-a;
// if(b<0){
//     console.log(a+"是小数")
// }
// else{
//     console.log(a+"不是小数")
// }

// 5. 提示用户输入年龄，若用户的年龄大于等于18岁，则弹出“恭喜您，您已经成年”，否则以弹出框的方式提示用户年龄太小。
// var num=200;
// if(num>=18)
// {
//     console.log("恭喜您，您已经成年")
// }
// else{
//     console.log("用户年龄太小");
// }


// 6. 利用JavaScript完成如下功能：判断如果a>60，则b=1；如果a>70，则b=2；
//如果a>80，则b=3；如果a>90，则b=4 ,在页面弹出对应b的值
// var a=61;
// var b;
// if(a>90){
//     b=4
// }
// else if(a>80){
//     b=3
// }
// else if(a>70){
//     b=2
// }
// else if (a>60){
//     b=1
// }
// console.log(b)

// 7. 利用JavaScript编写程序：通过用户输入的年龄判断是哪个年龄段的人
// （儿童：年龄＜14；青少年：14<=年龄＜24；青年：24<年龄＜40; 中年：40＜=年龄＜60; 老年：年龄>=60），

// var age = 50;
// if (age < 14) {
//     console.log("儿童");
// }
// else if (age >= 60) {
//     console.log("老年")
// }
// else if (40 <= age < 60) {
//     console.log("中年")
// }
// else if (24 < age < 40) {
//     console.log("青年")
// }
// else if (14 <= age < 24) {
//     console.log("青少年");
// }

// 8. 接收班长口袋里的钱数？若大于等于2000，请大家吃西餐。若小于2000，大于等于1500，请大家吃快餐。
//  若小于1500，大于等于1000，请大家喝饮料。若小于1000，大于等于500，请大家吃棒棒糖。否则提醒班长下次把钱带够

// var money=1;
// if(money<1000&&money>=500){
//     console.log("请大家吃棒棒糖");
// }
// else if (money<1500&&money>=1000){
//     console.log("请大家喝饮料");
// }
// else if (money<2000&&money>=1500){
//     console.log("请大家吃快餐");
// }
// else if(money>=2000){
//     console.log("请大家吃西餐");
// }
// else{
//     console.log("班长下次把钱带够");
// }

// 9. 分数转换,给一个分数，判定等级。大于等于90  A，大于等于80小于90  
// B，大于等于70小于80  C ，大于等于60小于70 D，小于60 E
// var num=20;1
// if(num>=90){
//     console.log("A");
// }
// else if (num>=80&&num<90){
//     console.log("B");
// }
// else if (num>=70&&num<80){
//     console.log("C");
// }
// else if (num>=60&&num<70){
//     console.log("D");
// }
// else if (num<60){
//     console.log("E");
// }

// 10. 获取当前时间，判断今年是否为闰年。两种方法判断 
//     1）判断今年是否为闰年；  能被400整除 或 被4整除但不能被100整除
// var time=1022;
// var demo1=time%400;
// var demo2=time%4;
// var demo3=time%100;

// if( demo1==0 || demo2 == 0 && demo3 !=0){
//     console.log("今年是闰年");
// }
// else{
//     console.log("今年不是闰年")
// }

// 11. 本金10000元存入银行，年利率是千分之三，每过1年，
// 将本金和利息相加作为新的本金。计算5年后，获得的本金是多少？
// var money=10000
// for (var i =0;i<5;i++){
//     num*=1.003
// }
// console.log(num)    //懵逼中
// 12. 根据输入的数字，判断如果是1-5打印工作日，如果是6，7打印休息日。
// var num=5;
// if(num>0 && num<6){
//     console.log("工作日");
// }
// else if (num==6||num==7){
//     console.log("休息日");
// }

// 13. 录入姓名和性别根据输入的姓名，性别，
// 打印欢迎XX先生/女士。（性别用0和1区别。0表示女士，1表示男士）

// var obj={
//     name:"李四",
//     sex:0,
// }
// if (obj.sex==0){
//     console.log("欢迎"+obj.name+"女士")
// }
// else if (obj.sex==1){
//     console.log("欢迎"+obj.name+"男士")
// }

// 14. 输出该数字打头的一个成语，视为你今天的状态
//     1：一帆风顺
//     2：二话不说
//     3：三心二意
//     4：四面楚歌
//     5：五湖四海
//     6：六亲不认
//     7：七上八下

// var status=1;
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);

// 15. 键盘录入学生考试成绩，使用if语句判断成绩等级，并打印出来。

// var num=20;
// if(num>=90){
//     console.log("A");
// }
// else if (num>=80&&num<90){
//     console.log("B");
// }
// else if (num>=70&&num<80){
//     console.log("C");
// }
// else if (num>=60&&num<70){
//     console.log("D");
// }
// else if (num<60){
//     console.log("E");
// }

// 16. 录入一个整数,判断它能否被3,5,7整除,并输出以下信息
//     (1)能同时被3,5,7整除
//     (2)能被其中两个数整除(要指出那两个数)
//     (3)只能被其中一个数整除(指出那一个)
//     (4)不能被3,5,7任一个整除

// var num=22;
// if (num%3==0 && num%5==0 && num%7==0){
//     console.log("能同时被3,5,7整除");
// }
// else if (num%3==0 && num%5==0){
//     console.log("能同时被3,5整除")
// }
// else if (num%3==0 && num%7==0){
//     console.log("能同时被3,7整除")
// }
// else if (num%5==0 && num%7==0){
//     console.log("能同时被3,7整除")
// }
// else if (num%3!=0 && num%5!=0 && num%7!=0){
//     console.log("不能被3,5,7任一个整除")
// }

// 17. 录入两个整数a和b,若a+b大于100,则输出a+b大于100的部分,否则输出两数之和.
// var a=500
// var b=20
// var c=a+b/100
// var d=parseFloat(c)
// if(c>100){
//     console.log(d)
// }

//18. 输入三角形的三边，根据输入的三角形的三边判断是否能组成三角形，如果可以进一步 判断三角形的类型
// 等边三角形(三边相等) 等腰三角形(两边相等)  直角三角形(a平方+b平方=c平方)  其他三角形（不满足上面的）

// var  a=10;
// var b=15;
// var c=15;
// if (a+b>c&&a-b<c) 
// {
//     if (a==b && b==c) 
//     {
//         console.log('等边三角形');
//     }
//     else if (a==b || a==c || b==c) 
//     {
//         console.log('等腰三角形');
//     }
//     else if (a*a+b*b == c*c) 
//     {
//         console.log('直角三角形');
//     }
//     else
//     {
//         console.log('其他三角形');
//     }
// }
// else
// {
//     console.log("不能组成三角形");
// }

//19. 录入一个三位数，按逆序打印出各位数字。例如原数字为321，应输出123。

// var num = 915;
// var ge =num % 10;
// var shi = (num - ge) / 10 % 10;
// var bai = (num - ge - shi * 10) / 100;
// console.log(num+'的逆顺序为'+ge+shi+bai);

// 20.	请编写程序，要求输入身高，体重后，输出体质指数
//     测量一个人的体质指数，体质指数（BMI）=体重（kg）÷身高^2（m），
//     成人的BMI数值：
//     过轻：低于18.5
//     正常：[18.5,23.9]
//     过重：[24,27]
//     肥胖：[28,32]
//     非常肥胖, 高于32


// var hight=180;
// var wight=80;
// var m=hight/100;
// var BMI=wight/(m*m);
// if (BMI>32) 
// {
//     console.log("体质非常肥胖");
// }else if (BMI>28) 
// {
//     console.log("体质肥胖");
// }else if (BMI>24) 
// {
//     console.log("体质过重");
// }else if (BMI>18.5) 
// {
//     console.log("体质正常");
// }else
// {
//     console.log("体质过轻");
// }