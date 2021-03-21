
let topBar = document.querySelectorAll(".one");
let topBarLhs = document.querySelectorAll(".one-lhs");
let topBarRhs = document.querySelectorAll(".one-rhs");

let middle = document.querySelectorAll(".two");
let middleLhs = document.querySelectorAll(".two-lhs");
let middleRhs = document.querySelectorAll(".two-rhs");

let bottom = document.querySelectorAll(".three");
let bottomLhs = document.querySelectorAll(".three-lhs");
let bottomRhs = document.querySelectorAll(".three-rhs");

let topLeft = document.querySelectorAll(".four");
let topLeftLhs = document.querySelectorAll(".four-lhs");
let topLeftRhs = document.querySelectorAll(".four-rhs");

let bottomLeft = document.querySelectorAll(".five");
let bottomLeftLhs = document.querySelectorAll(".five-lhs");
let bottomLeftRhs = document.querySelectorAll(".five-rhs");

let topRight = document.querySelectorAll(".six");
let topRightLhs = document.querySelectorAll(".six-lhs");
let topRightRhs = document.querySelectorAll(".six-rhs");

let bottomRight = document.querySelectorAll(".seven");
let bottomRightLhs = document.querySelectorAll(".seven-lhs");
let bottomRightRhs = document.querySelectorAll(".seven-rhs");

let digitColor = "aqua";
let offColor = "rgb(0, 24, 24)";

function topBarOn(i){
    topBar[i].style.backgroundColor = digitColor;
    topBarLhs[i].style.borderRightColor = digitColor;
    topBarRhs[i].style.borderLeftColor = digitColor; 
}
function topBarOff(i){
    topBar[i].style.backgroundColor = offColor;
    topBarLhs[i].style.borderRightColor = offColor;
    topBarRhs[i].style.borderLeftColor = offColor; 
}


function middleBarOn(i){
    middle[i].style.backgroundColor = digitColor;
    middleLhs[i].style.borderRightColor = digitColor;
    middleRhs[i].style.borderLeftColor = digitColor; 
}
function middleBarOff(i){
    middle[i].style.backgroundColor = offColor;
    middleLhs[i].style.borderRightColor = offColor;
    middleRhs[i].style.borderLeftColor = offColor; 
}


function bottomBarOn(i){
    bottom[i].style.backgroundColor = digitColor;
    bottomLhs[i].style.borderRightColor = digitColor;
    bottomRhs[i].style.borderLeftColor = digitColor; 
}
function bottomBarOff(i){
    bottom[i].style.backgroundColor = offColor;
    bottomLhs[i].style.borderRightColor = offColor;
    bottomRhs[i].style.borderLeftColor = offColor; 
}


function topLeftOn(i){
    topLeft[i].style.backgroundColor = digitColor;
    topLeftLhs[i].style.borderRightColor = digitColor;
    topLeftRhs[i].style.borderLeftColor = digitColor; 
}
function topLeftOff(i){
    topLeft[i].style.backgroundColor = offColor;
    topLeftLhs[i].style.borderRightColor = offColor;
    topLeftRhs[i].style.borderLeftColor = offColor; 
}


function bottomLeftOn(i){
    bottomLeft[i].style.backgroundColor = digitColor;
    bottomLeftLhs[i].style.borderRightColor = digitColor;
    bottomLeftRhs[i].style.borderLeftColor = digitColor; 
}
function bottomLeftOff(i){
    bottomLeft[i].style.backgroundColor = offColor;
    bottomLeftLhs[i].style.borderRightColor = offColor;
    bottomLeftRhs[i].style.borderLeftColor = offColor; 
}


function topRightOn(i){
    topRight[i].style.backgroundColor = digitColor;
    topRightLhs[i].style.borderRightColor = digitColor;
    topRightRhs[i].style.borderLeftColor = digitColor; 
}
function topRightOff(i){
    topRight[i].style.backgroundColor = offColor;
    topRightLhs[i].style.borderRightColor = offColor;
    topRightRhs[i].style.borderLeftColor = offColor; 
}


function bottomRightOn(i){
    bottomRight[i].style.backgroundColor = digitColor;
    bottomRightLhs[i].style.borderRightColor = digitColor;
    bottomRightRhs[i].style.borderLeftColor = digitColor; 
}
function bottomRightOff(i){
    bottomRight[i].style.backgroundColor = offColor;
    bottomRightLhs[i].style.borderRightColor = offColor;
    bottomRightRhs[i].style.borderLeftColor = offColor; 
}

