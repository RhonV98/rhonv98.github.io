let myFullName = "Rhon Vincent Ramos"; // 16 characters in name...not including space

// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
document.querySelector(".header").innerHTML = myFullName + "\'s Lab 4.\n";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
var newParagraphOne = document.createElement("p1");
var newParagraphTwo = document.createElement("p2");

newParagraphOne.className = "content1";
newParagraphTwo.className = "content2";

var newParagraphOneText = document.createTextNode("The first new paragraph. \n");
var newParagraphTwoText = document.createTextNode("The second new paragraph. \n");

newParagraphOne.appendChild(newParagraphOneText);
newParagraphTwo.appendChild(newParagraphTwoText);

var newContentParagraphs = document.querySelector(".content");

newContentParagraphs.appendChild(newParagraphOne);
newContentParagraphs.appendChild(newParagraphTwo);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
var newPhrase = "My name has " + myFullName.length + " characters.";
newParagraphOne.append(newPhrase);

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
var thirdCharacterInFullName = myFullName.charAt(2).toUpperCase();

newParagraphTwo.append("The third character of my name is: " + thirdCharacterInFullName + ".\n");

// 6 Add a new line to your second paragraph
newParagraphTwo.append("\n");

// 7 Return the final three characters of your last name to that new line
var finalThreeCharactersInFullName = myFullName.substring(myFullName.length - 3, myFullName.length);
newParagraphTwo.append("The final three characters in my name is: " + finalThreeCharactersInFullName + ".\n");

// 8 Substring your first and last name into two separate variables
var firstName = myFullName.substring(0, 3);
var lastName = myFullName.substring(13, 18);

// 9 Add the total length of your first and last names together
var nameLength = firstName.length + lastName.length;

// 10 Display that total next to your name in your header
document.querySelector(".header").append("The length of my first and last name is: " + nameLength);
