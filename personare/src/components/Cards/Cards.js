import React, { Component, useContext, useState } from "react";
import { CardContainer, MainContainer, OuterContainer, ModalContainer, ModalContent, CloseButton, CardImage, ModalOverlay, CardDescription } from "./styled";
import { CardContext } from "../../contexts/CardContext";

const Card = () => {
  const { tarotCards, imagesUrl, imageBackCard, isFlippedFront, pickedCard, setPickedCard, setIsModalOpen, isModalOpen, setIsFlippedFront,gameStarted, setGameStarted } =
    useContext(CardContext);


    const pickCard = (card) => {
      if (gameStarted){
        setPickedCard(card)
        setIsModalOpen(true)
        setIsFlippedFront(true)
        setGameStarted(false)
        }
    };
  
    const closeModal = () => {
      setIsModalOpen(false)
    };

  return (
    <OuterContainer>
      <MainContainer>
        {tarotCards.map((item) => {
          return (
            <CardContainer onClick={() => pickCard(item)}
              key={item.name}
              backgroundImage={isFlippedFront ? imagesUrl + item.image : imageBackCard}
            ></CardContainer>
          );
        })}
      </MainContainer>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <ModalContent>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <h2>{pickedCard.name}</h2>
            <CardImage src={imagesUrl+pickedCard.image} alt="Picked Card Image" />
            <CardDescription>{pickedCard.description}</CardDescription>
          </ModalContent>
        </ModalContainer>
        </ModalOverlay>
      )}
    </OuterContainer>
  );
};

export default Card;
