// Creating variables for our code
let linesOfCode = 0;

let clickPower = 1; 
let upgradeCost = 50; 

let interns = 0;
let internCost = 100; 
let internRelief = 40;

function writeCode()
{
    linesOfCode = linesOfCode + clickPower; 
    updateScreen();
}

function buyKeyboard()
{
    if(linesOfCode >= upgradeCost)
    {
        linesOfCode = linesOfCode - upgradeCost; 
        clickPower = clickPower + 1; 
        upgradeCost = upgradeCost * 1.5; 
        updateScreen();
    }
}

function buyIntern()
{
    if(linesOfCode >= internCost)
    { 
        linesOfCode = linesOfCode - internCost; 
        interns = interns + 1; 
        internCost = internCost * 1.5; 
        updateScreen();
    }
}

function fireIntern()
{
    if(linesOfCode >= internRelief && interns !== 0)
    { 
        linesOfCode = linesOfCode - internRelief; 
        interns = interns - 1; 
        internCost = internCost * 0.75; 
        updateScreen();
    }
    else
    {
        interns = interns;
    }
}

function updateScreen()
{
    document.getElementById("score-display").innerText = linesOfCode + " line(s) of code"; 

    document.getElementById("power-display").innerText = clickPower; 
    document.getElementById("cost-display").innerText = upgradeCost; 

    document.getElementById("intern-display").innerText = interns; 
    document.getElementById("cost-intern-display").innerText = internCost; 
    document.getElementById("cost-fire-display").innerText = internRelief;
}

setInterval(function() {
    if(interns > 0)
    {
        linesOfCode = linesOfCode + interns; 
        updateScreen();
    }
},
1000  
);
//HOMEWORK: add another button function, modify the last style css for the remaining components 