import React, { SFC } from "react";
import styled, { ThemedCssFunction } from "styled-components";

interface IProps {
    className?: string;
    title?: string;
    content: string;
    contentCSS?: any;
    hideTitle: boolean;
    hideDivier: boolean;
    dividerWidth?: number;
}

const Container = styled.div``;

const Title = styled.div`
    font-size: 24px;
    color: #939eab;
    margin-bottom: 11px;
`;

const Divider = styled.div.attrs<{ width: number }>({})`
    width: ${({ width }) => `${width}px` || "100%"};
    border-color: #939eab;
    border-width: 0px;
    border-top-width: 1px;
    border-style: solid;
`;

const Content = styled.pre.attrs<{ contentCSS?: any }>({})`
    font-size: 18px;
    color: #939eab;
    line-height: 29px;
    margin-top: 15.7px;
    ${({ contentCSS }) => contentCSS};
`;

const InfoSection: SFC<IProps> = ({ className, title, content, contentCSS, hideTitle, hideDivier, dividerWidth = 0 }) => {
    return (
        <Container className={className}>
            {!hideTitle ? <Title>{title}</Title> : null}
            {!hideDivier ? <Divider width={dividerWidth} /> : null}
            <Content contentCSS={contentCSS!}>
                {content}
            </Content>
        </Container>
    );
};

export default InfoSection;
