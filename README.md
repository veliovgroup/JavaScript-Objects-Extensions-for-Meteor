## Useful Object Extensions for Meteor
#### Date:
`Date.now()` - Fix for ES if Date object has not now() method

#### Math:
`Math.getRandom(min, max)` - Get random number between `max` and `min` values, by default `max` is `1000` and `min` is `0`

#### Object
`Object.defineReactiveProperty(target, prop, value, callback, getCallback, setCallback)` - define Reactive property with callbacks: 
  - set callback before Setter and Getter
  - set callback on Setter
  - set callback on Getter

`inArray(needle, searchInKey, searchByKey)` - Extend Object prototype within inArray function

`someObj.walk(callback)` - Extend Object prototype within walk function callback, `callback(object, value, key){}`

`Object.Merge` - Merge the enumerable attributes of two objects deeply

`someArray.random()` - Extend Object prototype within random value pick up functionality for arrays

#### RegExp:
`RegExp.escape(string)` - Function is used to escape all dangerous/reserved symbols in strings before creating RegExp with it

#### String:
`someString.clone()` - Clone (a.k.a. create singleton) of String object. This method allows to resolve issue with variable's referencing. See performance [here](http://jsperf.com/clone-create-singleton-for-string-object)

Example:
```javascript
var str = 'abc';
var str2 = str.clone();
str = 'cde';
console.log(str2); //-> 'abc'
```

`String.generate(length, symbols)` - Generate random string from 1 to 10 symbols length, or with provided `length`, and made of provided `symbols`