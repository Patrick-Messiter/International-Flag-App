import React from 'react'
import {randomCountry} from '../../globalFunctions'

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
                if (currentCountry.capital) {
                    return (
                        <button onClick = {() => setUserSelection(currentCountry.capital)} className={props.toggleDarkMode ? "DarkMinor" : "LightMinor"}>
                            {currentCountry.capital}
                        </button>
                    )
                } 
            })
            return mappedButtons
        }
    }

    function setSavedResults () {
        props.setSavedResults(prev => [...prev, {user: userSelection[0],
            correct: `${props.countryOne.capital} (${props.countryOne.name.common}) or ${props.countryTwo.capital} (${props.countryTwo.name.common})`, 
            country1: props.countryOne.capital, country2: props.countryTwo.capital, question: "Capital City"}])
    } 

    // Logic for updating score/attempted questions and clarifying correct answer

    function updateStates () {
        if (userSelection) {
            if (userSelection === props.countryOne.capital || userSelection === props.countryTwo.capital) {
                props.setScore(prevScore => prevScore + 1)
                setSavedResults()
                props.setQuestionsAsked(prevScore => prevScore + 1)
            } else {
                setSavedResults()
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
        <>
            <h3>Which of the below is the capital city of either {props.countryOne.name.common} or {props.countryTwo.name.common}?</h3>
            <div className='Quiz-buttons-container'>
                {mapButtons()}
            </div>
            {checkAnswers()}
        </>
    )
}

export {CapitalCityQuestion}