'use strict';

function createMyObject() {
  return {
    foo: 'bar',
    answerToUnivers: 42,
    'ollie ollie': 'oxenfree',
    sayHello: function() {
      console.log("Hello");
    }
  };
}

const newObject = createMyObject();

newObject.sayHello();

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
}

updateObject(newObject);

console.log(newObject);