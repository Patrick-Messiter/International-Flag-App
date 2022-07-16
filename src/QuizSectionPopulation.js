import React from 'react'

function PopulationQuestion (props) {

    const [userSelection, setUserSelection] = React.useState()
    const [correctSelection, setCorrectSelection] = React.useState()
    
    function findHigherPopulation() {
        if (props.countryOne.population >= props.countryTwo.population) {
            setCorrectSelection(props.countryOne.name.common)
        } 
        if (props.countryTwo.population >= props.countryOne.population) {
            setCorrectSelection(props.countryTwo.name.common)
        }
    }

    function setSavedResults () {
        props.setSavedResults(prev => [...prev, {user: userSelection, correct: correctSelection,
            country1: props.countryOne.name.common, country2: props.countryTwo.name.common, question: "Population"}])
    } 

    function compareAndUpdateState() {
        if (userSelection) {
            if (userSelection === correctSelection) {
                props.setScore(prevScore => prevScore + 1)
                setSavedResults()
                props.setQuestionsAsked(prevScore => prevScore + 1)
            } 
            else {
                setSavedResults()
                props.setQuestionsAsked(prevScore => prevScore + 1)
            }
        }
    }

    // UseEffect function to run the comparison function on each answer and clean the state after

    React.useEffect(()=> {
        compareAndUpdateState()

        return () => {
            setUserSelection()
            setCorrectSelection()
        }
    }, [userSelection])

    // Both state handling functions are both handled on the onclick event handler
    return (
        <div>
            <h2>Which Country has the higher population?</h2>
            <button onClick = {() => {setUserSelection(props.countryOne.name.common); findHigherPopulation()}}>{props.countryOne.name.common}</button>
            <button onClick = {() => {setUserSelection(props.countryTwo.name.common); findHigherPopulation()}}>{props.countryTwo.name.common}</button>
        </div>
    )
}

export {PopulationQuestion}