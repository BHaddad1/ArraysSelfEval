var animals = ["cat", "dog", "horse", "bear"];
var agesOfFriends = [32, 31, 38, 27];
var friendsEmployed = [true, true, true, false]

console.log(animals.slice(0,3));
//this method will print out the elements in the animal array from the first element, up to but not including the third element.
console.log(agesOfFriends.shift());
//this method will return the ages of my friends with the first element removed.
console.log(friendsEmployed.push(true));
//this method will return a new element to the friendsEmployed array.

//index positions in programming languages being at ZERO. The first element in an array is 0, and the second element is 1.
//For exmaple, in the animals array above, the 'first' element is the 0 element,
//or "cat.
