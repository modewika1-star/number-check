function checkDay() {
     let dateInput = document.getElementById('dateInput').value;
     let date = new Date(dateInput);
     let day = date.getDay();

     if (day === 5 || day === 6) {
          console.log("It's weekend");
          document.getElementById('result').innerHTML = "It's weekend";
     } else {
          console.log("work day");
          document.getElementById('result').innerHTML = "work day";
     }
}