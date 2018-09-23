import _ from 'lodash';
import React, { Component } from "react";
import styled from 'styled-components';

import { SelectedPeopleCard, PeopleCard } from '../components';
import peopleData, { IPeople } from "../data/people";

interface IStates {
    selectedPeople: IPeople | null;
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: auto;
    overflow-y: auto;
    background-color: #f0f9fc;
`;

const Header = styled.div`
    position: fixed;
    width: 100%;
    padding-top: 18px;
    margin-left: 21.7px;
    margin-right: 26px;
    padding-bottom: 18px;
    background-color: #f0f9fc;
    z-index: 99;
`;

const SelectedPeopleCardView = styled(SelectedPeopleCard)`
`;

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
    padding-top: 290px;
    padding-left: 21.7px;
    padding-right: 26px;
`;

const PeopleTR = styled.tr``;

const PeopleTD = styled.td`
    padding-right: 26px;
    padding-bottom: 24.7px;
`;

const graphicIds = ["P2", "P5", "P6"];
const operationIds = ["P17", "P40", "P48"];

class PeoplePage extends Component<object, IStates> {

    public state: IStates = {
        selectedPeople: _.first(_.filter(peopleData, people => _.some(graphicIds, id => people.id === id)))
    }

    public render() {
        const graphics = _.filter(peopleData, people => _.some(graphicIds, id => people.id === id));
        const operations = _.filter(peopleData, people => _.some(operationIds, id => people.id === id));
        const peopleArrayExclude = _.filter(peopleData, people => !_.some([...graphics, ...operations], item => people.id === item.id));
        const chunkArray = _.chunk(peopleArrayExclude, 4);
        const { selectedPeople } = this.state;

        return (
            <Container>
                <Header>
                    <SelectedPeopleCardView data={selectedPeople} />
                </Header>
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
                            {_.map(graphics, (people, index) => {
                                const isActive = selectedPeople === people;
                                return (<PeopleTD key={`graphic${index}`} onClick={_.partial(this.onSelectedPeople, people)}>
                                    <PeopleCardView 
                                    isActive={isActive} 
                                    name={people.name} 
                                    role={people.role} 
                                    profileImage={isActive ? people.profileImage : people.inActiveProfileImage}
                                    hideInfo={false}
                                    />
                                </PeopleTD>);
                            })}
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
                            {_.map(operations, (people, index) => {
                                const isActive = selectedPeople === people;
                                return (<PeopleTD key={`operation${index}`} onClick={_.partial(this.onSelectedPeople, people)}>
                                    <PeopleCardView 
                                    isActive={isActive} 
                                    name={people.name} 
                                    role={people.role} 
                                    profileImage={isActive ? people.profileImage : people.inActiveProfileImage}
                                    hideInfo={false}
                                    />
                                </PeopleTD>);
                            })}
                        </PeopleTR>
                        {_.map(chunkArray, (chunkItem, index) => {
                            return (
                                <PeopleTR key={`tr${index}`}>
                                    {_.map(chunkItem, people => {
                                        const isActive = selectedPeople === people;
                                        return (<PeopleTD key={`other${index}`} onClick={_.partial(this.onSelectedPeople, people)}>
                                            <PeopleCardView 
                                            isActive={isActive} 
                                            name={people.name} 
                                            role={people.role} 
                                            profileImage={isActive ? people.profileImage : people.inActiveProfileImage}
                                            hideInfo={true}
                                            />
                                        </PeopleTD>);
                                    })}
                                </PeopleTR>
                            )
                        })}
                    </tbody>
                </PeopleTable>
            </Container>
        );
    }

    private onSelectedPeople = (people: IPeople) => {
        this.setState({
            selectedPeople: people
        });
    }
}

export default PeoplePage;
