//output html
const PI = 3.141592;

function doResult1(){
    var radius = document.getElementById("inputvalue1").value;
    var total = PI * (radius * radius);
    document.getElementById("outputvalue1").innerHTML = "Area of Circle = "+ total;
}

function doResult2(){
    var radius = document.getElementById("inputvalue2").value;
    var total = 2 * (PI * radius);
    document.getElementById("outputvalue2").innerHTML = "Circumference of Circle = "+ total;
}

function doResult3(){
    var radius = document.getElementById("inputvalue3").value;
    var total = 2 * radius;
    document.getElementById("outputvalue3").innerHTML = "Diameter of Circle = "+ total;
}

function doResult4(){
    var radius = document.getElementById("inputvalue4").value;
    var total = 4/3*(PI*(radius*radius* radius));
    document.getElementById("outputvalue4").innerHTML = "Volume of Circle = "+ total;
}
