let IQCount = 0;
let update = setInterval(Update, 60);
let NormalTime = 100;
let deg = 0;

let thinkingPower = 0;
let clickCount = 0;

let sudokuCount = 0;
let sudokuTimer = 100;

let bookCount = 0;
let bookTimer = 100;

let fontysCount = 0;
let fontysTimer = 100;

function AddIQ(){
    clickCount += 1;
    IQCount += 1 + (thinkingPower * 0.5);
    document.getElementById("counter").innerHTML = IQCount.toFixed(1);
    
}

//////////////////////////////////////////////////////////////////////

function Update(){
    deg += 1;
    document.getElementById("iQButton").style.transform = "rotate(" + deg + "deg)";
    if(IQCount >= 1000){
        document.getElementById("brain").src = "Brain2.png";
    }
    if(IQCount >= 10000){
        document.getElementById("brain").src = "Brain3.png";
    }
    if(IQCount >= 100){
        document.getElementById("baby").style.filter = "grayscale(0%)";
    }
    if(clickCount >= 1000){
        document.getElementById("finger").style.filter = "grayscale(0%)";
    }
    if(sudokuCount >= 50){
        document.getElementById("news").style.filter = "grayscale(0%)";
    }
    if(bookCount >= 20){
        document.getElementById("library").style.filter = "grayscale(0%)";
    }
    if(fontysCount >= 3){
        document.getElementById("einstein").style.filter = "grayscale(0%)";
    }
    if(IQCount >= 1000000){
        document.getElementById("million").style.filter = "grayscale(0%)";
    }
    //THINKING
    document.getElementById("thinkCosts").innerText = "Costs: " + (100 + (thinkingPower * 100)).toFixed(1);
    if (IQCount < 100 + (thinkingPower * 100)){
        document.getElementById("think").disabled = true;
    }else document.getElementById("think").disabled = false;

    //SUDOKU
    document.getElementById("sudokuCosts").innerText = "Costs: " + (10 + (sudokuCount * 5.2)).toFixed(1);
    if (IQCount < 10 + (sudokuCount * 5.2)){
        document.getElementById("sudoku").disabled = true;
    }else document.getElementById("sudoku").disabled = false;
    if (sudokuCount > 0){
        sudokuTimer -= 1;
        if (sudokuTimer <= 0){
            sudokuTimer = NormalTime;
        }
        if (sudokuTimer == 1){
            IQCount += (1 * sudokuCount);
            document.getElementById("counter").innerHTML = IQCount.toFixed(1);
        }
    }

    //BOOK
    document.getElementById("bookCosts").innerText = "Costs: " + (250 + (bookCount * 5.2)).toFixed(1);
    if (IQCount < 250 + (bookCount * 5.2)){
        document.getElementById("book").disabled = true;
    }else document.getElementById("book").disabled = false;
    if (bookCount > 0){
        bookTimer -= 1;
        if (bookTimer <= 0){
            bookTimer = NormalTime;
        }
        if (bookTimer == 1){
            IQCount += (10 * bookCount);
            document.getElementById("counter").innerHTML = IQCount.toFixed(1);
        }
    }

    //FONTYS
    document.getElementById("fontysCosts").innerText = "Costs: " + (2000 + (fontysCount * 5.2)).toFixed(1);
    if (IQCount < 2000 + (fontysCount * 5.2)){
        document.getElementById("fontys").disabled = true;
    }else document.getElementById("fontys").disabled = false;
    if (fontysCount > 0){
        fontysTimer -= 1;
        if (fontysTimer <= 0){
            fontysTimer = NormalTime;
        }
        if (fontysTimer == 1){
            IQCount += (50 * fontysCount);
            document.getElementById("counter").innerHTML = IQCount.toFixed(1);
        }
    }
}

/////////////////////////////////////////////////////

function AddThinking(){
    IQCount -= (100 + thinkingPower * 100);
    document.getElementById("counter").innerHTML = IQCount.toFixed(1);
    thinkingPower += 1;
}

function AddSudoku(){
    IQCount -= (10 + sudokuCount * 5.2);
    document.getElementById("counter").innerHTML = IQCount.toFixed(1);
    sudokuCount += 1;
}

function AddBook(){
    IQCount -= (250 + bookCount * 5.2);
    document.getElementById("counter").innerHTML = IQCount.toFixed(1);
    bookCount += 1;
}

function AddFontys(){
    IQCount -= (2000 + fontysCount * 5.2);
    document.getElementById("counter").innerHTML = IQCount.toFixed(1);
    fontysCount += 1;
}

///CANVAS CODE/////////////////////////////////////////////////////////////

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.height = 150;
canvas.width = 300;

let painting = false;
const nameInput = document.getElementById("nameInput");
const profileDiv = document.getElementById("profile");

function StartPosition(e){
    painting = true;
    draw(e);
}
function FinishedPosition(){
    painting = false;
    c.beginPath();
}

function draw(e){
    if(!painting) return;
    c.lineWidth = 5;
    c.lineCap = "round";

    c.lineTo(e.clientX - 610, e.clientY - 45);
    c.stroke();
    c.beginPath();
    c.moveTo(e.clientX - 610, e.clientY - 45);
}
canvas.addEventListener("mousedown", StartPosition);
canvas.addEventListener("mouseup", FinishedPosition);
canvas.addEventListener("mousemove", draw);

function SaveImage(){
    
    let image = document.createElement('img')
    image.setAttribute('src', canvas.toDataURL());
    image.setAttribute('style', 'position: relative');
    image.setAttribute('style', ' width:100%');
    profileDiv.appendChild(image);
    profileDiv.insertBefore(image, nameInput);

    document.getElementById("grid").style.visibility = "visible"
    document.getElementById("start").style.visibility = "hidden"
    document.getElementById("text").style.visibility = "hidden"

    profileDiv.removeChild(canvas);
    canvas.removeEventListener("mousedown", StartPosition);
    canvas.removeEventListener("mouseup", FinishedPosition);
    canvas.removeEventListener("mousemove", draw);

    nameInput.value += "'s IQ Points:";
    nameInput.style.color = "black";
    nameInput.style.backgroundColor = "pink";
    nameInput.style.border = "none";
    nameInput.disabled = true;
}