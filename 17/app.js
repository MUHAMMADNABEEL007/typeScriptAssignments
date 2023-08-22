// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.
var guestList = ['Bari Phopho', 'Dada', 'Faizan', 'Zeeshan'];
for (var i = 0; i < guestList.length; i++) {
    console.log("SALAM ".concat(guestList[i], ", I am so excited to tell you that I arranged a dinner party at my home and I will be very happy if you could join us!"));
}
guestList = ['Bari Phopho', 'Dada', 'Faizan', 'Zeeshan'];
guestList[0] = "Bare Mamo";
guestList[3] = "Saif";
guestList[4] = "Nazia Api";
for (var i = 0; i < guestList.length; i++) {
    console.log("SALAM ".concat(guestList[i], ", I am so excited to tell you that I arranged a dinner party at my home and I will be very happy if you could join us!"));
}
console.log("These guest are not coming Bari phopho and Zeeshan");
guestList = ['Bare Mamo', 'Dada', 'Faizan', 'Saif', 'Nazia Api'];
var newGuestList = ['Asad', 'Ali', 'Ahsan'];
guestList.unshift(newGuestList[0]);
guestList.splice(3, 0, newGuestList[1]);
guestList.push(newGuestList[2]);
for (var i = 0; i < guestList.length; i++) {
    console.log("SALAM ".concat(guestList[i], ", I am so excited to tell you that I arranged a dinner party at my home and I will be very happy if you could join us!"));
}
for (var i = 0; i < guestList.length; i++) {
    console.log("SALAM ".concat(guestList[i], ", I am also excited to inform you that I arranged a bigger dinner table so that more people could join us and have more one together!"));
}
console.log(guestList);
guestList = ['Asad', 'Bare Mamo', 'Dada', 'Ali', 'Faizan', 'Saif', 'Nazia Api', 'Ahsan'];
console.log('I can invite only two people for dinner');
for (var i = 0; i < guestList.length + 3; i++) {
    var unGuestList = guestList.pop();
    console.log("Hi! ".concat(unGuestList, ", my new dinner table won\u2019t arrive in time so I am sorry I can\u2019t invite you to this dinner party"));
}
;
var remain = guestList.length;
for (var i = 0; i < guestList.length + 1; i++) {
    var remainingGuestList = guestList.pop();
    console.log("Hi! ".concat(remainingGuestList, ", my new dinner table won\u2019t arrive in time but you are still welcome to this dinner party"));
}
;
console.log(guestList);
console.log("I am inviting ".concat(remain, " people to the dinner"));
