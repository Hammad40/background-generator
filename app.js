var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
//selecting body
var body = document.getElementById("gradient");

//function that sets the gradient from color picker input to background color
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";
	//to display the color info
	css.textContent = body.style.background + ";";
}

//using the input given to apply to the background for the first color picker on the page
//using setGradient to save memory and reusing function
//using setGradient instead of setGradient(), because addEvent listener automatically calls it

color1.addEventListener("input", setGradient)

//using similar code to change the colors of the second color picker
//using setGradient again

color2.addEventListener("input", setGradient)