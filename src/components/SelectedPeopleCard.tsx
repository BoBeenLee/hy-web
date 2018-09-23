import React, { Component } from 'react';
import styled from 'styled-components';

interface IProps {
    className?: string;
}

const Container = styled.div`
    min-width: 972px;
    width: 972px
    height: 253.5px;
`;

const ProfileImage = styled.img`
    width: 234px;
    height: 100%;
    border-radius: 10px;
    box-shadow: 1px 1px 5px #6fc7e2;
    float: left;
    margin-right: 1px;
`;

const Title = styled.div`
    font-size: 18px;
    color: #939eab;
`;

const Description = styled.div`
    font-size: 12px;
    color: #939eab;
    line-height: 21.7px;
`;

const Section1 = styled.div`
    display: inline-block;
    width: 368px;
    height: 100%;
    padding-top: 30px;
    padding-left: 24px;
    border-left-width: 1px;
    border-left-color: rgba(111, 199, 226, 0.3);
    border-left-style: solid;
    border-right-width: 1px;
    border-right-color: rgba(111, 199, 226, 0.3);
    border-right-style: solid;
    border-radius: 10px;
    background-color: white;
`;

const Section1ItemView = styled.div`
    margin-bottom: 18.7px;
`;

const Section1Title = Title.extend`
    display: inline-block;
    width: 65px;
`;

const Section1Description = Description.extend`
    display: inline-block;
    padding-left: 20px;
`;

const Section2 = styled.div`
    display: inline-block;
    width: 368px;
    height: 100%;
    padding-top: 30px;
    padding-left: 24px;
    border-radius: 10px;
    background-color: white;
    float: right;
`;

const Section2Description = Description.extend`
    margin-top: 12.7px;
`;

class SelectedPeopleCard extends Component<IProps> {
    public render() {
        const { className } = this.props;

        return (
            <Container className={className}>
                <ProfileImage src={"http://via.placeholder.com/312x312"} />
                <Section1>
                    <Section1ItemView>
                        <Section1Title>Name</Section1Title>
                        <Section1Description>김보민</Section1Description>
                    </Section1ItemView>
                    <Section1ItemView>
                        <Section1Title>Subject</Section1Title>
                        <Section1Description>김보민</Section1Description>
                    </Section1ItemView>
                    <Section1ItemView>
                        <Section1Title>E-mail</Section1Title>
                        <Section1Description>김보민</Section1Description>
                    </Section1ItemView>
                    <Section1ItemView>
                        <Section1Title>URL</Section1Title>
                        <Section1Description>김보민</Section1Description>
                    </Section1ItemView>
                </Section1>
                <Section2>
                    <Title>Thought</Title>
                    <Section2Description>졸전 진행해서 너무 좋습니다ㅎㅎㅎㅎ</Section2Description>
                </Section2>
            </Container>
        );
    }
}

export default SelectedPeopleCard;
