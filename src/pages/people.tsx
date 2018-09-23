import React, { Component } from "react";
import styled from 'styled-components';

import { SelectedPeopleCard, PeopleCard } from '../components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 18px;
    padding-left: 21.7px;
    padding-right: 26px;
    overflow-x: auto;
    overflow-y: auto;
    background-color: #f0f9fc;
`;

const SelectedPeopleCardView = styled(SelectedPeopleCard)``;

const PeopleCardView = styled(PeopleCard)``;

const PeopleIntroView = styled.div`
    position: relative;
    width: 220.5px;
    height: 213.7px;
`;

const PeopleIntroName = styled.div`
    position: absolute;
    top: 12.7px;
    left: 13.5px;
    font-size: 31.5px;
    line-height: 37.5px;
    color: white;
    z-index: 1;
`;

const PeopleIntroRole = styled.div`
    position: absolute;
    left: 13.5px;
    bottom: 51px;
    font-size: 16.5px;
    color: white;
    z-index: 1;
`;

const PeopleIntroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const PeopleTable = styled.table`
    min-width: 970.5px;
    width: 970.5px;
    border: 0px;
    margin-top: 30px;
`;

const PeopleTR = styled.tr``;

const PeopleTD = styled.td`
    padding-right: 26px;
    padding-bottom: 24.7px;
`;

class PeoplePage extends Component {
    render() {
        return (
            <Container>
                <SelectedPeopleCardView />
                <PeopleTable>
                    <tbody>
                        <PeopleTR>
                            <PeopleTD>
                                <PeopleIntroView>
                                    <PeopleIntroName>
                                        졸업<br />
                                        준비<br />
                                        위원회
                                </PeopleIntroName>
                                    <PeopleIntroRole>
                                        _그래픽팀
                                </PeopleIntroRole>
                                    <PeopleIntroImage src={require("./images/people-1@2x.png")} />
                                </PeopleIntroView>
                            </PeopleTD>
                            <PeopleTD><PeopleCardView isActive={false} /></PeopleTD>
                            <PeopleTD><PeopleCardView isActive={false} /></PeopleTD>
                            <PeopleTD><PeopleCardView isActive={false} /></PeopleTD>
                        </PeopleTR>
                        <PeopleTR>
                            <PeopleTD>
                                <PeopleIntroView>
                                    <PeopleIntroName>
                                        졸업<br />
                                        준비<br />
                                        위원회
                                </PeopleIntroName>
                                    <PeopleIntroRole>
                                        _운영팀
                                </PeopleIntroRole>
                                    <PeopleIntroImage src={require("./images/people-2@2x.png")} />
                                </PeopleIntroView>
                            </PeopleTD>
                            <PeopleTD><PeopleCardView isActive={true} /></PeopleTD>
                            <PeopleTD><PeopleCardView isActive={false} /></PeopleTD>
                            <PeopleTD><PeopleCardView isActive={false} /></PeopleTD>
                        </PeopleTR>
                        <PeopleTR>
                            <PeopleTD><PeopleCardView isActive={false} /></PeopleTD>
                            <PeopleTD><PeopleCardView isActive={false} /></PeopleTD>
                            <PeopleTD><PeopleCardView isActive={false} /></PeopleTD>
                            <PeopleTD><PeopleCardView isActive={false} /></PeopleTD>
                        </PeopleTR>
                    </tbody>
                </PeopleTable>
            </Container>
        );
    }
}

export default PeoplePage;
