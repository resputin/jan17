'use strict';

// // function makeStudentReport(data) {
// //   let finalList = [];
// //   data.forEach(element => {
// //     let tempVal = `${element.name}: ${element.grade}`;
// //     finalList.push(tempVal);
// //   });
// //   return finalList;
// // }

// // const testData = [
// //   { name: 'Jane Doe', grade: 'A' },
// //   { name: 'John Dough', grade: 'B' },
// //   { name: 'Jill Do', grade: 'A' }
// // ];

// // const studentData = makeStudentReport(testData);
// // console.log(studentData);


// // const studentData = [
// //   {
// //     name: 'Tim',
// //     status: 'Current student',
// //     course: 'Biology',
// //   },
// //   {
// //     name: 'Sue',
// //     status: 'Withdrawn',
// //     course: 'Mathematics',
// //   },
// //   {
// //     name: 'Liz',
// //     status: 'On leave',
// //     course: 'Computer science',
// //   },
// // ];



// const enrollInSummerSchool = (students) => {
//   let tempObj = students.map((element) => {
//     element.status = 'In Summer Schoool';
//     return element;
//   });
//   return tempObj;
// }

// const newStatus = enrollInSummerSchool(studentData);

// console.log(newStatus);

// function findById(items, idNum) {
//   return items.find((element) => {
//     return element.id === idNum;
//   });
// }

// const scratchData = [
//   { id: 22, foo: 'bar' },
//   { id: 28, foo: 'bizz' },
//   { id: 19, foo: 'bazz' }
// ];

// let found = findById(scratchData, 28);
// console.log(found);


// const expectedKeys = ['id', 'name', 'age', 'city'];


// const objectA = {
//   id: 2,
//   name: 'Jane Doe',
//   age: 34,
//   city: 'Chicago',
// };

// const objectB = {
//   id: 3,
//   age: 33,
//   city: 'Peoria',
// };

// const objectC = {
//   id: 9,
//   name: 'Billy Bear',
//   age: 62,
//   city: 'Milwaukee',
//   hobby: 'Fishing'
// };


// const validateKeys = (object,expectedKeys) => {
//   let answer = true;
//   expectedKeys.forEach((n) => {
//   //   console.log('This is the name of the expected key: ' + n); 
//   //   console.log('Does the key exist in the object ' + n in object);
//     if (!(n in object)) {
//       answer = false;
//     }
//   });
//   if (Object.keys(object).length > expectedKeys.length) {
//     answer = false;
//   } 
//   return answer;
// };

// let finalAnswer = validateKeys(objectB,expectedKeys);
// console.log(finalAnswer);


