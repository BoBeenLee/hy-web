import React, { Component } from "react";
import styled from 'styled-components';

import { GalleryTopBar } from '../components';

interface IStates {
    currentIndex: number;
}

const Container = styled.div`
     width: 100%;
    height: 100%;
    overflow-x: auto;
    overflow-y: auto;
    background-color: #f0f9fc;
`;

class GalleryPage extends Component<object, IStates> {

    public state = {
        currentIndex: 0
    };
    public render() {
        const { currentIndex } = this.state;
        return (
            <Container>
                <GalleryTopBar menus={["Brand", "Package", "Illustration", "UXUI", "Editorial"]} currentIndex={currentIndex} />
            </Container>
        );
    }
}

export default GalleryPage;
