const userInput = document.getElementById("inputText");
const reverseBtn = document.getElementById("reverse-btn");
var outputInfo = document.getElementById("reveserStringResult");
function reverseString() {
  var s = document.getElementById("inputText").value;
  var reversedString = "";
  for (var i = s.length - 1; i >= 0; i--) {
    reversedString += s[i];
  }

  outputInfo.innerHTML = "Reversed String is = " + reversedString;
}

reverseBtn.addEventListener("click", reverseString());
