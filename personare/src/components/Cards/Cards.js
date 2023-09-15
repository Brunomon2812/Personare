import React, { Component, useContext } from "react";
import { CardContainer, MainContainer, OuterContainer } from "./styled";
import { CardContext } from "../../contexts/CardContext";

const Card = () => {
  const { tarotCards, imagesUrl, imageBackCard, flip } =
    useContext(CardContext);

  return (
    <OuterContainer>
      <MainContainer>
        {tarotCards.map((item) => {
          return (
            <CardContainer
              key={item.name}
              backgroundImage={imagesUrl + item.image}
            ></CardContainer>
          );
        })}
      </MainContainer>
    </OuterContainer>
  );
};

export default Card;
