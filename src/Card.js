import React from 'react'
import {formatPopulation} from './globalFunctions'

function Card (props) {
    
    function conditionalList () {
        if (props.toggleQuizSection) {
            return (
                <ul>
                    <li><span>Population: ???</span></li>
                    <li><span>Region: ???</span></li>
                    <li><span>Capital: ???</span></li>
                </ul>
            )
        } else {
            return (
                <ul>
                    <li><span>Population:</span> {formatPopulation(props.item.population)}</li>
                    <li><span>Region:</span> {props.item.region}</li>
                    <li><span>Capital:</span> {props.item.capital}</li>
                </ul>
            )
        }
    }

    return (
        <div onClick={props.selectCard} className={props.toggleDarkMode ? "DarkMinor Card-container" : "LightMinor Card-container"}>
            <img src={props.item.flags.png} alt={`${props.item.name.common} flag`}/>
            <div className='Card-container-inner'>
                <h3>{props.item.name.common}</h3>
                {conditionalList()}
            </div>
        </div>
    )
}

export {Card}