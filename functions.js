// -------------------------------  BEGINNER

/* Opdracht 1 */
// Schrijf een functie die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// "Nova" geeft "Hoi Nova!"
// "Nick" geeft "Hoi Nick!"

// Begin met mn huiswerk

function greeting(name) {
    return ("Hoi " + name + "!");
}

console.log("Opgave 1");
console.log(greeting("Nova"));
console.log(greeting("Nick"));
console.log();


/* Opdracht 2 */
// Schrijf een functie die een hoeveelheid minuten verwacht (als een getal) en teruggeeft
// hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// 1 geeft 60
// 3 geeft 180
// 23 geeft 1840  1380!!!!!

function calculateSeconds(minutes) {
    return minutes * 60;
}

console.log("Opgave 2");
console.log(calculateSeconds(1));
console.log(calculateSeconds(3));
console.log(calculateSeconds(23));
console.log();

/* Opdracht 3 */
// Schrijf een functie die een cijfer verwacht en teruggeeft of het cijfer groter is
// dan nul
// ---- Verwachte uitkomsten:
// -3 geeft false
// 0 geeft false
// 300 geeft true

function checkGreaterThanZero(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}

console.log("Opgave 3");
console.log(checkGreaterThanZero(-3));
console.log(checkGreaterThanZero(0));
console.log(checkGreaterThanZero(300));
console.log();

/* Opdracht 4 */
// Schrijf een functie die twee getallen verwacht en teruggeeft of ze, opgetelt, gróter zijn dan 100.
// ---- Verwachte uitkomsten:
// 1 en 23 geeft false
// 8 en 92 geeft false
// 89 en 14 geeft true


function checkGreaterThanHunderd(number1, number2) {
    if (number1 + number2 > 100) {
        return true;
    } else {
        return false;
    }
}

console.log("Opgave 4");
console.log(checkGreaterThanHunderd(1, 23));
console.log(checkGreaterThanHunderd(8, 92));
console.log(checkGreaterThanHunderd(89, 14));
console.log();


/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht. Hoe lang die array is, weet je niet van tevoren,
// dus het moet werken voor alle lengtes. Zelfs voor een lengte van 100 (dus niet één voor één uitschrijven!)
// De functie geeft alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken zoals .concat()
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c", "d", "e"] geeft "abcde"

function glueTogether(testString) {


    newString = "";
    for (let i = 0; i < testString.length; i++) {

        newString = newString + testString[i];

    }
    return newString

}

console.log("Opgave 5");
console.log(glueTogether(["abra", "cadabra"]))
console.log(glueTogether(["a", "b", "c", "d", "e"]))
console.log();


// -------------------------------  INTERMEDIATE

/* Opdracht 6 */
// Schrijf een functie die een woord verwacht en dit omgedraait teruggeeft. Je kunt dit zowel handmatig
// als met ingebouwde string- en array methoden doen. Probeer beide manieren uit te werken als je
// graag wil oefenen!
// ---- Verwachte uitkomsten:
// "koekje" geeft "ejkeok"
// "vrienden" geeft "nedneirv"


// stap 1, maak van string array
// stap2 gebruik spit om een array te maken van afzonderlijke letters
// stap 3 dan array reverse()
// stap 4 dan joi gebruiken om weer een string te maken*/
// stap 5 gebruik reverse om alles om te draaien


//ier met string en Array methoden
function turn(name) {

    let newArray = name.split("");
    newArray.reverse();
    let newString = newArray.join("");
    return newString;

}

console.log("Opgave 6, string en array methoden");
console.log(turn("koekje"))
console.log(turn("vrienden"))
console.log();

// hier met een for loop
function turnManual(name){
    let x = name.length;
    let newName="";
    let j=x-1;
    for (let i = 0; i <x ; i++) {

        newName=newName+name[j];
        j=j-1;

    }
    return newName;

}
console.log("Opgave 6, manual");
console.log(turnManual("Koekje"))
console.log(turnManual("vrienden"))
console.log();




/*hier met een inverse for loop*/

function turnManualInverseFor(name){
    let x = name.length;
    console.log("x  " + x);
    let newName="";

    for (let i = x; i>0 ; i=i-1) {

        newName=newName+name[i-1];

    }
    return newName;

}

console.log("Opgave 6, manual inverse");
console.log(turnManualInverseFor("Koekje"))
console.log(turnManualInverseFor("vrienden"))
console.log();




/* Opdracht 7 */
// Schrijf een functie die een woord verwacht checkt of dit woord een palindroom is. Een palindroom is een
// spiegelwoord: het is hetzelfde zowel vooruit als achterstevoren. Als dit zo is, geeft de functie true terug,
// zo niet, dan false.
// ---- Verwachte uitkomsten:
// "lepel" geeft true
// "madam" geeft true
// "vrienden" geeft false


/* Opdracht 8 */
// Schrijf een functie die een string en een letter verwacht. De functie telt hoe vaak die letter voorkomt in
// de string en geeft dit terug. Je mag hiervoor geen string- of array-methoden gebruiken.
// ---- Verwachte uitkomsten:
// "Hans en marietje lopen naar de supermarkt" en "e" geeft 6
// "Hans is zijn mondkapje vergeten" en "a" geeft 2


// ------------------------------- ADVANCED (optionele bonusopdrachten)

/* Opdracht 9 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Als de parameter n wordt meegegeven, worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 4]) geeft 4
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]


/* Opdracht 10 */
// Schrijf een functie die een array van getallen verwacht. De functie geeft het hoogste
// getal in de array terug. Je mag hier geen array-object methoden voor gebruiken zoals .max()
// ---- Verwachte uitkomsten:
// [3, 6, 9, 17, 4, 6, 25] geeft 25
// [46, 65, 34, 204, 190, 89] geeft 204


/* Opdracht 11 */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".
// ---- Verwachte uitkomst:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.