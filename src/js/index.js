// Square functions
function perimeterSquare(side){
    return side * 4;
}

function calculatePerimeterSquare(){
    const input = document.getElementById('InputSquare');
    const value = input.value;

    const perimeter = perimeterSquare(value);
    document.getElementById('result').innerHTML = perimeter.toFixed(2);
}

function areaSquare(side){
    return side * side;
}

function calculateAreaSquare(){
    const input = document.getElementById('InputSquare');
    const value = input.value;

    const area = areaSquare(value);
    document.getElementById('result').innerHTML = area.toFixed(2);
}



// Triangle functions
function perimeterTriangle(side1, side2, base){
    return side1 + side2 + base;
}

// console.log(perimeterTriangle(4, 6, 10)) // 20

function areaTriangle(side1, side2, base){
    // Calculate semiPerimeter
    const sP = (side1 + side2 + base)/ 2;
    // Formula Heron for calculate area without height
    return Math.sqrt(sP * (sP - side1) * (sP - side2) * (sP - base));
}

// console.log(areaTriangle(5,10,9));

function calculatePerimeterTriangle(){
    
    const input1 = document.getElementById('side-1');
    const value1 = Number(input1.value);
    const input2 = document.getElementById('side-2');
    const value2 = Number(input2.value);
    const input3 = document.getElementById('base');
    const value3 = Number(input3.value);
    
    const perimeter = perimeterTriangle(value1, value2, value3);
    const list = document.getElementById('measure');
    document.getElementById('result2').innerHTML = perimeter.toFixed(2);
}

function calculateAreaTriangle(){
    const input1 = document.getElementById('side-1');
    const value1 = Number(input1.value);
    const input2 = document.getElementById('side-2');
    const value2 = Number(input2.value);
    const input3 = document.getElementById('base');
    const value3 = Number(input3.value);
    
    const area = areaTriangle(value1, value2, value3);
    document.getElementById('result2').innerHTML = area.toFixed(2);
}






// Circle Functions

function diameterCircle(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;

function perimeterCircle(radio){
    const diameter = diameterCircle(radio);
    return diameter * PI;
}

function areaCircle(radio){
    return (radio * radio) * PI;
}

function calculatePerimeterCircle(){
    const input = document.getElementById('InputRadio');
    const value = input.value;
    
    const perimeter = perimeterCircle(value);
    document.getElementById('result3').innerHTML = perimeter.toFixed(2)
}

function calculateAreaCircle(){
    const input = document.getElementById('InputRadio');
    const value = input.value;
    
    const area = areaCircle(value);
    document.getElementById('result3').innerHTML = area.toFixed(2)
}




// SELECT
function updateMeasure(){
    var select = document.getElementById('measure');
    var option = select.options[select.selectedIndex];

    document.getElementById('measures').innerHTML = option.text;
}

function updateMeasure2(){
    var select = document.getElementById('measure2');
    var option = select.options[select.selectedIndex];

    document.getElementById('measures2').innerHTML = option.text;
}

function updateMeasure3(){
    var select = document.getElementById('measure3');
    var option = select.options[select.selectedIndex];

    document.getElementById('measures3').innerHTML = option.text;
}
