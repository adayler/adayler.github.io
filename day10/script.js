let currentLevel = 1; 

function levelUp()
{
    currentLevel++;
    //currentLevel = currentLevel +1; 
    document.getElementById("level").innerHTML = currentLevel; 
}

function saveLevel()
{
    localStorage.setItem("saveLevel", currentLevel);
    alert("Level data saved"); //put alert n function will help you if it's worked or not
}

function loadLevel()
{
    let retrievedData = localStorage.getItem("savedLevel");

    if(retrievedData !== null)
    {
        currentLevel = retrievedData; 
        document.getElementById("level").innerText = currentLevel; 
    }
    else
    {
        alert("No save data found...");
    }
}

function saveData()
{
    let typedText = document.getElementById("data-input").value; 
    sessionStorage.setItem("tempData", typedText); 

    document.getElementById("data-input").value = ""; //to clear it
}

function loadData()
{
    let savedText = sessionStorage.getItem("tempData");

    if(savedText !== null)
    {
        document.getElementById("data").innerText = savedText; 
    }
    else
    {
        alert("No session data found");
    }
}