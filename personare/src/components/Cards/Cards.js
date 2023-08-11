import React, { Component } from "react";
import { CardContainer, MainContainer, OuterContainer } from "./styled";
import axios from "axios";

export default class Cards extends Component {
  state = {
    tarotCards: [],
    imagesUrl: "",
    imageBackCard: "",
  };

  componentDidMount() {
    this.getCards();
  }

  getCards = () => {
    axios
      .get("./tarot.json")
      .then((response) => {
        this.setState({ tarotCards: response.data.cards });
        this.setState({ imagesUrl: response.data.imagesUrl });
        this.setState({ imageBackCard: response.data.imageBackCard });
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  render() {
    const cardsList = this.state.tarotCards.map((item) => {
      console.log(this.state.imagesUrl + item.image);
      return (
        <CardContainer
          key={item.name}
          backgroundImage={this.state.imagesUrl + item.image}
        ></CardContainer>
      );
    });

    return (
      <OuterContainer>
        <MainContainer>{cardsList}</MainContainer>
      </OuterContainer>
    );
  }
}
