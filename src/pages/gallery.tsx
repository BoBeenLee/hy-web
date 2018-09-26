import _ from 'lodash';
import React, { Component } from "react";
import styled from 'styled-components';

import { GalleryTopBar, People2Card } from '../components';
import galleryData, { IGallery } from "../data/gallery";
import peopleData, { IPeople } from "../data/people";

interface IStates {
    currentMenuName: string;
    selectedGallery: IGallery | null;
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
    flex-direction: column;
    background-color: #eee;
    overflow-y: auto;
`;

const Image = styled.img`
    width: 100%;
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

const Profile = styled(People2Card)`
    margin-bottom: 24px;
`;

const Thumbnail = styled.img.attrs<{ isActive: boolean; }>({})`
    width: 291px;
    height: 194px;
    cursor: pointer;
    margin-bottom: 24px;
    ${({ isActive }) => isActive ? 'box-shadow: 1px 1px 5px 2px #6fc7e2;' : ''};
`;

// tslint:disable:object-literal-sort-keys
const data: { [key: string]: IGallery[] } = {
    "Brand": [
        {
            id: "P1",
            role: "UXUI",
            thumbnail: "https://via.placeholder.com/300x300",
            images: [
                "https://via.placeholder.com/300x300"
            ]
        },
        {
            id: "P2",
            role: "UXUI",
            thumbnail: "https://via.placeholder.com/300x300",
            images: [
                "https://via.placeholder.com/300x300"
            ]
        }
    ],
    "UXUI": [
        ...galleryData
    ],
    "Package": [
        {
            id: "P3",
            role: "UXUI",
            thumbnail: "https://via.placeholder.com/300x300",
            images: [
                "https://via.placeholder.com/300x300"
            ]
        },
        {
            id: "P4",
            role: "UXUI",
            thumbnail: "https://via.placeholder.com/300x300",
            images: [
                "https://via.placeholder.com/300x300"
            ]
        }
    ],
    "Character": [
        {
            id: "P5",
            role: "UXUI",
            thumbnail: "https://via.placeholder.com/300x300",
            images: [
                "https://via.placeholder.com/300x300"
            ]
        }
    ],
    "Illustration": [
        {
            id: "P6",
            role: "UXUI",
            thumbnail: "https://via.placeholder.com/300x300",
            images: [
                "https://via.placeholder.com/300x300"
            ]
        },
        {
            id: "P7",
            role: "UXUI",
            thumbnail: "https://via.placeholder.com/300x300",
            images: [
                "https://via.placeholder.com/300x300"
            ]
        }
    ],
}

class GalleryPage extends Component<object, IStates> {
    public state: IStates = {
        currentMenuName: "Brand",
        selectedGallery: _.first(data.Brand)
    };
    public render() {
        const { currentMenuName, selectedGallery } = this.state;
        const currentData = data[currentMenuName];
        const selectedPeople: IPeople = _.find(peopleData, people => people.id === _.get(selectedGallery, "id"));

        return (
            <Container>
                <GalleryTopBar onMenuChange={this.onIndexChange} menus={["Brand", "UXUI", "Package", "Character", "Illustration"]} currentMenuName={currentMenuName} />
                <Content>
                    <SideContent>
                        {selectedGallery ? _.map(selectedGallery.images, image => {
                            return <Image src={image} />
                        }) : null}
                    </SideContent>
                    <SideBar>
                        {_.map(currentData, item => {
                            const isActive = selectedGallery === item;
                            if (isActive) {
                                return selectedPeople ? <Profile
                                    isActive={isActive}
                                    name={selectedPeople.name}
                                    subject={selectedPeople.subject}
                                    profileImage={selectedPeople.profileImage}
                                /> : null;
                            }
                            return <Thumbnail isActive={isActive}
                                src={item.thumbnail}
                                onClick={_.partial(this.onSelectedGallery, item)} />
                        })}
                    </SideBar>
                </Content>
            </Container>
        );
    }

    private onIndexChange = (name: string) => {
        this.setState({
            currentMenuName: name,
            selectedGallery: _.first(data[name])
        });
    }

    private onSelectedGallery = (gallery: IGallery) => {
        this.setState({
            selectedGallery: gallery
        });
    }
}

export default GalleryPage;
