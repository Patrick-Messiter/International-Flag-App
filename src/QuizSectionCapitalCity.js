import React from 'react'
import {randomCountry} from './globalFunctions'

function CapitalCityQuestion (props) {
    
    const [wrongCountryOne, setWrongCountryOne] = React.useState(randomCountry(props.item))
    const [wrongCountryTwo, setWrongCountryTwo] = React.useState(randomCountry(props.item))
    const [userSelection, setUserSelection] = React.useState()
    const [chosenArray,setChosenArray] = React.useState()

    // A mapping feature to map two incorrect button answers with the two correct answers

    let allCountriesArrayOne = [props.countryOne, props.countryTwo, wrongCountryOne, wrongCountryTwo]
    let allCountriesArrayTwo = [wrongCountryOne, props.countryOne, wrongCountryTwo, props.countryTwo]
    let allCountriesArrayThree = [wrongCountryTwo, wrongCountryOne, props.countryTwo, props.countryOne]
    let randomCountriesArray = [allCountriesArrayOne, allCountriesArrayTwo, allCountriesArrayThree]

    console.log(chosenArray)
    console.log(userSelection)

    function randomisedArray() {
        setChosenArray(randomCountry(randomCountriesArray))
    }

    //A useEffect statement to prevent infinite calling of a randomised array

    React.useEffect(() => {
        randomisedArray()   
    }, [])

    function mapButtons () {
        if (chosenArray) {
            let mappedButtons = chosenArray.map(currentCountry => {
                return <button onClick = {() => setUserSelection(currentCountry.capital)}>{currentCountry.capital}</button>
            })
            return mappedButtons
        }
    }

    // Logic for updating score/attempted questions and clarifying correct answer

    function updateStates () {
        if (userSelection) {
            if (userSelection === props.countryOne.capital || userSelection === props.countryTwo.capital) {
                props.setScore(prevScore => prevScore + 1)
                props.setQuestionsAsked(prevScore => prevScore + 1)
            } else {
                props.setQuestionsAsked(prevScore => prevScore + 1)
            }
        }
    }
    React.useEffect(() => {
        updateStates()
    }, [userSelection])
    
    function checkAnswers () {
        if (userSelection){
            if (userSelection === props.countryOne.capital || userSelection === props.countryTwo.capital) {
                return <h3>Congratulations you got it right!</h3>
            }
            else {
                return (
                <h3>
                    Sorry you got it wrong! The correct answers were: {props.countryOne.capital} ({props.countryOne.name.common}) or {props.countryTwo.capital} ({props.countryTwo.name.common})
                </h3>
                )
            }
        }
    }
    
    return (
        <div>
            <h2>Which of the below is the capital city of either {props.countryOne.name.common} or {props.countryTwo.name.common}?</h2>
            {mapButtons()}
            {checkAnswers()}
        </div>
    )
}

export {CapitalCityQuestion}