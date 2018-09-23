import React, { Component } from "react";
import styled, { css } from "styled-components";
import moment from 'moment';

type CheerType = "top" | "bottom" | "middle";

interface IProps {
    className?: string;
    title: string;
    createdAt: number;
    type: CheerType;
}

const CheerTopCSS = css`
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-width: 1px;
    border-bottom-color: #939eab;
    border-bottom-style: dashed;
`;

const CheerBottomCSS = css`
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;

const CheerMiddleCSS = css`
    border-bottom-width: 1px;
    border-bottom-color: #939eab;
    border-bottom-style: dashed;
`;

const Container = styled.div.attrs<{ type: CheerType }>({})`
    height: 73.5px;
    background-color: #fff;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 29px;
    padding-right: 29px;

    ${({ type }) => {
        switch (type) {
            case "top":
                return CheerTopCSS;
            case "bottom":
                return CheerBottomCSS;
            default:
                return CheerMiddleCSS;
        }
    }}
`;


const Title = styled.div`
    font-size: 18px;
    color: #939eab;
`;

const DateView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

const Date = styled.div`
    font-size: 12px;
    color: #939eab;
    font-weight: bold;
    margin-bottom: 2px;
`;

const Time = styled.div`
    font-size: 12px;
    color: #939eab;
`;

class CheerCard extends Component<IProps> {
    render() {
        const { className, title, createdAt, type } = this.props;
        return (
            <Container type={type} className={className}>
                <Title>{title}</Title>
                <DateView>
                    <Date>{moment(createdAt).format("YYYY.MM.DD")}</Date>
                    <Time>{moment(createdAt).format("HH:mm")}</Time>
                </DateView >
            </Container >
        );
    }
}

export default CheerCard;
