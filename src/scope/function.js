const fruits = () => {
    var fruit = 'apple'
    console.log(fruit);
}

fruits()

const anotherFunction = () => {
    var x = 1
    var x = 2
    let y = 1
    // let y = 2 // comento porque sino da error
    /* Da error porque no puedo asignar una variable con el mismo nombre
    usando let, sin embargo sí puedo usando var */

    console.log({x, y})
}

anotherFunction()