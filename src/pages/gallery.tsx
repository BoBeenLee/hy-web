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

const Content = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: row;
`;

const SideContent = styled.div`
    display: flex;
    flex: 1;
`;

const SideBar = styled.div`
    width: 340px;
`;


class GalleryPage extends Component<object, IStates> {
    public state = {
        currentIndex: 0
    };
    public render() {
        const { currentIndex } = this.state;
        return (
            <Container>
                <GalleryTopBar onIndexChange={this.onIndexChange} menus={["Brand", "UXUI", "Package", "Character", "Illustration"]} currentIndex={currentIndex} />
                <Content>
                    <SideContent>Hello</SideContent>
                    <SideBar>SideBar</SideBar>
                </Content>

            </Container>
        );
    }

    private onIndexChange = (index: number) => {
        this.setState({
            currentIndex: index
        });
    }
}

export default GalleryPage;
