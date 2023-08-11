import React, { Component } from "react";
// import styled from "styled-components";
import axios from "axios";

export default class Cards extends Component {
  state = {
    tarotCards: [],
  };

  componentDidMount() {
    this.getCards()
  }

  getCards = () => {
    axios
      .get('./tarot.json')
      .then((response) => {
        console.log(response);
        this.setState({ tarotCards: response.data.cards });
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  render() {
    const cardsList = this.state.tarotCards.map((item) => {
      return <h1>{item.name}</h1>;
    });

    return <div>{cardsList}</div>;
  }
}

