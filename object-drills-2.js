// 'use strict';

// function makeStudentReport(data) {
//   let finalList = [];
//   data.forEach(element => {
//     let tempVal = `${element.name}: ${element.grade}`;
//     finalList.push(tempVal);
//   });
//   return finalList;
// }

// const testData = [
//   { name: 'Jane Doe', grade: 'A' },
//   { name: 'John Dough', grade: 'B' },
//   { name: 'Jill Do', grade: 'A' }
// ];

// const studentData = makeStudentReport(testData);
// console.log(studentData);


const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];



const enrollInSummerSchool = (students) => {
  let tempObj = students.map((element) => {
    element.status = 'In Summer Schoool';
    return element;
  });
  return tempObj;
}

const newStatus = enrollInSummerSchool(studentData);

console.log(newStatus);