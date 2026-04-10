function checkNumber() {
     let number = parseInt(document.getElementById('numberInput').value);

     if (number === 100) {
          console.log("equal");
          document.getElementById('result').innerHTML = "equal to 100";
     } else if (number < 100) {
          console.log("less than");
          document.getElementById('result').innerHTML = "less than 100";
     } else {
          console.log("more than 100");
          document.getElementById('result').innerHTML = "more than 100";
     }
}