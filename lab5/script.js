let accountBalance = 500;
const addsubAmount = 50;

function addCash() {
    accountBalance = accountBalance + addsubAmount;

    const amountText = document.getElementById("account-display");
    const statusText = document.getElementById("status-message");
    const addButton = document.getElementById("add");

    amountText.innerText = accountBalance;

    if(accountBalance > 500)
    {
        amountText.innerText = accountBalance;
        statusText.innerText = "Cha-Ching!"
    }

}

function subtractCash() {
    accountBalance = accountBalance - addsubAmount;

    const amountText = document.getElementById("account-display");
    const statusText = document.getElementById("status-message");
    const subtractButton = document.getElementById("subtract")

    amountText.innerText = accountBalance;

    if(accountBalance > 0)
    {
        amountText.innerText = accountBalance;
        statusText.innerText = "Oh no!"
    }
    else
    {
        amountText.innerText = 0;
        statusText.innerText = "You're poor!";
        statusText.style.color = "#f9331d";
        statusText.style.fontweight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";

        subtractButton.disabled = true;
        document.getElementById("subtract").innerText = "Get a job!";
    }
}