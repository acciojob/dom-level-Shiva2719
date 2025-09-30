//your JS code here. If required.
let elem = document.getElementById("level");

let levelCount = 0;

while (elem) {
    levelCount++;
    elem = elem.parentElement;
}

// Show alert with the level count
alert(`The level of the element is: ${levelCount}`);