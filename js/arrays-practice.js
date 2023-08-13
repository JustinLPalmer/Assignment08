//STEP 1

// let movies = ['Dogma', 'BraveHeart', 'Equilibrium', 'Vanilla Sky', 'Cruel Intentions']
// console.log(movies[1])

//STEP 2

// let movies = new Array(5)
// movies[0] = 'Dogma'
// movies[1] = 'BraveHeart'
// movies[2] = 'Equilibrium'
// movies[3] = 'Vanilla Sky'
// movies[4] = 'Cruel Intentions'
// console.log(movies[0])

//STEP 3

// let movies = new Array(5)
// movies[0] = 'Dogma'
// movies[1] = 'BraveHeart'
// movies[2] = 'Equilibrium'
// movies[3] = 'Vanilla Sky'
// movies[4] = 'Cruel Intentions'
// movies.splice(2,0,'Mitchells vs. the Machines')
// console.log(movies.length)

//STEP 4

// let movies = ['Dogma', 'BraveHeart', 'Equilibrium', 'Vanilla Sky', 'Cruel Intentions']
// delete movies[0]
// console.log(movies)

//STEP 5

// let movies = ['Dogma', 'BraveHeart', 'Equilibrium', 'Vanilla Sky', 'Cruel Intentions', 'Mitchells vs. the Machines', 'The Last Boyscout']
// let displayString = ' '
// for (const movie in movies) {
//    displayString += movies[movie] + ', '
// }
// console.log(displayString)

//STEP 6

// let movies = ['Dogma', 'BraveHeart', 'Equilibrium', 'Vanilla Sky', 'Cruel Intentions', 'Mitchells vs. the Machines', 'The Last Boyscout']
// let displayString = ' '
// for (const movie of movies) {
//    displayString += movie + ', '
// }
// console.log(displayString)

//STEP 7

// let movies = ['Dogma', 'BraveHeart', 'Equilibrium', 'Vanilla Sky', 'Cruel Intentions', 'Mitchells vs. the Machines', 'The Last Boyscout']
// movies.sort()
// let displayString = ' '
// for (const movie of movies) {
//     displayString += movie + ', '
// }
// console.log(displayString)

//STEP 8

// let goodMovies = ['Dogma', 'BraveHeart', 'Equilibrium']
// let badMovies = ['Plague Dogs', 'Zaks Module 9 Zoom Cast', 'BattleShip']
// let displayGood = `Movies I like:\n\n`
// let displayBad =  `Movies I hate:\n\n`
// for (const movie in goodMovies) {
//    displayGood += goodMovies[movie] + '\n'
// }
// for (const yuck in badMovies) {
//     displayBad += badMovies[yuck] + '\n'
//  }
// console.log(displayGood + '\n\n')
// console.log(displayBad)

//STEP 9

// let goodMovies = ['Dogma', 'BraveHeart', 'Equilibrium']
// let badMovies = ['Plague Dogs', 'Zaks Module 9 Zoom Cast', 'BattleShip']
// let movies = goodMovies.concat(badMovies)
// console.log(movies.sort().reverse())

//STEP 10

// let goodMovies = ['Dogma', 'BraveHeart', 'Equilibrium']
// let badMovies = ['Plague Dogs', 'Zaks Module 9 Zoom Cast', 'BattleShip']
// let movies = goodMovies.concat(badMovies)
// console.log(movies.sort().reverse().slice(-1))

//STEP 11

// let goodMovies = ['Dogma', 'BraveHeart', 'Equilibrium']
// let badMovies = ['Plague Dogs', 'Zaks Module 9 Zoom Cast', 'BattleShip']
// let movies = goodMovies.concat(badMovies)
// console.log(movies.sort().reverse().slice(0,1))

//STEP 12

// let goodMovies = ['Dogma', 'BraveHeart', 'Equilibrium']
// let badMovies = ['Plague Dogs', 'Zaks Module 9 Zoom Cast', 'BattleShip']
// let movies = goodMovies.concat(badMovies)
// for (let i = 0; i < movies.length; i++) {
//     console.log('Index ' + (i) + ' = ' + movies[i])
// }
// movies[3] = 'Devils Advocate'
// movies[4] = 'White Men Cant Jump'
// movies[5] = 'Any Given Sunday'
// console.log(movies)
    

//STEP 13

// let movies = [['Dogma', 2], ['BraveHeart', 1], ['Equilibrium', 3], ['Vanilla Sky', 4], ['Cruel Intentions', 5]]
// let titles = movies.flat();
// titles = titles.filter(movie => typeof movie === 'string')

// console.log(titles)

//STEP 14

// let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally']
// let showEmployee = function(items){
//     for ( let employee of items){
//         console.log(employee);
//     }
// }
// console.log("Employees: ")
// console.log(" ")
// showEmployee(employees);

//STEP 15

// var data
// function filterValues(arr) {
//     return arr.filter(Boolean)
// }
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

//STEP 16

// let animalList = ['dog', 'duck', 'goat', 'horse', 'bull']
// let randomAnimal = animalList[Math.floor(Math.random() * animalList.length)]
// console.log(randomAnimal)

//STEP 17

// const numberList = [1, 24, 7, 15, 4, 21]
// const largestNumber = numberList.sort((a,b) => b-a)
// console.log(largestNumber[0])
