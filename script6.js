function checkGrade() {
     let grade = parseInt(document.getElementById('gradeInput').value);

     if (grade < 50) {
          console.log("F");
          document.getElementById('result').innerHTML = "F";
     } else if (grade > 60) {
          if (grade > 70) {
               if (grade > 80) {
                    console.log("A");
                    document.getElementById('result').innerHTML = "A";
               } else {
                    console.log("B");
                    document.getElementById('result').innerHTML = "B";
               }
          } else {
               console.log("C");
               document.getElementById('result').innerHTML = "C";
          }
     } else {
          console.log("D");
          document.getElementById('result').innerHTML = "D";
     }
}