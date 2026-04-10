function checkSign() {
     let number = parseFloat(document.getElementById('numberInput').value);

     if (number > 0) {
          console.log("positive");
          document.getElementById('result').innerHTML = "positive";
     } else if (number < 0) {
          console.log("negative");
          document.getElementById('result').innerHTML = "negative";
     } else {
          console.log("zero");
          document.getElementById('result').innerHTML = "zero";
     }
}