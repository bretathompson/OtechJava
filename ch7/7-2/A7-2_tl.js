
var myheading2 = `Lois said, "I would love to have a juicy cheeseburger!"<br><br>`;
var sometext2 = `Superman replied, "Not now, Later! I am busy saving the world!"<br><br><br><br>`;

document.write(myheading2);
document.write(sometext2);

// or did you want it this way

var myheading3 = '"I would love to have a juicy cheeseburger!"<br><br>';
var sometext3 = '"Not now, Later! I am busy saving the world!"<br><br>';

document.write(`Lois said, ${myheading3}`);
document.write(`Superman replied, ${sometext3}`);