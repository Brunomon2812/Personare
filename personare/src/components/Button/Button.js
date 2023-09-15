import React, { Component, useContext } from 'react'
import styled from 'styled-components'
import { CardContext } from "../../contexts/CardContext";


const Button  = () => {

    const { tarotCards, imagesUrl, imageBackCard, isFlippedFront, setIsFlippedFront, sortTarotCards } =
    useContext(CardContext);

    const startGame = () => {
        sortTarotCards()
        setIsFlippedFront(false)
    }

    return (
            <div>
                <button onClick={startGame}>Iniciar</button>
            </div>
        )
}

export default Button