// 16. 录入一个整数,判断它能否被3,5,7整除,并输出以下信息
//     (1)能同时被3,5,7整除
//     (2)能被其中两个数整除(要指出那两个数)
//     (3)只能被其中一个数整除(指出那一个)
//     (4)不能被3,5,7任一个整除





    var num = 21

    if (num % 3 == 0 && num % 5 == 0 && num % 7 == 0) {
        console.log("能同时被3,5,7整除")

    }

    else if (num % 3 == 0 && num % 5 == 0) {
        console.log("3,5")

    }

 


    else if (num % 5 == 0) {
        console.log("5")
        
    }

    else {
        console.log("不能被3,5,7任一个整除")

    }