function reset(digit){
    topBarOff(digit);
    middleBarOff(digit);
    bottomBarOff(digit);
    topLeftOff(digit);
    bottomLeftOff(digit);
    topRightOff(digit);
    bottomRightOff(digit);
}

function zero(digit){
    reset(digit);
    topBarOn(digit);
    bottomBarOn(digit);
    topLeftOn(digit);
    bottomLeftOn(digit);
    topRightOn(digit);
    bottomRightOn(digit);
}

function one(digit){
    reset(digit);
    topRightOn(digit);
    bottomRightOn(digit);
}

function two(digit){
    reset(digit);
    topBarOn(digit);
    middleBarOn(digit);
    bottomBarOn(digit);
    topRightOn(digit);
    bottomLeftOn(digit);
}

function three(digit){
    reset(digit);
    topBarOn(digit);
    middleBarOn(digit);
    bottomBarOn(digit);
    topRightOn(digit);
    bottomRightOn(digit);
}

function four(digit){
    reset(digit);
    topLeftOn(digit);
    topRightOn(digit);
    middleBarOn(digit);
    bottomRightOn(digit);
}

function five(digit){
    reset(digit);
    topBarOn(digit);
    middleBarOn(digit);
    bottomBarOn(digit);
    topLeftOn(digit);
    bottomRightOn(digit);
}

function six(digit){
    reset(digit);
    topBarOn(digit);
    middleBarOn(digit);
    bottomBarOn(digit);
    topLeftOn(digit);
    bottomLeftOn(digit);
    bottomRightOn(digit);
}

function seven(digit){
    reset(digit);
    topBarOn(digit);
    topRightOn(digit);
    bottomRightOn(digit);
}

function eight(digit){
    reset(digit);
    topBarOn(digit);
    middleBarOn(digit);
    bottomBarOn(digit);
    topRightOn(digit);
    topLeftOn(digit);
    bottomLeftOn(digit);
    bottomRightOn(digit);
}

function nine(digit){
    reset(digit);
    topBarOn(digit);
    middleBarOn(digit);
    bottomBarOn(digit);
    topRightOn(digit);
    topLeftOn(digit);
    bottomRightOn(digit);
}


// let time = new Date();
function update(){
    let time = new Date();
    let hours = time.getHours();
    if(hours < 10){
        hours = "0"+hours.toString();
    }
    let digitZero = parseInt((hours.toString()[0]));
    let digitOne = parseInt((hours.toString()[1]));
    
    let minutes = time.getMinutes();
    if(minutes < 10){
        minutes = "0"+minutes.toString();
    }
    let digitTwo = parseInt((minutes.toString()[0]));
    let digitThree = parseInt((minutes.toString()[1]));

    let seconds = time.getSeconds();
    if(seconds < 10){
        seconds = "0"+minutes.toString();
    }
    let digitFour = parseInt((seconds.toString()[0]));
    let digitFive = parseInt((seconds.toString()[1]));

    switch(parseInt(digitZero)){
        case 0: zero(0); break;
        case 1: one(0); break;
        case 2: two(0); break;
    }
    switch(parseInt(digitOne)){
        case 0: zero(1); break;
        case 1: one(1); break;
        case 2: two(1); break;
        case 3: three(1); break;
        case 4: four(1); break;
        case 5: five(1); break;
        case 6: six(1); break;
        case 7: seven(1); break;
        case 8: eight(1); break;
        case 9: nine(1); break;
    }
    switch(parseInt(digitTwo)){
        case 0:zero(2); break;
        case 1:one(2); break;
        case 2:two(2); break;
        case 3: three(2); break;
        case 4: four(2); break;
        case 5: five(2); break;
    }
    switch(parseInt(digitThree)){
        case 0:zero(3); break;
        case 1:one(3); break;
        case 2:two(3); break;
        case 3: three(3); break;
        case 4: four(3); break;
        case 5: five(3); break;
        case 6: six(3); break;
        case 7: seven(3); break;
        case 8: eight(3); break;
        case 9: nine(3); break;
    }
    switch(parseInt(digitFour)){
        case 0:zero(4); break;
        case 1:one(4); break;
        case 2:two(4); break;
        case 3: three(4); break;
        case 4: four(4); break;
        case 5: five(4); break;
    }
    switch(parseInt(digitFive)){
        case 0:zero(5); break;
        case 1:one(5); break;
        case 2:two(5); break;
        case 3: three(5); break;
        case 4: four(5); break;
        case 5: five(5); break;
        case 6: six(5); break;
        case 7: seven(5); break;
        case 8: eight(5); break;
        case 9: nine(5); break;
    }
    
} 

setInterval(update, 1000);
// console.log(time)

