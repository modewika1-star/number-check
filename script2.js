function checkLength() {
     let text = document.getElementById('textInput').value;
     let charCount = text.length;

     if (charCount > 100) {
          console.log("the string is long");
          document.getElementById('result').innerHTML = "the string is long";
     } else {
          console.log("string is short");
          document.getElementById('result').innerHTML = "string is short";
     }
}