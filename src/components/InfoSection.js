import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 32px;
    color: #939eab;
`;

const Divider = styled.div`
    margin-top: 15px;
    margin-bottom: 21px;
    width: ${({ width }) => width || "100%"};
    height: 1px;
    background-color: #939eab;
`;

const Content = styled.div`
    font-size: 24px;
    color: #939eab;
`;

const InfoSection = ({ className, hideTitle, hideDivier, dividerWidth }) => {
    return (
        <Container className={className}>
            {!hideTitle ? <Title>Hello</Title> : null}
            {!hideDivier ? <Divider width={dividerWidth} /> : null}
            <Content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magnam sequi veniam ad, culpa laudantium odio quasi. Autem amet praesentium in vero impedit dolorem distinctio exercitationem! Excepturi commodi consequuntur nihil?
            </Content>
        </Container>
    );
};


export default InfoSection;
