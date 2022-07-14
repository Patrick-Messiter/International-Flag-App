import React from 'react'

function RegionQuestion(props) {

    const [userSelection, setUserSelection] = React.useState()
    const [correctSelection, setCorrectSelection] = React.useState()

    console.log(`chosen: ${userSelection} answer: ${correctSelection}`)

    function findCorrectAnswer () {
        if (props.countryOne.region === props.countryTwo.region) {
            setCorrectSelection(props.countryOne.region)
        }
        else {
            setCorrectSelection(props.countryTwo.name.common)
        }
    }

    function compareAnswers () {
        if (userSelection) {
            if (userSelection === correctSelection) {
                props.setScore(prevScore => prevScore + 1)
                console.log("option 1")
                props.setQuestionsAsked(prevScore => prevScore + 1)
            }
            else if (userSelection === props.countryTwo.name.common && correctSelection === "not the same") {
                props.setScore(prevScore => prevScore + 1)
                console.log("option 2")
                props.setQuestionsAsked(prevScore => prevScore + 1)
            }
            else {
                props.setQuestionsAsked(prevScore => prevScore + 1)
                console.log("option 3")
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
            <h3>{props.countryOne.name.common} {props.countryOne.region} and {props.countryTwo.name.common} {props.countryTwo.region}</h3>
            <button onClick={() => {setUserSelection(props.countryOne.region); findCorrectAnswer()}}>Yes</button>
            <button onClick={() => {setUserSelection(props.countryTwo.name.common); findCorrectAnswer()}}>No</button>
        </div>
    )
}

export {RegionQuestion}