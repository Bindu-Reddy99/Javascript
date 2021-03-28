const userInput = document.getElementById("inputText");
const removeVowelBtn = document.getElementById("remove-vowel-btn");
var outputInfo = document.getElementById("removedVowelrStringResult");
function removeVowels() {
  var s = document.getElementById("inputText").value;
  function removeVowels(s){
    var vowels = "aieuo";
    var strArr = s.toLowerCase().split("");
    var newArr = strArr.filter(function(letter){
        if(vowels.indexOf(letter)  == -1){
            return letter;
        }
    });
    var string = "";
    newArr.forEach(function(letter){
        string += letter;
    });
    return string;
}
var result=removeVowels(s);

  // var res = s.split(" ");
  // voewlRemovedString = res.map((res) => res.replace(/[aeiou]/g, ""));
  // // voewlRemovedString+=voewlRemovedString;
  // voewlRemovedString.join();

  outputInfo.innerHTML =
    "After removing vowels in the String = " + result;
}

removeVowelBtn.addEventListener("click", removeVowels());

