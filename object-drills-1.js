// 'use strict';

// function createMyObject() {
//   return {
//     foo: 'bar',
//     answerToUnivers: 42,
//     'ollie ollie': 'oxenfree',
//     sayHello: function() {
//       console.log("Hello");
//     }
//   };
// }

// const newObject = createMyObject();

// newObject.sayHello();

// function updateObject(obj) {
//   obj.foo = 'foo';
//   obj.bar = 'bar';
//   obj.bizz = 'bizz';
//   obj.bang = 'bang';
// }

// updateObject(newObject);

// console.log(newObject);


// Self Reference

// function personMaker() {
//     var person = {
//       firstName: 'Paul',
//       lastName: 'Jones',
//       // replace `null` with a function that uses self reference to return
//       // full name
//       fullName: function() {
//           console.log(this.firstName + ' ' + this.lastName);
//       }
//     };
//     return person;
//   }
//  const person = personMaker();

//  person.fullName();


// function keyDeleter(obj) {
//     delete obj.foo;
//     delete obj.bar;
//     return obj;
//   }
  
//   var sampleObj = {
//     foo: 'foo',
//     bar: 'bar',
//     bizz: 'bizz',
//     bang: 'bang',
//   };
  
//  const modifiedObj =  keyDeleter(sampleObj);

//  console.log(modifiedObj);