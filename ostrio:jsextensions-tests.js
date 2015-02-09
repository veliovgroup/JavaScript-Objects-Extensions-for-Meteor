Tinytest.add('date.js: Date.now()', function (test) {
  test.equal(Date.now(), new Date().getTime());
});

Tinytest.add('math.js: Math.getRandom()', function (test) {
  test.equal(101, Math.getRandom(101, 101));
});

Tinytest.add('object.js: Array.random()', function (test) {
  var array = [1];
  test.equal(1, array.random());
});

Tinytest.add('object.js: Object.Merge()', function (test) {
  var obj1 = {
    math:{
      functions: ['+', '-']
    },
    otherObjectOne:{
      values: ['one', 'two']
    }
  };

  var obj2 = {
    math:{
      functions: ['*', '/']
    },
    otherObjectTwo:{
      values: ['three', 'four']
    }
  };

  var expected = {
    math:{
      functions: ['+', '-', '*', '/']
    },
    otherObjectOne:{
      values: ['one', 'two']
    },
    otherObjectTwo:{
      values: ['three', 'four']
    }
  };

  test.equal(expected, Object.Merge(obj1, obj2));
});

Tinytest.add('object.js: Object.walk()', function (test) {
  var obj = {
    prop: 1,
    prop: 2,
    prop: 3,
    prop: 4
  };

  var expected = {
    prop: 1,
    prop: 4,
    prop: 6,
    prop: 8
  };
  
  obj.walk(function(object, value, key){
    object[key] = value * 2;
  });

  test.equal(obj, expected);
});

Tinytest.add('object.js: Object.inArray()', function (test) {
  var array = ['someValue', ['someNestedValue', 'otherNestedValue', ['veryNestedValue']]];

  test.isTrue(array.inArray('veryNestedValue'));
  test.isFalse(array.inArray(123));
});

Tinytest.add('object.js: Object.diff()', function (test) {
  var array = ['someValue', 'some2Value', 'otherNestedValue'];

  test.isTrue(array.diff(['veryNestedValue', 'some2Value'], true));
  test.isFalse(array.diff(['123', 'asdf', 'sdfadf'], true));

  test.equal(array.diff(['veryNestedValue', 'some2Value']), ['some2Value']);
  test.equal(array.diff(['123', 'asdf', 'sdfadf']), []);
});

Tinytest.add('regexp.js: RegExp.escape()', function (test) {
  var string = '*/;Danger_==+ Value.()-';

  test.equal('\\*\\/;Danger_==\\+ Value\\.\\(\\)\\-', RegExp.escape(string));
});

Tinytest.add('string.js: String.generate()', function (test) {

  test.equal('AAAAA', String.generate(5, 'A'));
});

Tinytest.add('string.js: String.rand()', function (test) {
  test.equal(50, String.rand(50).length);
});

Tinytest.add('string.js: String.clone()', function (test) {
  var a = 'abc';
  var b = a.clone();
  a = 123;
  test.equal(123, a);
  test.equal('abc', b);
});