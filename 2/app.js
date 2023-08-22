// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
var person = "MUHAMMAD NABEEL";
// LowerCase
console.log(person.toLowerCase());
// UpperCase
console.log(person.toUpperCase());
// TitleCase
console.log(titleCase(person));
function titleCase(e) {
    e = e.toLowerCase();
    e = e.split(' ');
    for (var i = 0; i < e.length; i++) {
        e[i] = e[i].charAt(0).toUpperCase() + e[i].slice(1);
    }
    return e.join(' ');
}
