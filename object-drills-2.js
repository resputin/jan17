'use strict';

function makeStudentReport(data) {
  let finalList = [];
  data.forEach(element => {
    let tempVal = `${element.name}: ${element.grade}`;
    finalList.push(tempVal);
  });
  return finalList;
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' }
];

const studentData = makeStudentReport(testData);
console.log(studentData);