// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, 
// return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names 
// and one array with the Great added to each magician’s name.
var magicians = ["David Copperfield", "Harry Houdini", "David Blaine", "Criss Angel", "Dynamo"];
var a = [];
function make_great(e) {
    for (var i = 0; i < e.length; i++) {
        a.push("Great ".concat(e[i]));
    }
}
make_great(magicians);
var newMagicians = a;
function show_magicians(original, updated) {
    console.log(original, updated);
}
show_magicians(magicians, newMagicians);
