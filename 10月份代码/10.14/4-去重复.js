// 4.10个整数{9,10,6,6,1,9,3,5,6,4}，保存到数组中。
//     1.去除数组中重复的内容，只保留唯一的元素。
//     2.以下列格式打印数组：[9,10,6,1,3,5,4]


var arr=[9,10,6,6,1,9,3,5,6,4]; //定义数组

for(var i=0;i<arr.length;i++){   // 用 双循环 遍历  

    for(var j=i+1;j<arr.length;j++){    //  当不等于自身元素进行判断
        if(arr[j]==arr[i]){   //判断 第一个元素是否等于第二个元素
            arr.splice(j,1);   //  如果 相同就删除掉
            j--          //   如果遇到相同的元素则返回第一次再进行0 删除
        }

    }
}console.log(arr)