import React, { Component } from 'react'
import Cards from '../Cards/Cards';
import Instructions from '../Instructions/Instructions';
import { StyledMain } from "./styled";


export default class Main extends Component {
    render() {
        return (
            <StyledMain>
                <Instructions>
                </Instructions>
                <Cards></Cards>
            </StyledMain>
        )
    }
}