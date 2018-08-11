import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 1008px;
    height: 94px;
    border-radius-top-left: 8px;
    border-top-right-radius: 8px;
    background-color: #fff;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    padding-right: 23px;
    border-bottom-width: 1px;
    border-bottom-color: #939eab;
    border-bottom-style: dashed;
`;

const Title = styled.div`
    font-size: 24px;
    color: #939eab;
`;

const DateView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

const Date = styled.div`
    font-size: 16px;
    color: #939eab;
    font-weight: bold;
    margin-bottom: 3px;
`;

const Time = styled.div`
font-size: 16px;
    color: #939eab;
`;

class CheerCard extends Component {
    render() {
        return (
            <Container>
                <Title>잘봣습니다!</Title>
                <DateView>
                    <Date>2018.10/15</Date>
                    <Time>10</Time>
                </DateView >
            </Container >
        );
    }
}

export default CheerCard;
