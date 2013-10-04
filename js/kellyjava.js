/*
  EXERCISE 1

  Create 2 variables. 
  One for your name, and one for an adjective.
  Add the variables together so it looks like:

  ex: Daniel is awesome!
*/
var myName=(name); {
  console.log("Kelly"); 
}

var yourInterests=(yourInterests); {
  console.log("cool");
}



/*
  EXERCISE 2

  Let's turn the above example into a function.
  Create a function that takes in 2 arguments (a name and an adjective )

  Calling the function should do the same thing as exercise 1

  ex: 
  describePerson('Daniel', 'awesome')
  should return "Daniel is awesome!"

*/
var describePerson=function(myName, yourInterests) {
  console.log ("Kelly is cool")
}
(myName, yourInterests)

/*
  EXERCISE 3

  Modify the 'addItem' function below so that every time
  you call it, the items in the cart variable increases by 1.
  It should also display a message with how many items are
  in the cart.



*/
var itemsInCart=0
function addItem() {
  itemsInCart+=1;
  console.log("Items in cart:"+itemsInCart);
}
addItem(); // Should say 'Items in cart: 1'
addItem(); // Should say 'Items in cart: 2'
addItem(); // Should say 'Items in cart: 3'
addItem();




/*
  EXERCISE 4

  Swedes love saying stuff twice. Perfect example: hej hej
  
  Modify the swedify function below so that it takes in 
  any word, and prints it out twice!

*/
function swedify(word) {
  console.log(word + word);
}

swedify('hej ') // should say hej hej

/*
  EXERCISE 5

  I can never remember when SystemBolaget closes

  Modify the isSystemBolagetOpen function so that 
  if you pass it an hour, it says whether it is closed or not.
  For this example, pretend that it always closes at 18:00,
  and always opens at 9.

*/
function isSystemBolagetOpen(time) {
if (time <=18 && 9<=time ) {
  console.log('open at ' + time + ':00!' ) 
} else {
  console.log('closed at ' + time + ':00!')
}
}
 
isSystemBolagetOpen(12); // should say 'It is open at 12:00!'
isSystemBolagetOpen(19); // should say 'It is closed at 19:00!'
isSystemBolagetOpen(9);  // should say 'It is open at 9:00!'
isSystemBolagetOpen(8);  // should say 'It is closed 8:00!'


/*
  EXERCISE 6
  Loop through the favouriteThings array below, and console.log each element in it
  Try adding "I love" before each one

  output: 
  I love Eurovision!
  I love Midsummer!
  I love AddFood!
*/

var theLove= "condition" {
var condition = ['Eurovision', 'Midsummer', 'AddFood']; 
console.log('I Love ' + condition + '!')
}

(I Love, condition)





/*
  EXERCISE 7
  
  Write a function translate() that will translate a text 
  into "rÃ¶varsprÃ¥ket". 
  That is, double every consonant and place an occurrence of "o" 
  in between. 
  For example, translate("this is fun") should 
  return the string "tothohisos isos fofunon".

  output: 
  I love Eurovision!
  I love Midsummer!
  I love AddFood!
*/
console.log('Exercise 7');
function translate(sentence) {
  //put logic here
}

translate("this is fun"); // should print the string "tothohisos isos fofunon"

/*
  EXERCISE 8
  Given an array of names, have the function 'findLongestElement'
  return which name was the longest (has the most characters)
*/
console.log("Exercise 8");
var names = ['Dan', 'Thomas B', 'T-bone'];

function findLongestElement(array) {
  //put logic here
}

var longestName = findLongestElement(names);
console.log(longestName); // should return 'Thomas B'
