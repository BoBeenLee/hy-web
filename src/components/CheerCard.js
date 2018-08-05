import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 240px;
    height: 240px;
    background-color: #fff;
`;

const Title = styled.div``;

const Date = styled.div``;

class CheerCard extends Component {
    render() {
        return (
            <Container>
                <Title>잘봣습니다!</Title>
                <Date>2018.10/15</Date>
            </Container>
        );
    }
}

export default CheerCard;
