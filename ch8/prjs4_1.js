function car_cost(mycar, paycheck) {
    window.alert("You have a " + mycar + " and make $" + paycheck);
}
function get_added_text() {
    var textpart1 = "This project ";
    var textpart2 = "is almost fun!";
    var addingtext = textpart1 + textpart2;
    return addingtext;
}
car_cost("Mustang", 1500);
var alerttext = get_added_text();
window.alert(alerttext);
