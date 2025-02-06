playerName = prompt("What is your name?");


alert("Nice to meet you, " + playerName + "!");
alert(introText);


let choice = prompt("How do you wish to live your life?\n" + pathText1 + "\n" + pathText2 + "\n" + pathText3);

if (choice === "A") {
    alert(resultText1);
    let secondChoice = prompt(secondDecisionText1);
    if (secondChoice === "A") {
        alert(secondResultText1A);
    } else if (secondChoice === "B") {
        alert(secondResultText1B);
    } else {
        alert("Invalid choice. Game over.");
    }
} else if (choice === "B") {
    alert(resultText2);
    let secondChoice = prompt(secondDecisionText2);
    if (secondChoice === "A") {
        alert(secondResultText2A);
    } else if (secondChoice === "B") {
        alert(secondResultText2B);
    } else {
        alert("Invalid choice. Game over.");
    }
} else if (choice === "C") {
    alert(resultText3);
    let secondChoice = prompt(secondDecisionText3);
    if (secondChoice === "A") {
        alert(secondResultText3A);
    } else if (secondChoice === "B") {
        alert(secondResultText3B);
    } else {
        alert("Invalid choice. Game over.");
    }
} else {
    alert("Invalid choice. Please restart the game.");
}

let secondchance = prompt("Do you believe that you will remain as you are forever?");
    if(secondchance === "Yes"){
        alert(secondChanceText1)
    }else if (secondchance === "No"){
        alert(secondChanceText2)
    }else{
        alert("Invalid choice. Please restart the game.")
    }

alert(endText);
