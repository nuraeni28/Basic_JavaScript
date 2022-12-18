//create map directly
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap)

//create a map with set() method
const myMapp = new Map();
myMapp.set('1', 'a String Key');
myMapp.set(1, 'a number key')

console.log(myMapp)
    
//access values
const gpaStudent = new Map([
    ['Neni', 3.85],
    ['Nina', 3.56],
    ['Nas', 3.00]
]);

const gpaNeni = gpaStudent.get('Neni')
console.log(gpaNeni)





    

