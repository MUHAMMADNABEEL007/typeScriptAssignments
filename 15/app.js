// Shrinking Guest List: 
// You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. 
// Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, 
// letting them know they’re still invited.
// • Remove the last two names from your list, 
// so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.
var guestList = ['Asad', 'Bare Mamo', 'Dada', 'Ali', 'Faizan', 'Saif', 'Nazia Api', 'Ahsan'];
console.log('I can invite only two people for dinner');
for (var i = 0; i < guestList.length + 3; i++) {
    var unGuestList = guestList.pop();
    console.log("Hi! ".concat(unGuestList, ", my new dinner table won\u2019t arrive in time so I am sorry I can\u2019t invite you to this dinner party"));
}
;
for (var i = 0; i < guestList.length + 1; i++) {
    var remainingGuestList = guestList.pop();
    console.log("Hi! ".concat(remainingGuestList, ", my new dinner table won\u2019t arrive in time but you are still welcome to this dinner party"));
}
;
console.log(guestList);
