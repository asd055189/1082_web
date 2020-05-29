//array for storing data
let topicsArray = [
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "店休",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "店休",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業",
    "正常營業"
];
//Date

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1,startDay);//startMonth 0 ~ 11
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
//set initial time
//setMonthAndDay(1,1);
