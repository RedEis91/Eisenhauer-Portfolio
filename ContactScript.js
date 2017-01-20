function myFunction(e){
  var myOutput = document.getElementById("valueToReturn");
  myOutput.innerHTML = "Thanks for stopping by " + e.form.namefield.value + "!!!!";
}
