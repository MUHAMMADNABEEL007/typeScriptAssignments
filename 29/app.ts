// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users=['jhon','admin','elliot','shawn','david'];

if(users===undefined){
    console.log('We need to find some users!')
}

let user='david';
for (let i=0; i<users.length; i++){
    if(user==='admin'){
        console.log(`Hello ${user}, would you like to see a status report?`);
        break;
}
else if(user===users[i]){
    console.log(`Hello ${users[i]}, thank you for logging in again`);
    break;
}
}

user='jhon';
for (let i=0; i<users.length; i++){
    if(user==='admin'){
        console.log(`Hello ${user}, would you like to see a status report?`);
        break;
}
else if(user===users[i]){
    console.log(`Hello ${users[i]}, thank you for logging in again`);
    break;
}
}

user='elliot';
for (let i=0; i<users.length; i++){
    if(user==='admin'){
        console.log(`Hello ${user}, would you like to see a status report?`);
        break;
}
else if(user===users[i]){
    console.log(`Hello ${users[i]}, thank you for logging in again`);
    break;
}
}
user='admin';
for (let i=0; i<users.length; i++){
    if(user==='admin'){
        console.log(`Hello ${user}, would you like to see a status report?`);
        break;
}
else if(user===users[i]){
    console.log(`Hello ${users[i]}, thank you for logging in again`);
    break;
}
}
user='shawn';
for (let i=0; i<users.length; i++){
    if(user==='admin'){
        console.log(`Hello ${user}, would you like to see a status report?`);
        break;
}
else if(user===users[i]){
    console.log(`Hello ${users[i]}, thank you for logging in again`);
    break;
}
}

users=[]
// console.log(typeof(users))

if(users.length===0){
    console.log('We need to find some users!')
}

user='david';
for (let i=0; i<users.length; i++){
    if(user==='admin'){
        console.log(`Hello ${user}, would you like to see a status report?`);
        break;
}
else if(user===users[i]){
    console.log(`Hello ${users[i]}, thank you for logging in again`);
    break;
}
}

user='jhon';
for (let i=0; i<users.length; i++){
    if(user==='admin'){
        console.log(`Hello ${user}, would you like to see a status report?`);
        break;
}
else if(user===users[i]){
    console.log(`Hello ${users[i]}, thank you for logging in again`);
    break;
}
}

user='elliot';
for (let i=0; i<users.length; i++){
    if(user==='admin'){
        console.log(`Hello ${user}, would you like to see a status report?`);
        break;
}
else if(user===users[i]){
    console.log(`Hello ${users[i]}, thank you for logging in again`);
    break;
}
}
user='admin';
for (let i=0; i<users.length; i++){
    if(user==='admin'){
        console.log(`Hello ${user}, would you like to see a status report?`);
        break;
}
else if(user===users[i]){
    console.log(`Hello ${users[i]}, thank you for logging in again`);
    break;
}
}
user='shawn';
for (let i=0; i<users.length; i++){
    if(user==='admin'){
        console.log(`Hello ${user}, would you like to see a status report?`);
        break;
}
else if(user===users[i]){
    console.log(`Hello ${users[i]}, thank you for logging in again`);
    break;
}
}
