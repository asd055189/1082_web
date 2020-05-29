
let pictures = [
    "../茶拿鐵/抹茶拿鐵.jpg",
    "../茶拿鐵/抹茶咖啡.jpg",
    "../茶拿鐵/紅茶拿鐵.jpg"
];

let pictures2 = [
    "../星冰樂/咖啡星冰樂.jpg",
    "../星冰樂/摩卡可可碎片星冰樂.jpg",
    "../星冰樂/焦糖可可碎片星冰樂.jpg"
];
var flag=0;
$(document).ready(function(){

    $("input#RD").click(function(){

        //method1. $("a").hide();//hide all images
        //alert("hi"); 彈跳視窗
        //$("H1").text($("li").eq(1).text()); 將?改成食物名稱, eq為其index
        let num = $("li#food").length;//li有幾個
        //$("H1").text(num);
        if(flag==0){
            let rdm = Math.floor(Math.random()*num);//0<= Math.random() < 1 //Math.floor() -> 無條件捨去後的最大整數
            $("H1").text($("li#food").eq(rdm).text());
            //method1. $("a").eq(rdm).show();       
            //method2. 
            $("img").attr("src", pictures[rdm]);
        }
        else{
            let rdm = Math.floor(Math.random()*num);//0<= Math.random() < 1 //Math.floor() -> 無條件捨去後的最大整數
            $("H1").text($("li#food").eq(rdm).text());
            //method1. $("a").eq(rdm).show();       
            //method2. 
            $("img").attr("src", pictures2[rdm]);
        }
    });
});

function change(){
    flag++;
    flag%=2;
    if (flag==1){
        $("input#change_coffee")[0].value="來點拿鐵"
        let num = $("li#food").length;
        $("li#food")[0].textContent="咖啡星冰樂"
        $("li#food")[1].textContent="摩卡可可碎片星冰樂"
        $("li#food")[2].textContent="焦糖可可碎片星冰樂"
        $("img").attr("src", "");
    }
    else{
        $("input#change_coffee")[0].value="來點星冰樂"
        let num = $("li#food").length;
        $("li#food")[0].textContent="抹茶拿鐵"
        $("li#food")[1].textContent="抹茶咖啡"
        $("li#food")[2].textContent="紅茶拿鐵"
        $("img").attr("src", "");
    }
}
