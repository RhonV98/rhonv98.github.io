// (2) Using JS, inject an ordered list into the div with the class "content"

// holds country codes
var countryCodeList = ["AD","AF","AI","AM","AQ","AR","AT","AU","AX","BA"];

// holds country names
var countryNameList = ["Testia", "Brattia", "Serveria"];

// injects an ordered list into the html
var countryList = [];
var countryListContainer = document.createElement("div");
var countryListElement   = document.createElement("ol");

// other necessary variables for the getRandomCountries function
var countryListCount     = countryList.length;
var listItem;
var randNum;
var x, y1, y2, z1, z2;


// (3) Give your ordered list the class "countries."
countryListElement.className = "countries";


// (4) Design the following function to run on the click of a button from the index page.
const countryButton = document.querySelector("button");


// (5) Select 25 random countries from your list by writing a separate function that makes use of Math.random.
// (6) Make sure the selection is unique.
countryButton.onclick = function getRandomCountries()
{
    document.querySelector(".content").appendChild(countryListContainer);
    countryListContainer.appendChild(countryListElement);

    for(x = 0; x < 25; x++)
    {
        randNum = Math.floor(Math.random() * countryCodeList.length);

        // create the String that holds a random country's name.
        y1 = document.createElement("p1");
        y2 = document.createTextNode("A random country: " + countryNameList[randNum] + ", ");
        y1.appendChild(y2);
        y1.className = "country-name";

        // create the String that holds that country's code.
        z1 = document.createElement("p2");
        z2 = document.createTextNode("Country Code: " + countryCodeList[randNum]);
        z1.appendChild(z2);
        z1.className = "country-code";

        // create the list element that holds both Strings
        listItem = document.createElement("li");
        listItem.appendChild(y1);
        listItem.appendChild(z1);

        // append the list item to the country list
        countryListElement.appendChild(listItem);
    }
}


// (10) Log all unselected countries into the console.
for(x = 0; x < countryListElement.length; x++)
{
    if(countryCodeList[x] != countryListElement[x])
    {
        console.log(countryCodeList[x]);
    }
}



