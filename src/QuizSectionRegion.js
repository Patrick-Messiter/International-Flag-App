import React from 'react'

function RegionQuestion(props) {

    const [userSelection, setUserSelection] = React.useState()
    const [correctSelection, setCorrectSelection] = React.useState()

    console.log(`chosen: ${userSelection} answer: ${correctSelection}`)

    function findCorrectAnswer () {
        if (props.countryOne.region === props.countryTwo.region) {
            setCorrectSelection("Yes")
        }
        else {
            setCorrectSelection("No")
        }
    }


    // Function to save results for final comparison (Ran in compareAnswers function to allow it to only occur on change of userSelection state)

    function setSavedResults () {
        props.setSavedResults(prev => [...prev, {user: userSelection, correct: correctSelection,
            country1: props.countryOne.name.common, country2: props.countryTwo.name.common, question: "Region", score: props.score}])
    } 

    function compareAnswers () {
        if (userSelection) {
            if (userSelection === correctSelection) {
                props.setScore(prevScore => prevScore + 1)
                props.setQuestionsAsked(prevScore => prevScore + 1)
                setSavedResults()
            }
            else {
                props.setQuestionsAsked(prevScore => prevScore + 1)
                setSavedResults()
            }
        }
    }


    //Compare answer ran and then both states are cleaned prior to next question

    React.useEffect(()=> {
        compareAnswers()
        
        return(()=> {
            setUserSelection()
            setCorrectSelection()
        })
    }, [userSelection])

    //Both the correct and user state are updated on the button click event handler

    return (
        <div>
            <h2>Are these countries from the same region/continent?</h2>
            <h3>{props.countryOne.name.common} and {props.countryTwo.name.common}</h3>
            <button onClick={() => {setUserSelection("Yes"); findCorrectAnswer()}}>Yes</button>
            <button onClick={() => {setUserSelection("No"); findCorrectAnswer()}}>No</button>
        </div>
    )
}

export {RegionQuestion}