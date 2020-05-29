//mapArray:決定地圖中每個格子的元素
//ctx: HTML5 canvas使用
//currentImgMainX, currentImgMainY:決定主角所在座標
//imgMountain, imgMain, imgEnemy ： 障礙物、主角、敵人的圖片物件

let mapArray, ctx, currentImgMainX, currentImgMainY;
let imgMountain, imgMain, imgEnemy;
let score=0;
//當網頁元件載入完成要做的事情
$(document).ready(function start(){
    //遊戲地圖
    //0:可走、1:障礙、2:終點、3:敵人
    mapArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                0,0,0,0,0,0,0,0,3,2,3,0,0,0,1,0,
                0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
                0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,
                0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,
                0,0,1,0,0,0,0,1,2,0,0,1,0,0,0,0,
                0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,
                0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,
                0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,
                0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,
                0,0,1,0,0,0,1,1,1,1,0,0,2,0,0,0,
                0,0,1,0,0,0,0,2,0,1,0,0,0,0,0,0,
                0,0,1,1,1,0,0,0,0,1,0,0,0,0,3,0,
                0,0,3,2,1,0,0,0,0,1,0,0,0,0,0,4];
    ctx = $("#myCanvas")[0].getContext("2d");
    //擺主角
    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMainX = 0;
    currentImgMainY = 0;
    imgMain.onload = function(){
        ctx.drawImage(imgMain, 0, 0, 80, 130, currentImgMainX, currentImgMainY, 45, 45);
    };
    //擺上障礙物與敵人
    imgMountain = new Image();
    imgMountain.src = "images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "images/Enemy.png";

    imgMountain.onload=function(){
        imgEnemy.onload=function(){
            for(let x in mapArray){
                if(mapArray[x] == 1){
                    if(mapArray[parseInt(x)+1] == 1)
                        ctx.drawImage(imgMountain,32,64,32,32,x%16*45, Math.floor(x/16)*45, 45, 45);
                    else
                        ctx.drawImage(imgMountain,32,64,32,32,x%16*45, Math.floor(x/16)*45, 45, 45);
                }
                else if(mapArray[x] == 2){
                        ctx.drawImage(imgMountain,0,96,32,32,x%16*45, Math.floor(x/16)*45, 45, 45);
                    }
                else if(mapArray[x]==3){
                    ctx.drawImage(imgEnemy, 7, 40, 104, 135, x%16*45, Math.floor(x/16)*45, 45, 45);
                }
            }
        };
    };
});
let targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;
//當有人按下按鍵後要做的事情
$(document).keydown(function(event){
    
    //主角即將要移動過去的目標位置 主角即將要移動過去的那一格編號 依據主角朝向什麼方向而決定的圖片
    event.preventDefault();
    //避免點擊鍵盤出現瀏覽器的其他行為，例如捲動、放大、換頁...
    //根據使用者按鍵指示，對應計算目標位置、主角新的方向圖片
    switch(event.code){
        case "ArrowLeft":
            targetImgMainX = currentImgMainX-45;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 175;
            break;
        case "ArrowUp":
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY-45;
            cutImagePositionX = 355;
            break;
        case "ArrowRight":
            targetImgMainX = currentImgMainX+45;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 540;
            break;
        case "ArrowDown":
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY + 45;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }
    //console.log(targetImgMainX);
    //console.log(targetImgMainY);
    //console.log(cutImagePositionX);
    //在邊界內
    if(targetImgMainX<720 && targetImgMainX>=0 && targetImgMainY<720 && targetImgMainY>=0){
        targetBlock = targetImgMainX/45 + targetImgMainY/45*16;
        
    }else{//超出邊界
        targetBlock = -1;
    }
    //清除主角原本所在位置
    ctx.clearRect(currentImgMainX, currentImgMainY, 45, 45);
    if(targetBlock == -1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3){
        //所有異常(出界、遇到敵人、遇到障礙物都不動)
        //console.log(targetBlock);
    }
    else if(mapArray[targetBlock]==4){
        window.alert("得到"+score+"分");
        return;
    }else{//正常情況下設定新的位置
        $("#talkBox").empty();
        currentImgMainX = targetImgMainX;
        currentImgMainY = targetImgMainY;
    }
    if(mapArray[targetBlock]==2){
        mapArray[targetBlock]=0
        score++;
    }
    //在新的位置上畫上主角
    ctx.drawImage(imgMain, cutImagePositionX, 0, 80, 130, currentImgMainX, currentImgMainY, 45, 45);
    //對應文字顯示狀態
    switch(mapArray[targetBlock]){
        case undefined:
            $("#talkBox").text("邊界");
            break;
        case 1:
            $("#talkBox").text("有山");
            break;
        case 2:
            $("#talkBox").text("得分");
            break;
        case 3:
            $("#talkBox").text("有敵人");
            break;
        case 4:
             $("#talkBox").text("終點");
             break;
    }
    
});
$(document).keydown(function(event){
    switch(event.code){
        case "KeyZ":
            if(mapArray[targetBlock]==3){
                if($("#bullet")[0].innerText==0){
                    window.alert("沒有子彈了");
                }
                else{
                    $("#bullet")[0].innerText--;
                    ctx.clearRect(targetBlock%16*45, Math.floor(targetBlock/16)*45, 45, 45);
                    mapArray[targetBlock]=0
                }
                
            }
            break;
        default:
            return;
    }
});