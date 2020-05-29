let questions = [
    {
        "question":"drink, food, or cake?",
        "answers":[
            ["coffee",4],
            ["food",2],
            ["cake",3]
        ]
    },
    {
        "question":"直接選要吃什麼吧!",
        "answers":[
            ["紅藜地瓜三明治","F1"],
            ["燻鴨起司薄餅","F2"],
            ["培根烘蛋佛卡夏","F3"]
        ]
    },
    {
        "question":"直接選要吃什麼吧!",
        "answers":[
            ["百香果塔","C1"],
            ["提拉米蘇千層薄餅","C2"],
            ["經典起司蛋糕","C3"]
        ]
    },
    {
        "question":"想喝冰的還是熱的?",
        "answers":[
            ["冰的",5],
            ["熱的","D1"]
        ]
    },
    {
        "question":"選一個想喝的吧!",
        "answers":[
            ["咖啡星冰樂","D2"],
            ["冰焦糖瑪奇朵","D3"]
        ]
    },
];

let finalAnswers={
        "F1":["你選擇了","紅藜地瓜三明治"],
        "F2":["你選擇了","燻鴨起司薄餅"],
        "F3":["你選擇了","培根烘蛋佛卡夏"],
        "C1":["你選擇了","百香果塔"],
        "C2":["你選擇了","提拉米蘇千層薄餅"],
        "C3":["你選擇了","經典起司蛋糕"],
        "D1":["你選擇了","伯爵茶拿鐵"],
        "D2":["你選擇了","咖啡星冰樂"],
        "D3":["你選擇了","冰焦糖瑪奇朵"]
};

let linkurl={
    "F1":["https://www.starbucks.com.tw/products/food/product.jspx?id=810&catId=14"],
    "F2":["https://www.starbucks.com.tw/products/food/product.jspx?id=863&catId=14"],
    "F3":["https://www.starbucks.com.tw/products/food/product.jspx?id=919&catId=14"],
    "C1":["https://www.starbucks.com.tw/products/food/product.jspx?id=760&catId=16"],
    "C2":["https://www.starbucks.com.tw/products/food/product.jspx?id=638&catId=16"],
    "C3":["https://www.starbucks.com.tw/products/food/product.jspx?id=52&catId=16"],
    "D1":["https://www.starbucks.com.tw/products/drinks/product.jspx?id=213&catId=33"],
    "D2":["https://www.starbucks.com.tw/products/drinks/product.jspx?id=18&catId=5"],
    "D3":["https://www.starbucks.com.tw/products/drinks/product.jspx?id=8&catId=2"]
};

//source: https://github.com/ryan403/love-taste-quiz/blob/master/data.js