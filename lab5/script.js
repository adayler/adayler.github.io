let accountBalance = 100;
const incomeAmount = 50;

function addCash() {
    accountBalance = accountBalance + incomeAmount;

    const amountText = document.getElementById("account-display");
    const statusText = document.getElementById("status-message");

    amountText.innerText = accountBalance;

    if(accountBalance > 100)
    {
        amountText.innerText = accountBalance;
        statusText.innerText = "Cha-Ching!"
    }
    else
    {
        amountText.innerText = 300;
        statusText.innerText = "You're getting greedy!";
        statusText.style.color = "#f9331d";
        statusText.style.fontweight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";

        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "Donate money";
    }
}