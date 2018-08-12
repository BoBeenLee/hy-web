import React, { Component } from "react";
import styled from 'styled-components';

import { SelectedPeopleCard, PeopleCard } from '../components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 24px;
    padding-left: 29px;
    padding-right: 35px;
    overflow-x: auto;
    overflow-y: auto;
    background-color: #f0f9fc;
`;

const SelectedPeopleCardView = styled(SelectedPeopleCard)``;

const PeopleCardView = styled(PeopleCard)``;

const PeopleIntroView = styled.div`
    position: relative;
    width: 294px;
    height: 285px;
`;

const PeopleIntroName = styled.div`
    position: absolute;
    top: 17px;
    left: 18px;
    font-size: 42px;
    color: white;
    z-index: 1;
`;

const PeopleIntroRole = styled.div`
    position: absolute;
    left: 18px;
    bottom: 68px;
    font-size: 22px;
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
    min-width: 1294px;
    width: 1294px;
    border: 0px;
    margin-top: 40px;
`;

const PeopleTR = styled.tr``;

const PeopleTD = styled.td`
    padding-right: 35px;
    padding-bottom: 33px;
`;

class PeoplePage extends Component {
    render() {
        return (
            <Container>
                <SelectedPeopleCardView />
                <PeopleTable>
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
                </PeopleTable>
            </Container>
        );
    }
}

export default PeoplePage;
