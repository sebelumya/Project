
function celciusToFarenheit(d) {
    c=prompt("enter celcius");
d=parseFloat(c);
   d=(d * 9/5) + 32;
   return d;
}


document.getElementById("celciusTofarenheit").innerHTML=celciusToFarenheit();