// 找出一个数组中有哪些重复元素，并且这些元素各重复了几次,var arr = [0,1,3,1,1,5,5,8,8,8,0,9,5]

// 回顾 对象
// 对象: 无序数据的集合  我怎么找到对象中的值
// 对象的声明
// var obj = {
//     属性名: 属性值
// };

// var obj = {};

// obj.name = "23233";
// obj.name = "张三";
// console.log(obj);

// 对象中存数据 都是有属性 才能存
// 属性的名字能不能重复

// 对象中的属性 也叫键 
// 对象中的值 就叫值
// 键值对

// 在对象中 我们把键值对 叫做对象的特征 也叫属性
// 在对象中 我们把对象中的函数 叫做方法

// var arr = [0, 1, 3, 1, 1, 5, 5, 8, 8, 8, 0, 9, 5]

// var obj = {};
// obj['0'] = 2;
// obj['1'] = 3;
// obj['3'] = 1;
// obj['5'] = 3;
// obj['8'] = 3;
// obj['9'] = 1;


// console.log(obj);


// 判断某一个键在不在对象中
// var obj = {};
// console.log(obj['0']); // undefined  如果数组中的某个数不在对象中那么是false 如果存在那么是true

// var obj = {
//     name: 1
// }

// obj["name"]++;
// console.log(obj);

// 步骤:
// 1.声明一个空对象











var obj = {};

var arr = [0, 1, 3, 1, 1, 5, 5, 8, 8, 8, 0, 9, 5]
for (var i = 0; i < arr.length; i++) {


    if (obj[arr[i]]) {

        obj[arr[i]]++;
    } else {
        obj[arr[i]] = 1;
    }

} console.log(obj)

// for (var key in obj) {
//     console.log("键" + key + "出现了" + obj[key] + "次");
// }



