playerName = prompt("What is your name?");

alert("Nice to meet you, " + playerName + "!");

alert(introText);

let choice = prompt("How do you wish to live your life?\n" +
                    pathText1 + "\n" +
                    pathText2 + "\n" +
                    pathText3);

if (choice === "A") {
    alert(resultText1);
} else if (choice === "B") {
    alert(resultText2);
} else if (choice === "C") {
    alert(resultText3);
} else {
    alert("Invalid choice. Please restart the game.");
}

alert(endText);