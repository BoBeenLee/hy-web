import _ from 'lodash';
import React, { Component } from "react";
import styled from 'styled-components';

import { GalleryTopBar } from '../components';

interface IStates {
    currentMenuName: string;
}

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: #f0f9fc;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const SideContent = styled.div`
    display: flex;
    flex: 1;
    background-color: #eee;
    justify-content: center;
    align-items: center;
`;

const SideBar = styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    overflow: auto;
`;

const Thumbnail = styled.img.attrs<{ isActive: boolean; }>({})`
    width: 291px;
    height: 194px;
    cursor: pointer;
    margin-bottom: 24px;
    ${({ isActive }) => isActive ? 'box-shadow: 1px 1px 5px 2px #6fc7e2;' : ''};
`;

// tslint:disable:object-literal-sort-keys
const data: any = {
    "Brand": [
        {
            mainUrl: "https://via.placeholder.com/300x300",
            thumbnail: "https://via.placeholder.com/300x300",
        },
        {
            mainUrl: "https://via.placeholder.com/300x300",
            thumbnail: "https://via.placeholder.com/300x300",
        },
        {
            mainUrl: "https://via.placeholder.com/300x300",
            thumbnail: "https://via.placeholder.com/300x300",
        },
        {
            mainUrl: "https://via.placeholder.com/300x300",
            thumbnail: "https://via.placeholder.com/300x300",
        },
        {
            mainUrl: "https://via.placeholder.com/300x300",
            thumbnail: "https://via.placeholder.com/300x300",
        },
        {
            mainUrl: "https://via.placeholder.com/300x300",
            thumbnail: "https://via.placeholder.com/300x300",
        }
    ],
    "UXUI": [
        {
            mainUrl: "https://via.placeholder.com/300x300",
            thumbnail: "https://via.placeholder.com/300x300",
        },
        {
            mainUrl: "https://via.placeholder.com/300x300",
            thumbnail: "https://via.placeholder.com/300x300",
        }
    ],
    "Package": [
        {
            mainUrl: "https://via.placeholder.com/300x300",
            thumbnail: "https://via.placeholder.com/300x300",
        },
        {
            mainUrl: "https://via.placeholder.com/300x300",
            thumbnail: "https://via.placeholder.com/300x300",
        }
    ],
    "Character": [
        {
            mainUrl: "https://via.placeholder.com/300x300",
            thumbnail: "https://via.placeholder.com/300x300",
        }
    ],
    "Illustration": [
        {
            mainUrl: "https://via.placeholder.com/300x300",
            thumbnail: "https://via.placeholder.com/300x300",
        },
        {
            mainUrl: "https://via.placeholder.com/300x300",
            thumbnail: "https://via.placeholder.com/300x300",
        }
    ],
}

class GalleryPage extends Component<object, IStates> {
    public state: IStates = {
        currentMenuName: "Brand"
    };
    public render() {
        const { currentMenuName } = this.state;
        const currentData = data[currentMenuName];

        return (
            <Container>
                <GalleryTopBar onMenuChange={this.onIndexChange} menus={["Brand", "UXUI", "Package", "Character", "Illustration"]} currentMenuName={currentMenuName} />
                <Content>
                    <SideContent>Hello</SideContent>
                    <SideBar>
                        {_.map(currentData, item => {
                            return <Thumbnail isActive={true} src={item.thumbnail} />
                        })}
                    </SideBar>
                </Content>
            </Container>
        );
    }

    private onIndexChange = (name: string) => {
        this.setState({
            currentMenuName: name
        });
    }
}

export default GalleryPage;
