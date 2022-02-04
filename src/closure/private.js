// JS no es que permita tener datos privados
// sin embargo, de alguna manera podemos cuidar variables
const person = () => {
    var saveName = 'Name'
    return {
        getName: () => {
            return saveName
        },
        setName: (name) => {
            saveName = name
        }
    }
}

newPerson = person()
console.log(newPerson.getName())
newPerson.setName('Oscar')
console.log(newPerson.getName())
// si queremos imprimir la variable, nos sale undefined
console.log(newPerson.saveName)