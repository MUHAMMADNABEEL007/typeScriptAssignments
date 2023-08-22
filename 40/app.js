// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians 
// by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
var magicians = ["David Copperfield", "Harry Houdini", "David Blaine", "Criss Angel", "Dynamo"];
function make_great(e) {
    for (var i = 0; i < e.length; i++) {
        e[i] = "Great ".concat(e[i]);
    }
    console.log(e);
}
make_great(magicians);
