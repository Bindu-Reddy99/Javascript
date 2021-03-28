const userInput = document.getElementById("inputText");
const reverseLenthWordBtn = document.getElementById("reverse-len-words-btn");
var outputInfo = document.getElementById("reverseLengthString");
function reverseLenString() {
  var s = document.getElementById("inputText").value;
  var result = "";
  var splittedString = s.split(" ");
  for (var i = 0; i < splittedString.length; i++) {
    if (result) {
      result += ' ';
    }
    if (splittedString[i].length >= 5) {
      result += splittedString[i].split("").reverse().join("");
      //  result+=reversedlenString(result[i])
    } else {
      result += splittedString[i];
    }
  }
 
  outputInfo.innerHTML = "After removing vowels in the String = " + result;
  //return result;
  // var res = s.split(" ");

  // 	for(i=0;i<res.length;i++){
  // 		if(res[i].length >=5){
  // 			reverseInnerString(res[i])
  // 		}
  // 	reversedlenString+=res[i];
  // 	}
  //outputInfo.innerHTML = "After removing vowels in the String = " + result;
}
function reverseInnerString(res) {
  var reversedString = "";
  for (var i = res.length - 1; i >= 0; i--) {
    reversedString += res[i];
  }
}

reverseLenthWordBtn.addEventListener("click", reverseLenString());

