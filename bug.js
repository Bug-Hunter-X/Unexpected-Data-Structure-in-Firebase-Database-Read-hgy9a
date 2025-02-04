```javascript
//This code will cause an error if the data is not in the expected format.
const data = await firebase.database().ref('path/to/data').once('value');
const val = data.val();
console.log(val.someProperty);
//If someProperty does not exist then this will cause an error.```