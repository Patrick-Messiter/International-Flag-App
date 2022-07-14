import React from 'react'
import {Card} from './Card'
import {randomCountry} from './globalFunctions'

import {CapitalCityQuestion} from './QuizSectionCapitalCity'
import {PopulationQuestion} from './QuizSectionPopulation'
import {RegionQuestion} from './QuizSectionRegion'

function QuizSection (props) {

    const [countryOne, setCountryOne] = React.useState((props.item[Math.floor(Math.random() * 250)]))
    const [countryTwo, setCountryTwo] = React.useState((props.item[Math.floor(Math.random() * 250)]))
    const [score, setScore] = React.useState(0)
    const [questionsAsked, setQuestionsAsked] = React.useState(0)

    console.log(countryOne)
    console.log(countryTwo)

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

    // Randomise between the three Quiz Component Questions

    function randomiseQuestion () {
        let num = Math.floor(Math.random() * 3)
        if (num === 0) {
            return (
                <CapitalCityQuestion
                    countryOne = {countryOne}
                    countryTwo = {countryTwo}
                    item = {props.item}
                    score = {score}
                    setScore = {setScore}
                    setQuestionsAsked = {setQuestionsAsked}
                />
            )
        }
        if (num === 1) {
            return (
                <PopulationQuestion
                    countryOne = {countryOne}
                    countryTwo = {countryTwo}
                    item = {props.item}
                    score = {score}
                    setScore = {setScore}
                    setQuestionsAsked = {setQuestionsAsked}
                />
            )
        }
        if (num === 2) {
            return (
                <RegionQuestion
                    countryOne = {countryOne}
                    countryTwo = {countryTwo}
                    setCountryOne = {setCountryOne}
                    setCountryTwo = {setCountryTwo}
                    item = {props.item}
                    score = {score}
                    setScore = {setScore}
                    setQuestionsAsked = {setQuestionsAsked}
                />
            )
        }
    }
    
    //Update states and question after each question is answered

    React.useEffect(() => {
        if (questionsAsked) {
            setCountryOne(randomCountry(props.item))
            setCountryTwo(randomCountry(props.item))
            randomiseQuestion()
        }
    }, [questionsAsked])

    return (
        <section>
            <div className='QuizSection-inner'>
                <h1>This is the Quiz Section</h1>
                <button onClick={returnToMain}>Back</button>
                <p>Score: {score}/{questionsAsked}</p>
                {renderCountries}
                {randomiseQuestion()}
            </div>
        </section>
    )
}

export {QuizSection}