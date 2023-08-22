// Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.
let location1=[`london`,`paris`,`new york`,`sydney`,'canada']
// • Print your array in its original order.
console.log(`orignal array: \n${location1}`);
// • Print your array in alphabetical order without modifying the actual list.
let AO=location1.slice()
console.log(`in alphabetical order: \n${AO.sort()}`);

// • Show that your array is still in its original order by printing it.
console.log(`orignal array: \n${location1}`);

// • Print your array in reverse alphabetical order without changing the order of the original list.
let RA0=location1.slice()
console.log(`in reverse alphabetical order: \n${AO.reverse()}`);

// • Show that your array is still in its original order by printing it again.
console.log(`orignal array: \n${location1}`);

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(`in reverse order: \n${location1.reverse()}`);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`in reverse back to original order: \n${location1.reverse()}`);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`in alphabetical order: \n${location1.sort()}`);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(`in reverse alphabetical order: \n${location1.reverse()}`);