import React, { Component, useContext } from 'react'
import styled from 'styled-components'
import { CardContext } from "../../contexts/CardContext";


const Button  = () => {

    const { tarotCards, imagesUrl, imageBackCard, isFlippedFront, setIsFlippedFront, sortTarotCards, setGameStarted } =
    useContext(CardContext);

    const startGame = () => {
        sortTarotCards()
        setIsFlippedFront(false)
        setGameStarted(true)
    }

    return (
            <div>
                <button onClick={startGame}>Start</button>
            </div>
        )
}

export default Button