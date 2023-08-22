// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.
var items1 = ['lettuce', 'grilled chicken', "bread"];
var items2 = ['onion', 'grilled beef', "bread"];
var items3 = ['coleslaw', 'fried egg', "bread"];
function customSandwich(e) {
    console.log("sandwich summary \n".concat(e));
}
customSandwich(items1);
customSandwich(items2);
customSandwich(items3);
