/*function myfun()
{
    var check=document.getElementById("checkbox");
    var h=document.getElementById("text")
    if(check.checked==true || h.checked==true)
    {
        console.log("ch");
    }
    else{
        console.log("notYEt");
    }
}
console.log(length.h);
var v=document.addEventListener("text")=innerHTML
let marks={arun:10,rani:56}
for(let i=0;i<Object.keys(marks).length;i++)
{
    console.log(Object.keys(marks)[i]);
}
let m={a:10,b:80,v:90}
for (let key in m)
{
    console.log(key+":"+m[key]);
}*/
// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("userGuess").value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    document.getElementById("message").textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  attempts++;

  if (userGuess === targetNumber) {
    document.getElementById("message").textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
  } else if (userGuess < targetNumber) {
    document.getElementById("message").textContent = "Try a higher number.";
  } else {
    document.getElementById("message").textContent = "Try a lower number.";
  }
}