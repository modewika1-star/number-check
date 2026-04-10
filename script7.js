function checkTemp() {
     let temp = parseFloat(document.getElementById('tempInput').value);

     if (temp > 30) {
          console.log("it's hot");
          document.getElementById('result').innerHTML = "it's hot";
     } else {
          console.log("it's cold");
          document.getElementById('result').innerHTML = "it's cold";
     }
}