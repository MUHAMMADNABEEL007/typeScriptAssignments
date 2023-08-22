// More Guests: You just found a bigger dinner table, 
// so now more space is available. 
// Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

let guestList=[ 'Bare Mamo', 'Dada', 'Faizan', 'Saif', 'Nazia Api' ];
let newGuestList=['Asad','Ali','Ahsan'];

guestList.unshift(newGuestList[0]);
guestList.splice(3,0,newGuestList[1]);
guestList.push(newGuestList[2]);

for (var i=0; i<guestList.length; i++){
    console.log(`SALAM ${guestList[i]}, I am so excited to tell you that I arranged a dinner party at my home and I will be very happy if you could join us!`);
}
for (var i=0; i<guestList.length; i++){
    console.log(`SALAM ${guestList[i]}, I am also excited to inform you that I arranged a bigger dinner table so that more people could join us and have more one together!`);
}
console.log(guestList)





