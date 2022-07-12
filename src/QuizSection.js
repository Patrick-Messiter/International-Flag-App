import React from 'react'
import {Card} from './Card'
import {randomCountry} from './globalFunctions'

import {CapitalCityQuestion} from './QuizSectionCapitalCity'

function QuizSection (props) {

    const [countryOne, setCountryOne] = React.useState(randomCountry(props.item))
    const [countryTwo, setCountryTwo] = React.useState(randomCountry(props.item))
    const [score, setScore] = React.useState(0)
    const [questionsAsked, setQuestionsAsked] = React.useState(0)


    console.log(score)
    console.log(questionsAsked)
    // function to return to Main Component

    function returnToMain () {
        return props.setToggleQuizSection(false)
    }

    // Rendering country cards to Quiz Section Component

    let cardsArray = [countryOne, countryTwo]
    const renderCountries = cardsArray.map(currentCountry => {
        return (
            <Card
                key = {currentCountry.name.common}
                item = {currentCountry}
                toggleQuizSection = {props.toggleQuizSection}
            />
        )
    })

    return (
        <section>
            <div className='QuizSection-inner'>
                <h1>This is the Quiz Section</h1>
                <button onClick={returnToMain}>Back</button>
                <p>Score: {score}/{questionsAsked}</p>
                {renderCountries}
                <CapitalCityQuestion
                    countryOne = {countryOne}
                    countryTwo = {countryTwo}
                    item = {props.item}
                    score = {score}
                    setScore = {setScore}
                    setQuestionsAsked = {setQuestionsAsked}
                />
            </div>
        </section>
    )
}

export {QuizSection}