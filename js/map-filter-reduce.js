"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
console.log(users);

//TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
var threeLang = users.filter(function (user){
  if(user.languages.length > 2){
      return user.languages;
  }
})
console.log(threeLang);

//TODO: Use .map to create an array of strings where each element is a user's email address
var userEmails = users.map(function(user){
    return user.email;
})
console.log(userEmails);

//TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
var totalExp = users.reduce(function(total, user){
    return total + user.yearsOfExperience
    //made the mistake of returning the average within this function, so it got the average each time it iterated through the array
    //(0+5)/5 = 1 --> (1+6)/5 = 1.4 --> (1.4+7)/5 = 1.68 --> (1.68+8)/5 = 1.936 --> (1.936+9)/5 = 2.1872
}, 0);
var averageExp = totalExp/users.length
console.log(averageExp);

//TODO: Use .reduce to get the longest email from the list of users.

var emails = []
users.forEach(function(user){
    emails.push(user.email)
})
console.log(emails)

var longestEmail = emails.reduce(function(a,b){
    if(a.length > b.length) {
        return a
    } else {
        return b
    }
}, '')
console.log(longestEmail)

//TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

var userNames = []
users.forEach(function(user){
    userNames.push(user.name)
})
var listUserNames = users.reduce(function(total, user){
    return "Your instructors are: " + userNames.join(', ')
}, '')
console.log(listUserNames + '.')


//TODO BONUS: Use .reduce to get the unique list of languages from the list of users.

var languages = []
users.forEach(function(user){
    languages.push(user.languages.join(' '))
})
var languages = languages.join(' ')

function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}
// use the "count words" function to grab and display the appearances of all the languages mentioned per user
console.log(countWords(languages))