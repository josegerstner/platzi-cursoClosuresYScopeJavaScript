/* En el primer caso tenemos un problema con los scopes, ya que
    la moneybox no está recordando las coins que le estoy metiendo
    Esto se debe a que estoy sobreescribiendo saveCoins cada vez
    que llamo a moneyBox
*/
const moneyBox = (coins) => {
    var saveCoins = 0
    saveCoins += coins
    console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(5) // 5
moneyBox(10) // 10

/* En el segundo caso resolvemos este problema, ya que siempre retornamos
    countCoins (nuestro closure).
    Como inicializo mi variable myMoneyBox una sola vez, la primera vez 
    sí inicializamos saveCoins en 0
    Sin embargo, al llamar a myMoneyBox y pasarle las coins, estoy llamando
    a su función interna de una, no paso por el var saveCoins = 0
*/

const moneyBox = () => {
    var saveCoins = 0
    const countCoins = (coins) => {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins
}

let myMoneyBox = moneyBox()
myMoneyBox(4) // 4
myMoneyBox(6) // 10
myMoneyBox(10) // 20