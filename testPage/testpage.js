/*
宣告: var var_name = 字串/數字/布林值;
寫入文字到網頁上:
document.write("");

陣列
array.length 陣列長度
array.indexOf(); 取該值在陣列中的位置，不存在回傳-1

+ - * / %
Math.abe(); 取絕對值
Math.max(); 取最大值
Math.min(); 取最小值
Math.round(); 四捨五入
Math.pow(底數,冪次); 次方
Math.sqrt(); 開根號
Math.random(); 0~1之間的隨機數
    求整數隨機: Math.round(Math.random()*10);

prompt("輸入提示文字"); 相當於python的 input()
parseInt(變數); 字串轉整數
parseFloat(變數); 轉浮點數

定義函式
function FunctionName(參數){
    return 回傳結果;
}

if(){}
while(){}成立才進入
do{}while()進入後成立則重複
for(var i=0; i<5; i++;){ }

宣告物件屬性
var object={
    name:"名字",
    somenumber:1,
    Y_or_N:ture
    print_name:function(){
        document.write(this.name);
    }
};

宣告類別
class ClassName{
    constructor(要輸入的,屬性,名稱){
        this.要輸入的 = 要輸入的;
        this.屬性 = 屬性;
        this.名稱 = 名稱;
    }
    函式名稱(){
        return 回傳值;
    }
}
object.name >得到"名字"
object.print_name(); >運行該函式

以類別模板宣告物件
var varName = new ClassName(要輸入的,屬性,名稱);

除錯
console.log(變數); 值會在F12裡的Console分頁中

取得html元素
document.getElementById("ID名稱"); 取得元素byID

使用並修改html內容
var outputText = document.getElementById("JStestResult");
outputText.innerText="Test Complete.";
JStestResult.style.backgroundColor = "green";
修改其屬性內容，直接參照在html中寫的屬性


Event Listener
先到需要監聽的物件加入相應參數，例:
    <button id="btn" onclick="btn_Clicked(this)"></button>
JS中寫function                  ^函式名稱    ^將btn標籤傳給函式
    function btn_Clicked(element)){
        ...code
    }
.    
全寫在JS裡:
var btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    code.              ^事件名稱 詳查JS Event list
})

模板語法
使用`符號框起兩邊
`
html code...
<p>${JS var}</p>
...html code
`

*/

var btn = document.getElementById("testButton");
var outputText = document.getElementById("JStestResult");

btn.addEventListener("click",function(){
    outputText.innerText="Test Complete";
    JStestResult.style.color = "white";
    JStestResult.style.backgroundColor = "green";
})

document.write("JavaScript write Text");
