const findTheOldest = function(people) {
    let deadAge = 0;
    let deadPerson = '';
    let aliveAge = 0;
    let alivePerson = '';
    let dt = new Date();
    
    for (let person of people) {
        if (person.hasOwnProperty('yearOfDeath') == false) {
            aliveAge =  dt.getFullYear() - person.yearOfBirth;
            alivePerson = person;
        }
        
        if (person.yearOfDeath - person.yearOfBirth > deadAge) {
            deadAge = person.yearOfDeath - person.yearOfBirth;
            deadPerson = person;
        }
    }
    
    return deadAge > aliveAge ? deadPerson : alivePerson;
};

// Do not edit below this line
module.exports = findTheOldest;
