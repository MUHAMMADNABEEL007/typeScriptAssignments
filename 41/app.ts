// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, 
// return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names 
// and one array with the Great added to each magician’s name.

let magicians=[`David Copperfield`,`Harry Houdini`,`David Blaine`,`Criss Angel`,`Dynamo`];
let a:any=[]
function make_great(e:any){
    
    for(let i=0; i<e.length; i++){
       a.push(`Great ${e[i]}`);
    }
    
}
make_great(magicians);

let newMagicians=a;

function show_magicians(original:any,updated:any){
        console.log(original,updated)
}


show_magicians(magicians,newMagicians);