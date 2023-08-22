// Album: 
// Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, 
// and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums. 
// Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album.
function make_album(name, title, tracks) {
    return {
        artistName: name,
        albumTitle: title,
        tracks: tracks || 'unavailable',
    };
}
console.log(make_album('JamesArthur', 'you'));
console.log(make_album('Taylor Swift', 'Fearless'));
console.log(make_album('Miley Cyrus', 'Endless Summer Vacation'));
console.log(make_album('JamesArthur', 'you', 17));
console.log(make_album('Miley Cyrus', 'Endless Summer Vacation', 12));
