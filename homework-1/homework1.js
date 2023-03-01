//-1------------------
let firstName = "John";
let lastName = "Adams";
document.write(firstName + " " + lastName + "<br>");

firstName = "Anna";
lastName = "Karenina";

document.write(firstName + " " + lastName);
//-2------------------
let a; //undefined
let c = 9; //9
let str = "Hi 5!"; //Hi 5!
let b = true; //true
let y = 9 + "1"; //91
let x = "a" / 6; //NaN

console.log(a, c, str, b, y, x);

const Pi = 3.14159;
const e = 2.7183; //base of natural logarithms
const g = 9.80665; //acceleration of gravity
//-3-------------------------------
let coffeeType = "Americano";
let smootherAmount = "3:1";
let caffeAmericanoRatio = "2:1";
let partsOfHotWater = "2";
let partOfEspresso = "1";
let cofeeShop = "Starbucks";

document.write(`<h1>How to make an Americano</h1>
<br><img src="https://www.acouplecooks.com/wp-content/uploads/2020/10/How-to-make-an-Americano-007.jpg" width="200" height="200"/>
<div style="max-width: 75%;">1. The typical Caffe ${coffeeType} ratio is ${caffeAmericanoRatio}. That’s ${partsOfHotWater} parts hot water to ${partOfEspresso} part espresso. This ratio makes the drink still taste dark and bitter, like a lightened form of espresso. <br> 2. You can customize the water in an ${coffeeType} to taste. Every barista and coffee shop makes an ${coffeeType} differently. <br> 3. Use ${smootherAmount} for a smoother, milder coffee with more volume. This ratio makes the ${coffeeType} taste like a bitter drip coffee. (If you order an ${coffeeType} at ${cofeeShop}, it will taste like this ratio.</div>`);

document.write(`<br><h1>Calculate BMI</h1><label>Name: </label><input type="text" name="name" id="name" placeholder="Enter your name"></input><br>
<label>Veight: </label><input type="text" name="veight" id="veight" placeholder="Enter your veight"></input><br>
<label>Height: </label><input type="text" name="height" id="height" placeholder="Enter your height"></input>
<p id="bmiVal">Your results will be here.</p></br>
<button type="button" onClick="bmiFunctin()">Calculate BMI</button><br>
<br>
<h1>Swapping Variable Values Function</h1><label>Variable1: </label><input type="text" name="var1" id="var1" placeholder="Enter your variable1"></input><br>
<label>Variable2: </label><input type="text" name="var2" id="var2" placeholder="Enter your variable2"></input><p id="chenVar" style="white-space: pre;">Your results will be here.</p><br><button type="button" onClick="changeVariable()">Change Variables</button>`);

//BMI = veight (kg)/ height (m) squared number
let bmiFunctin = () => {
  let name = document.getElementById("name").value;
  let veight = document.getElementById("veight").value;
  let height = document.getElementById("height").value;
  let bmiVal = document.getElementById("bmiVal");
  if (name!=="" && veight!=="" && height!=="") {
    let bmi = veight/height ** 2;
   		 return bmiVal.textContent = name+", your BMI is "+parseFloat(bmi).toFixed(4); 
  }
  else return bmiVal.textContent = "Please enter values into the input fields!"
}

//console.log(bmiFunctin("Alona Vladymyrova",56,155));

//Swapping Variable Values Function
//REED THIS:
//https://tproger.ru/problems/popular-ways-to-swap/
let isNumber = (n) => { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

let ifNumber = (a,b) => {
		a = a ^ b 
    b = b ^ a 
    a = a ^ b;
    return [a, b];
}

let ifString = (a,b) => {
	 let c;
   c=a; a=b; b=c;
   return [a, b];
}

let changeVariable = () => {
	let a = document.getElementById("var1").value;
  let b = document.getElementById("var2").value;
  let result = document.getElementById("chenVar");
 
  if (a!=="" && b!=="") {
    if (isNumber(a)===true && isNumber(b)===true) {
   console.log("We are Numbers");
  result.textContent = `Variable1 = ${a}, Variable2 = ${b}\r\n`; 
    console.log(a,b);
    //We using XOR: ^
    let arr = ifNumber(a,b);
    a=arr[0]; b=arr[1];
    console.log(a,b);
    result.textContent += `Variable1 = ${a}, Variable2 = ${b}`;
  }  
   else /*if ((isNumber(a)===false && isNumber(b)===false) || (isNumber(a)===true && isNumber(b)===false) || (isNumber(a)===false && isNumber(b)===true))*/ {
  console.log("We are not a Numbers");
   result.textContent = `Variable1 = ${a}, Variable2 = ${b}\r\n`; 
   console.log(a,b);
   let arr = ifString(a,b);
   a=arr[0]; b=arr[1];
   console.log(a,b);
   result.textContent += `Variable1 = ${a}, Variable2 = ${b}`; 
  } 
  
  }
  else result.textContent = "Please enter valid values into the input fields!"

//https://jsfiddle.net/uv1pzw6L/2/
//https://jsfiddle.net/jmntfp27/1/
