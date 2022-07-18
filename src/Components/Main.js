import React from 'react'
import {Card} from './Card'
import {Form} from './Form'

function Main (props) {

    // Setting state for form to conditionally map cards within Main component

    const [formData, setFormData] = React.useState({
        countryName: "",
        regionName: ""
    })

    // Function to alter state to change component/section to the quiz section

    function renderQuizSection () {
        return props.setToggleQuizSection(true)
    }
 
    // Update chooseCountry state and toggle state on click event handler of each card for the Section component
    
    function selectCard (id) {
        props.countryData.map(currentObject => {
            if (currentObject.name.common === id) {
                props.setChooseCountry(currentObject)
                props.setToggleSection(true)
            }
        })
    } 

    // Render API to Card once API has been fetched dependent upon search conditions

    // Render Countries to the Card component with conditional rendering included for form requirements

    const renderSearchedCountry = props.countryData.map(currentCountry => {
        let lowerCase = currentCountry.name.common.toLowerCase()
        if (formData.countryName && formData.regionName) {
            if (lowerCase.includes(formData.countryName.toLowerCase()) && currentCountry.region === formData.regionName) {
                return (
                    <Card
                        key = {currentCountry.name.common}
                        item = {currentCountry}
                        selectCard = {() => selectCard(currentCountry.name.common)}
                        toggleDarkMode = {props.toggleDarkMode}
                    />
                )
            }
        }

        else if (formData.regionName) {
            if (formData.regionName === currentCountry.region) {
                return (
                    <Card
                        key = {currentCountry.name.common}
                        item = {currentCountry}
                        selectCard = {() => selectCard(currentCountry.name.common)}
                        toggleDarkMode = {props.toggleDarkMode}
                    />
                )
            }
        }

        else if (formData.countryName) {
            if (lowerCase.includes(formData.countryName.toLowerCase())) {
                return (
                    <Card
                        key = {currentCountry.name.common}
                        item = {currentCountry}
                        selectCard = {() => selectCard(currentCountry.name.common)}
                        toggleDarkMode = {props.toggleDarkMode}
                    />
                )
            }
        }
        else {
            return (
                <Card
                    key = {currentCountry.name.common}
                    item = {currentCountry}
                    selectCard = {() => selectCard(currentCountry.name.common)}
                    toggleDarkMode = {props.toggleDarkMode}
                />
            )
        }
    })

    return (
        <main className= {props.toggleDarkMode ? "DarkMain Main-home-section" : "LightMain Main-home-section"}>
            <div className='Home-outer-container'>
                <div className='Home-quiz-container'>
                    <button className={props.toggleDarkMode ? "DarkMinor Quiz-button" : "LightMinor Quiz-button"} onClick= {renderQuizSection}>Quiz Section!</button>
                </div>
                <div className='Home-form-container'>
                    <Form 
                        formData = {formData}
                        setFormData = {setFormData}
                        toggleDarkMode = {props.toggleDarkMode}
                    />
                </div>
                <div className='Home-card-container'>
                    {renderSearchedCountry}
                </div>
            </div>
        </main>
    )
}

export {Main}