```javascript
//This code uses optional chaining and nullish coalescing to handle missing data gracefully.
const data = await firebase.database().ref('path/to/data').once('value');
const val = data.val();
const someProperty = val?.someProperty ?? 'default value';
console.log(someProperty);
//This code will not throw an error, even if someProperty does not exist. It will instead log 'default value'.```