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

const employees = [
  {
    name: 'John',
    jobTitle: 'Developer',
    boss: 'Richard'
  },
  {
    name: 'Jean',
    jobTitle: 'Manager',
    boss: 'Richard'
  },
  {
    name: 'Larry',
    jobTitle: 'Cable Guy',
    boss: 'Richard'
  },
  {
    name: 'Bob',
    jobTitle: 'Janitor',
    boss: 'Richard'
  },
  {
    name: 'Richard',
    jobTitle: 'Boss'
  }
];

// employees.forEach((employee)=> {
//   console.log(`${employee.name}, who is a ${employee.jobTitle}`);
// });

employees.forEach(employee => {
  console.log(
    `${employee.jobTitle} ${employee.name} reports to ${
      employee.jobTitle !== 'Boss' ? employee.boss : 'nobody'
    }.`
  );
});


