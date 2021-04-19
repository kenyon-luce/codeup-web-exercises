'use script';

// var username = 'kenyon-luce'
// var githubResponse = fetch(`https://api.github.com/users/${username}`, {headers: {'Authorization': 'githubToken'}})
// console.log(githubResponse)
//
// githubResponse.then((response) => {
//     response
//         .json()
//         .then((jsonResponseData) => console.log(`Your last commit was on ${Date(jsonResponseData.updated_at)}`
//         ))
//     //^this method returns a promise
// })

//below is the above code refactored into a function
function lastPush(username){
    var githubResponse = fetch(`https://api.github.com/users/${username}`, {headers: {'Authorization': 'githubToken'}})
    console.log(githubResponse)

    githubResponse.then((response) => {
        response
            .json()
            .then((jsonResponseData) => console.log(`Your last push was on ${Date(jsonResponseData.updated_at)}`
            ))
        //^this method returns a promise
    })
}
lastPush('kenyon-luce')

// githubAPI.wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
