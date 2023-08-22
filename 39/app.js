// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
var magicians = ["David Copperfield", "Harry Houdini", "David Blaine", "Criss Angel", "Dynamo"];
function show_magicians(e) {
    for (var i = 0; i < e.length; i++) {
        console.log(e[i]);
    }
}
show_magicians(magicians);
