// 3.   数组转换为字符串
// 需求：
// 将数组 ['red', 'green', 'blue', 'pink'] 转换为字符串，并且用 | 或其他符号分割

// ① 声明一个变量存储数组

var arr=['red', 'green', 'blue', 'pink'];

// ② 声明一个变量存储转换好的字符串

var n=String(arr)

// ③ 声明一个变量表示分隔符

var l="|";
// ④ 遍历数组，在每一项元素后面加上一个分隔符

for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]+"|");//⑤ 打印结果

}