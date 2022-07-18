import React from 'react'
import {Card} from '../Card'
import {randomCountry} from '../../globalFunctions'

import {CapitalCityQuestion} from './QuizSectionCapitalCity'
import {PopulationQuestion} from './QuizSectionPopulation'
import {RegionQuestion} from './QuizSectionRegion'

function QuizSection (props) {

    const [countryOne, setCountryOne] = React.useState(props.item[Math.floor(Math.random() * 250)])
    const [countryTwo, setCountryTwo] = React.useState(props.item[Math.floor(Math.random() * 250)])
    const [score, setScore] = React.useState(0)
    const [questionsAsked, setQuestionsAsked] = React.useState(0)
    const [savedResults, setSavedResults] = React.useState([])

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
                toggleDarkMode = {props.toggleDarkMode}
            />
        )
    })

    // Randomise between the three Quiz Component Questions (Amended number so that capital city question not selected for countries without a capital city)

    function randomiseQuestion () {
        let num = Math.floor(Math.random() * 3)
        if (!countryOne.capital || !countryTwo.capital) {
            num = 1
        }
        if (num === 0) {
            return (
                <CapitalCityQuestion
                    countryOne = {countryOne}
                    countryTwo = {countryTwo}
                    item = {props.item}
                    score = {score}
                    setScore = {setScore}
                    setQuestionsAsked = {setQuestionsAsked}
                    setSavedResults = {setSavedResults}
                    toggleDarkMode = {props.toggleDarkMode}
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
                    setSavedResults = {setSavedResults}
                    toggleDarkMode = {props.toggleDarkMode}
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
                    setSavedResults = {setSavedResults}
                    toggleDarkMode = {props.toggleDarkMode}
                />
            )
        }
    }

    //Saved results mapping for Quiz finish section

    const results = savedResults.map((currentResult) => {
        const correct = {
            color: "green",
        }
        const incorrect = {
            color: "red",
        }
        if (currentResult.question === "Region") {
            if (currentResult.user === currentResult.correct) {
                if (currentResult.user === "Yes") {
                    return <h4 style={correct}>You selected {currentResult.user}, both {currentResult.country1} and {currentResult.country2} are in the same region, which was correct! </h4>
                } else {
                    return <h4 style={correct}>You selected {currentResult.user}, {currentResult.country1} is not in the same region as {currentResult.country2}, which was correct!</h4>
                }
            } else {
                if (currentResult.user === "Yes") {
                    return <h4 style={incorrect}>You selected {currentResult.user}, both {currentResult.country1} and {currentResult.country2} are in the same region, which was incorrect. </h4>
                } else {
                    return <h4 style={incorrect}>You selected {currentResult.user}, {currentResult.country1} is not in the same region as {currentResult.country2}, which was incorrect.</h4>
                }
            }
        }
        if (currentResult.question === "Population") {
            if (currentResult.user === currentResult.correct) {
                if (currentResult.user === currentResult.country1) {
                    return <h4 style={correct}>You correctly answered that {currentResult.country1} has a higher population than {currentResult.country2}!</h4>
                } else {
                    return <h4 style={correct}>You correctly answered that {currentResult.country2} has a higher population than {currentResult.country1}!</h4>
                }
            } else {
                if (currentResult.user === currentResult.country1) {
                    return <h4 style={incorrect}>You incorrectly answered {currentResult.country1} as having a higher population than {currentResult.country2}.</h4>
                } else {
                    return <h4 style={incorrect}>You incorrectly answered {currentResult.country2} as having a higher population than {currentResult.country1}.</h4>
                }
            }
        }
        else {
            if (currentResult.user === currentResult.country1[0] || currentResult.user === currentResult.country2[0]) {
                return <h4 style={correct}>The correct answers were either {currentResult.correct}. You correctly answered {currentResult.user}!</h4>
            } else {
                return <h4 style={incorrect}>You answered {currentResult.user} which was neither the capital of {currentResult.correct}.</h4>
            }
        }
    })

    //Quiz Section Main Components 
    function QuizMain () {
        return (
            <div className= {props.toggleDarkMode ? "DarkMain Quiz-section-outer" : "LightMain Quiz-section-outer"}>
                <div className='Quiz-section-inner-container'>
                    <div className='Quiz-section-inner-top'>
                        <h2>This is the Quiz Section</h2>
                        <p>You will be asked 10 questions, relating to the following countries population size, region/continent and their capital city.</p>
                        <h3>Score: {score}/{questionsAsked}</h3>
                    </div>
                    <div className='Quiz-section-inner-middle'>
                        {renderCountries}
                    </div>
                    <div className='Quiz-section-inner-bottom'>
                        {randomiseQuestion()}
                        <button onClick={returnToMain} className='Back-button'>&#8592; Back</button>
                    </div>
                </div>
            </div>
        )
    }

    function QuizFinish () {
        return (
            <div className= {props.toggleDarkMode ? "DarkMain Quiz-section-outer" : "LightMain Quiz-section-outer"}>
                <div className='Quiz-section-answer-container'>
                    <h2>Thanks for playing the Quiz</h2>
                    <h3>Your score was {score}/{questionsAsked}</h3>
                    {results}
                    <button onClick={returnToMain} className='Back-button'>&#8592; Back</button> 
                </div>
            </div>
        )
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
            {questionsAsked < 10 ? <QuizMain/> : <QuizFinish/>}
        </section>
    )
}

export {QuizSection}