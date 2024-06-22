const findTheOldest = function(people) {
    let ages = [];

    // Calculate the age of the person and store in an array
    people.forEach((person) => {
        person["age"] = person.yearOfDeath !== undefined ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;

        ages.push(person.age)
    })

    // Get the max age 
    oldestAge = Math.max(...ages)

    // Filter the person with the Oldest age
    return people.filter((person) => person.age === oldestAge)[0]
};

// Do not edit below this line
module.exports = findTheOldest;
