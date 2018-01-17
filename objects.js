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

// function decode(message) {
//   const cipher = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
//   };
//   let decryptedMessage = '';
//   const messageArray = message.split(' ');
//   messageArray.forEach((message) => {
//     if (cipher.hasOwnProperty(message[0])) {
//       decryptedMessage += message[cipher[message[0]]];
//     } else {
//       decryptedMessage += ' ';
//     }
//   });
//   return decryptedMessage;
// }

// console.log(decode('craft block argon meter bells brown croon droop'));



// const message = 'craft block argon meter bells brown croon droop';

// const decode = (message) => {
//   const cipher = {
//     a:1,
//     b:2,
//     c:3,
//     d:4
//   };

//   let decryptedMessage = '';
//   const msgArray = message.split(' ');
  
//   msgArray.forEach((word) => {
//     if (cipher.hasOwnProperty(word[0])){
//       decryptedMessage += word[cipher[word[0]]];
//     } else {
//       decryptedMessage += ' ';
//     }
//   });
//   console.log(decryptedMessage);
// };

// decode(message);



const createCharacter = (name,race,origin,attack,defense,weapon= 'sword') => {
  return {
    name,
    nickname: name.split(' ')[0].toLowerCase(),
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function () {
      console.log(`${this.name} is a ${this.race} from ${this.origin} who uses a ${this.weapon}.`);
    },
    evaluateFight: function(opponent) {
      let damageDealt = (this.attack-opponent.defense) < 0 ? 0 : (this.attack-opponent.defense);
      let damageReceived = (opponent.attack-this.defense) < 0 ? 0 : (opponent.attack-this.defense);
      console.log(`Your opponent takes ${damageDealt} damage and you receive ${damageReceived} damage`);
      
    }
  };
};


let frodo = createCharacter('frodo the hobbit','hobbit','the shire',20,50);
let gandalf = createCharacter('Gandalf the White','wizard','across the ocean','100','90');
// frodo.evaluateFight(gandalf);
// gandalf.evaluateFight(frodo);

let characters = [createCharacter('frodo the hobbit','hobbit','the shire',20,50),createCharacter('Gandalf the White','wizard','across the ocean','100','90'),createCharacter('Gimmilee','dwarf','helm\'s deep','150','200'),createCharacter('Bilbo','Hobbit','The Shire','1','15'),createCharacter('Aragorn son of Arathorn','Man-Elf','Gondor','300','220')];
characters.push(createCharacter('Arwen Undomiel','Half-elf','Rivendell','150','100'));

characters.find((element) => {
  // console.log(element.nickname);
  return element.nickname === 'aragorn';
}).describe();

const hobbitArr = characters.filter((element) => {
  return element.race.toLowerCase() === 'hobbit';
});

// console.log(hobbitArr);

const strongPeople = characters.filter((element) => {
  return element.attack > 5;
});

// console.log(strongPeople);
