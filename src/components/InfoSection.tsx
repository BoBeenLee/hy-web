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

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 32px;
    color: #939eab;
`;

const Divider = styled.div.attrs<{ width: number }>({})`
    margin-top: 15px;
    margin-bottom: 21px;
    width: ${({ width }) => `${width}px` || "100%"};
    height: 1px;
    background-color: #939eab;
`;

const Content = styled.pre`
    font-size: 24px;
    color: #939eab;
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
