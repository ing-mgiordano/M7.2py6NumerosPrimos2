function getResult(userNum){
    let result = document.getElementById('result')
    result.innerHTML = `¡Exacto, el número ${userNum} es primo!`
    return result
}

function sayIfIsPrime(isPrime, userNum) {
    if(isPrime) {
        getResult(userNum)
    }
    if(!isPrime){
        calculatePrime()
    }
}

function doFactorial(userNum) {
    const arrayNumber = []
    let end = userNum
    let factorial = 1
    
    //Agrego del 1 al numero del usuario a un array
    for(let cont = 0; cont < end; cont++) { 
        arrayNumber.push(cont+1)
    }
    arrayNumber.pop() //(n-1) Elimino el ultimo elemento del array

    //Hago el factorial de (n-1)
    for(let cont = 0; cont < end-1; cont++) {
        factorial = factorial * parseInt(arrayNumber[cont])   
    }
    console.log(factorial)
    return factorial
}

function isValidNumber(userNum) {
    if(isNaN(userNum) || userNum <= 0) {
        alert('Numero incorrecto')
        calculatePrime()
    }
}

function calculatePrime() {
    let userNum = parseInt(prompt('Ingrese un numero'))
    
    //Verifico que se ingrese un numero y que sea mayor a 0
    isValidNumber(userNum)

    if(userNum > 1){
     
        factorial = doFactorial(userNum)
        
        let wilsonEcuatio = factorial + 1  // (n-1)! + 1
        //Verifico que que el resultado de la ecuacion y
        //el numero del usuario sean multiplos

        let isPrime = wilsonEcuatio % userNum == 0
        //Si se cumple esto, el numero del usuario es primo
        console.log(isPrime)

        sayIfIsPrime(isPrime, userNum)
    }
    
    if(userNum === 1) {
        sayIfIsPrime(false, userNum)
    }
}