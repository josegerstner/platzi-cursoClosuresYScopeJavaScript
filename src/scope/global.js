var hello = 'Hello'
let world = 'Hello World'
const helloWorld = 'Hello World!'

const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction()

const createGlobalVar = () => {
    // estoy creando una variable global dentro de una función
    globalVar = 'I am global var'
}

createGlobalVar()
console.log(globalVar)