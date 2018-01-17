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