# 数据类型 

### 数字

1.  整数：二进制（0b开头）；八进制（0开头）； 十六进制（0x开头）

2. 小数：小数的计算是不精确的和cpu有关，所以运行时需要用到，toFixed(2)精确2位

3. NaN代表出错，比如用变量英文相加，就会显示不是一个数字

    ----

   
   
   ### 布尔
   
   true(真) false（假）用于判定答案只有两种情况



------



### undefined(未定义)

表示定义一个变量，但是没有赋值就会出现未定义

如： var school

​       console.log(school)  因为  var定义了变量 	但是没有赋值   	所以未定义

-----



### 字符串

#### 单引号和双引号

字符串：用引号  引起来的字母数字字符的组合

（    '   除了数字和布尔都要用引号 '    ）

（  "   也可以使用双引号   "   ）



------------



 ### 字符串的\

\用于把后面的字符进行转义

1. 换行

2. 引号中包含引号 

3. 定义多行字符串：在最后面加\

4. 输出\本身  在 \前面加\

  ------

   

   ### 使用`定义字符串

   1. 定义多行字符串

      var x = `

      1

      12

      123 `

      console.log(x)

      1

      12

      123
   
   2. 字符串中包含的变量，也可以解析

​          var y = `123456 ${x} `   一定要加上 ${}

------



### 对象

由多个键值对组合到一起      也相当于  属性：值    要加上{}

####定义对象

var A ={

b ： "1"

 c : ' 2'

d : ' 3'



}

console.log(A)

第二种

var A = new object ( {} )

####使用对象

用“    .    ”    来操作属性

1. 读取单个

var A ={

b ： "1"

 c : ' 2'

d : ' 3'



}

console.log( A.b )

2. 修改

     A.c = 20 

   

   3. 添加

      A.ef = " 5 "

      4 用delete 删除一个属性

      delete A.d

------------------



   ###使用变量操作对象中的属性

   

   var A ={

   b ： "1"

    c : ' 2'

   d : ' 3'

   

   }

   var pentakill = '  d  '

A.pentakill = '  123  '

console.log(A)

b  1

c  2

d     3

 pentakill  123

（1）就是当定义同一个变量时候  用 . 就会在后面添加一个新的属性

（2）当要修改一个属性值时用[  ]

A.[  pentakill   ] = 123

d就会被改成   pentakill ： 123



------------



### 数组

（1）

var arr = [数1,数2,数3,数4,....]



（2）

var arr = new Array(数1,数2,数3,数4,....)

数组里面可以放任何数据类型，对象里也可以放数组等任何类型



每个数组都有一个下标，从0开始，1234

console.log( [1,2,3,4] ) 

修改：  [3] = '666'







