
// Number with commas added

function formatPopulation(num) {
    let stringNumber = num.toString()
    stringNumber = stringNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return stringNumber
}

function randomCountry(array) {
    return array[Math.floor(Math.random() * array.length)]
}

export {formatPopulation}
export {randomCountry}