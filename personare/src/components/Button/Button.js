import React, { Component, useContext } from 'react'
import { CardContext } from "../../contexts/CardContext";
import { ButtonContainer, StyledButton } from './styled';


const Button  = () => {

    const { tarotCards, imagesUrl, imageBackCard, isFlippedFront, setIsFlippedFront, sortTarotCards, setGameStarted } =
    useContext(CardContext);

    const startGame = () => {
        sortTarotCards()
        setIsFlippedFront(false)
        setGameStarted(true)
    }

    return (
            <ButtonContainer>
                <StyledButton onClick={startGame}>Sort Cards</StyledButton>
            </ButtonContainer>
        )
}

export default Button