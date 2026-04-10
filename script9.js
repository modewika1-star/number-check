function checkEntry() {
     let number = parseInt(document.getElementById('numberInput').value);

     if (number > 20 && number % 2 === 0) {
          console.log("You can enter the university");
          document.getElementById('result').innerHTML = "You can enter the university";
     } else {
          console.log("You can't enter");
          document.getElementById('result').innerHTML = "You can't enter";
     }
}