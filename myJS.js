/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
var block = document.getElementById('color-block');
var Colorname = document.getElementById('color-name');

function changeColor(){  
    console.log(block.style.background)
    //Write a condition determine what color it should be changed to
    if ( block.style.background == "rgb(42, 126, 200)")
    {
        block.style.background = "#F08080";
        Colorname.innerHTML = "#F08080";
            
        //change the background color using JS

        //Change the text of the color using the span id color-name

    }
    else{
        block.style.background= "#2A7EC8";
        Colorname.innerHTML = "#2A7EC8";
   
        //change the background color using JS

        //Change the text of the color using the span id color-name

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

var ConverterButton = document.getElementById("convertbtn")
var theInput = document.getElementById("f-input")
var theOutput = document.getElementById("c-output")


ConverterButton.addEventListener('click',  convertTemp )

function convertTemp(){
    let output = (parseInt(theInput.value) -32)*5/9
    theOutput.innerHTML = output

    //Calculate the temperature here

    //Send the calculated temperature to HTML

}


