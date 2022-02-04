const helloWorld = () => {
    const hello = 'Hello World'
    console.log(hello);
}

helloWorld()

var scope = 'I am global'

const functionScope = () => {
    // defino una variable localmente con el mismo nombre que una global
    var scope = 'I am just a local'
    const func = () => {
        // devuelvo la variable scope
        return scope
    }
    // resulta que siempre trabajo con la variable local
    console.log(func())
}

functionScope()
console.log(scope)