function checkOddEven() {
     let number = parseInt(document.getElementById('numberInput').value);

     if (number % 2 === 0) {
          console.log("even");
          document.getElementById('result').innerHTML = "even";
     } else {
          console.log("odd");
          document.getElementById('result').innerHTML = "odd";
     }
}