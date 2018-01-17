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

// characters.find((element) => {
//   // console.log(element.nickname);
//   return element.nickname === 'aragorn';
// }).describe();

const hobbitArr = characters.filter((element) => {
  return element.race.toLowerCase() === 'hobbit';
});

// console.log(hobbitArr);

const strongPeople = characters.filter((element) => {
  return element.attack > 5;
});

// console.log(strongPeople);


const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' }
];

// const search = {id: 7, squad: 'Avengers'};

// const findOne = (arr, query) => {
//   let queryKeys = Object.keys(query);
//   queryKeys.forEach((key) => {
//     return arr.find((entry) => {
//       return (entry.hasOwnProperty(key) && entry[key] === query[key]);
//     });
//   });
// };

// THIS ONE WORKS
// const findOne = (arr, query) => {
//   let i = 0;
//   const foundArray = arr.find((entry) => {
//     let found = true;
//     //return true if the query key and value match the array key and value
//     for (let key in query) {
      
//       if (entry[key] !== query[key]) {
//         found = false;
//         break;
//       }
//       i++;
//     }
//     return found;
//   });
//   console.log(i);
//   return foundArray === undefined ? null : foundArray; 
// };

// const findOne = (arr, query) => {
//   const queryKeys = Object.keys(query);
//   const foundArray = arr.find(entry => {
//     let found = true;
//     //return true if the query key and value match the array key and value
//     let i = 0;
//     while (found === true) {
//       if (entry[queryKeys[i]] !== query[queryKeys[i]]) {
//         found = false;
//       }
//     }
//     return found;
//   });
//   return foundArray === undefined ? null : foundArray;
// };

// console.log(findOne(HEROES, search));


const search = {id: 2};

// const findOne = (arr, query) => {
//   let i = 0;
//   const foundArray = arr.find((entry) => {
//     let found = true;
//     //return true if the query key and value match the array key and value
//     for (let key in query) {
      
//       if (entry[key] !== query[key]) {
//         found = false;
//         break;
//       }
//       i++;
//     }
//     return found;
//   });
//   console.log(i);
//   return foundArray === undefined ? null : foundArray; 
// };


const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne(query) {
    const arr = this.store.heroes;
    let i = 0;
    const foundArray = arr.find((entry) => {
      i++;
      let found = true;
      //return true if the query key and value match the array key and value
      for (let key in query) {
        if (entry[key] !== query[key]) {
          found = false;
          
        }
      }
      return found;
    });
    console.log(i);
    return foundArray === undefined ? null : foundArray; 
  }
};


console.log(Database.findOne(search));