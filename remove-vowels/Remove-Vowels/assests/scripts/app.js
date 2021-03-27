const userInput = document.getElementById("inputText");
const removeVowelBtn = document.getElementById("remove-vowel-btn");
var outputInfo = document.getElementById("removedVowelrStringResult");
function removeVowels() {
  var s = document.getElementById("inputText").value;
  var res = s.split(" ");
  voewlRemovedString = res.map((res) => res.replace(/[aeiou]/g, ""));

  outputInfo.innerHTML =
    "After removing vowels in the String = " + voewlRemovedString;
}

removeVowelBtn.addEventListener("click", removeVowels());
