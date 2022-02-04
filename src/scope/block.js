const fruits = () => {
    if(true){
        // declarada con var, puedo acceder desde fuera del bloque
        var fruits1 = 'apple'
        // declaradas con let y const, no puedo acceder desde fuera del bloque
        let fruits2 = 'banana'
        const fruits3 = 'kiwi'
    }
    
    console.log(fruits1);
    // estos console.log dan error porque no puedo acceder desde fuera del bloque
    // console.log(fruits2);
    // console.log(fruits3);
}

fruits()

let x = 1
{
    let x=2
    // me muestra el valor 2 (dentro del bloque)
    console.log(x);
}
// me muestra el valor 1 (el bloque no reescribe el let global)
console.log(x);

var y = 1
{
    var y=2
    // me muestra el valor 2 (dentro del bloque)
    console.log(y);
}
// me muestra el valor 2 (el bloque reescribe el var global)
console.log(y);


const anotherFunction = () => {
    for(var i=0; i<10; i++) {
        setTimeout(() => {
            // va a imprimirme todos los i como 10
            // ya que siempre tomará el último valor de i
            // porque al estar definido como var
            // puedo acceder después a esa variable
            console.log('i: ' + i);
        }, 1000)
    }

    for(let j=0; j<10; j++) {
        setTimeout(() => {
            // va a imprimirme cada i (del 0 al 9)
            // ya que siempre tomará el valor dentro del scope
            // porque al estar definido como let
            // puedo acceder sólo dentro del scope a esa variable
            console.log('j: ' + j);
        }, 1000)
    }
}

anotherFunction()