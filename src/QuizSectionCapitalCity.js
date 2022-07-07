import React from 'react'
import {randomCountry} from './globalFunctions'

function CapitalCityQuestion (props) {
    
    const [wrongCountryOne, setWrongCountryOne] = React.useState(randomCountry(props.item))
    const [wrongCountryTwo, setWrongCountryTwo] = React.useState(randomCountry(props.item))
    const [userSelection, setUserSelection] = React.useState()

    // A mapping feature to map two incorrect button answers with the two correct answers

    let allCountriesArray = [props.countryOne, props.countryTwo, wrongCountryOne, wrongCountryTwo]

    function randomisedArray() {
        let randomCountriesArray = []
        if (randomCountriesArray.length <=4) {
            randomCountriesArray.push(randomCountry(allCountriesArray))
            /*
            if (!randomCountriesArray.includes(props.countryOne)) {
                randomCountriesArray.push(props.countryOne)
            }*/
        }
        return randomCountriesArray
    }

    //IMPORTANT THINGS TO WORK ON NEXT TIME, RANDOMISING COUNTRIES ARRAY AND ALTERING QUESTION TO NOT INCLUDE CAPITAL CITY OR ALTER CARD

    console.log(randomisedArray())

    let randomCountriesArray = Math.floor(Math.random() * allCountriesArray.length -1)

    // A mapping feature to map two incorrect button answers with the two correct answers

    const mapButtons = allCountriesArray.map(currentCountry => {
        return (
            <button onClick = {() => setUserSelection(currentCountry.capital)}>{currentCountry.capital}</button>
        )
    })

    function checkAnswers () {
        if (userSelection === props.countryOne.capital || userSelection === props.countryTwo.capital) {
            return <h3>Congratulations you got it right!</h3>
        } else {
            return (
            <h3>
                Sorry you got it wrong! The correct answers were: {props.countryOne.capital} ({props.countryOne.name.common}) or {props.countryTwo.capital} ({props.countryTwo.name.common})
            </h3>
            )
        }
    }

    function answersComponent () {
        if (userSelection) {
            return checkAnswers()
        }
    }
    
    return (
        <div>
            <h2>Which of the below is the capital city of either {props.countryOne.name.common} or {props.countryTwo.name.common}</h2>
            {mapButtons}
            {answersComponent()}
        </div>
    )
}

export {CapitalCityQuestion}