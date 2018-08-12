import React, { SFC } from "react";
import styled from "styled-components";

interface IProps {
    className?: string;
    title?: string;
    content: string;
    hideTitle: boolean;
    hideDivier: boolean;
    dividerWidth?: number;
}

const Container = styled.div``;

const Title = styled.div`
    font-size: 32px;
    color: #939eab;
    margin-bottom: 15px;
`;

const Divider = styled.div.attrs<{ width: number }>({})`
    width: ${({ width }) => `${width}px` || "100%"};
    border-color: #939eab;
    border-width: 0px;
    border-top-width: 1px;
    border-style: solid;
`;

const Content = styled.pre`
    font-size: 24px;
    color: #939eab;
    margin-top: 21px;
`;

const InfoSection: SFC<IProps> = ({ className, title, content, hideTitle, hideDivier, dividerWidth = 0 }) => {
    return (
        <Container className={className}>
            {!hideTitle ? <Title>{title}</Title> : null}
            {!hideDivier ? <Divider width={dividerWidth} /> : null}
            <Content>
                {content}
            </Content>
        </Container>
    );
};

export default InfoSection;
