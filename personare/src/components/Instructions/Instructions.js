import React, { Component } from "react";
import Button from "../Button/Button";
import { StyledInstructionsContainer, StyledSubtitle, NumberMarker } from "./styled";

export default class Main extends Component {
  render() {
    return (
      <StyledInstructionsContainer>
        <StyledSubtitle><NumberMarker>1</NumberMarker>Focus deeply on your day</StyledSubtitle>
        <StyledSubtitle><NumberMarker>2</NumberMarker>Click on "Sort Cards" to start</StyledSubtitle>
        <StyledSubtitle><NumberMarker>3</NumberMarker>Select a card below</StyledSubtitle>
        <Button></Button>
      </StyledInstructionsContainer>
    );
  }
}
