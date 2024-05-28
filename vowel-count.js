// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    let count = 0; // Initialize a count variable to keep track of the number of vowels
    const vowels = "aeiouAEIOU"; // Define a string containing all the vowels
  
    for (let i = 0; i < str.length; i++) { // Loop through each character in the string
      if (vowels.indexOf(str[i]) !== -1) { // Check if the character is a vowel
        count++; // Increment the count if it is a vowel
      }
    }
  
    return count; // Return the total count of vowels
  }
  
  var str = "Sky!";
  console.log(vowelCount(str)); // Output: 3
  
  
  