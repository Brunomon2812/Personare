import React, { Component } from 'react'
import { StyledHeader, Title } from "./styled";


export default class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <Title>Tarot</Title>
            </StyledHeader>
        )
    }
}