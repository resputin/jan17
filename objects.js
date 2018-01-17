'use strict';

// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function() {
//     return ((this.water / this.flour) * 100);
//   }
// };

// console.log(loaf.flour);
// console.log(loaf.water);
// console.log(loaf.hydration());

// const myCoolObject = {
//   foo: 'foo',
//   bar: 20,
//   fum: 'what',
//   quux: 'quux',
//   spam: 'email'
// };

// for (const key in myCoolObject) {
//   console.log(`${key}: ${myCoolObject[key]}`);
// }

// const LOTR = {
//   meals:['breakfast','second breakfast','elevensies','lunch','afternoon tea','dinner','supper']
// };

// console.log(LOTR.meals[3]);

// const employees = [
//   {
//     name: 'John',
//     jobTitle: 'Developer',
//     boss: 'Richard'
//   },
//   {
//     name: 'Jean',
//     jobTitle: 'Manager',
//     boss: 'Richard'
//   },
//   {
//     name: 'Larry',
//     jobTitle: 'Cable Guy',
//     boss: 'Richard'
//   },
//   {
//     name: 'Bob',
//     jobTitle: 'Janitor',
//     boss: 'Richard'
//   },
//   {
//     name: 'Richard',
//     jobTitle: 'Boss'
//   }
// ];

// employees.forEach((employee)=> {
//   console.log(`${employee.name}, who is a ${employee.jobTitle}`);
// });

// employees.forEach(employee => {
//   console.log(
//     `${employee.jobTitle} ${employee.name} reports to ${
//       employee.jobTitle !== 'Boss' ? employee.boss : 'nobody'
//     }.`
//   );
// });

function decode(message) {
  const cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  let decryptedMessage = '';
  const messageArray = message.split(' ');
  messageArray.forEach((message) => {
    if (cipher.hasOwnProperty(message[0])) {
      decryptedMessage += message[cipher[message[0]]];
    } else {
      decryptedMessage += ' ';
    }
  });
  return decryptedMessage;
}

console.log(decode('craft block argon meter bells brown croon droop'));