import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1008px;
    height: 80px;
    border-radius: 8px;
    padding-left: 39px;
    padding-right: 39px;
    box-shadow: 2px 2px 10px #6fc7e2;
    background-color: white;
`;

const Input = styled.input`
    font-size: 24px;
    color: #dadada;
    width: 100%;
    height: 36px;
    border-width: 0px;
`;

const CheerInput = () => {
    return (
        <Container>
            <Input name="cheer" value="JHello" />
        </Container>
    );
};

export default CheerInput;
