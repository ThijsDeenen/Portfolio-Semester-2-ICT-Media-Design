let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let start = 0;
let onePercent = 0.06283185307;
let lastLine;
let x;
let y;
let trueDegrees;
let click = -1;
let amountArray = [];
ctx.beginPath();
ctx.arc(250, 250, 200, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();

function addAmount(){
    let amount = document.getElementById("amount").value;
    click += 1;
    start += 1;
    if (start <= 1){
        ctx.beginPath();
        ctx.moveTo(250, 250);
        lastLine = ctx.lineTo(450, 250);
        ctx.stroke();
    }
    degrees = amount * 3.6;
    trueDegrees = (addToArray(amount, click) + amount * 3.6);
    ctx.beginPath()
    ctx.moveTo(250, 250);
    if(start <= 1){
        lastX = 250 + 200 * (Math.cos(0 * Math.PI / 180));
        lastY = 250 + 200 * (Math.sin(0 * Math.PI / 180));
        x = 250 + 200 * (Math.cos(degrees * Math.PI / 180));
        y = 250 + 200 * (Math.sin(degrees * Math.PI / 180));
    }else{
        x = 250 + 200 * (Math.cos(trueDegrees * Math.PI / 180));
        y = 250 + 200 * (Math.sin(trueDegrees * Math.PI / 180));
    }
    ctx.lineTo(x, y);
    ctx.stroke();
    console.log(trueDegrees);
}

function addToArray(amount, click){
    let amountString = amount.toString();
    amountArray.push(amountString);
    let lastAmount = amountArray[click];
    console.log(lastAmount);
    return Number(lastAmount);
}