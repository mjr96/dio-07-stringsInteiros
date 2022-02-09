
function palavra(string){

    const arrayStrings = string.split("");
   
    const reverseArray = arrayStrings.reverse();
 
    const joinArray = reverseArray.join("");
    
    if (string === joinArray) {
        console.log("Esta palavra EH um Palindromo");
    } else {
        console.log("Esta palavra nao e um Palindromo");
    }
}

palavra("ama");