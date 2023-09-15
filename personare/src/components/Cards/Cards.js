import React, { Component, useContext } from "react";
import { CardContainer, MainContainer, OuterContainer } from "./styled";
import { CardContext } from "../../contexts/CardContext";

const Card = () => {
  const { tarotCards, imagesUrl, imageBackCard, isFlippedFront } =
    useContext(CardContext);

  return (
    <OuterContainer>
      <MainContainer>
        {tarotCards.map((item) => {
          return (
            <CardContainer
              key={item.name}
              backgroundImage={isFlippedFront ? imagesUrl + item.image : imageBackCard}
            ></CardContainer>
          );
        })}
      </MainContainer>
    </OuterContainer>
  );
};

export default Card;
