import React, { Component } from 'react';
import styled from 'styled-components';

import { IPeople } from '../data/people';

interface IProps {
    className?: string;
    data: IPeople;
}

const Container = styled.div`
    min-width: 972px;
    width: 972px;
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
    padding-right: 24px;
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
    margin-bottom: 18px;
`;

const Section1Title = Title.extend`
    display: inline-block;
    width: 65px;
`;

const Section1Description = Description.extend`
    display: inline-block;
    padding-left: 20px;
`;

const Link = styled.a`
    font-family: "Noto Sans KR";
    font-size: 12px;
    color: #939eab;
    line-height: 21.7px;
    text-decoration: none;
    cursor: pointer;
`;

const Section2 = styled.div`
    display: inline-block;
    width: 368px;
    height: 100%;
    padding-top: 30px;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 10px;
    background-color: white;
    float: right;
`;

const Section2Description = Description.extend`
    margin-top: 12.7px;
`;

class SelectedPeopleCard extends Component<IProps> {
    public render() {
        const { className, data } = this.props;
        const { name, subject, email, url, thought } = data;
        return (
            <Container className={className}>
                <ProfileImage src={"http://via.placeholder.com/312x312"} />
                <Section1>
                    <Section1ItemView>
                        <Section1Title>Name</Section1Title>
                        <Section1Description>{name}</Section1Description>
                    </Section1ItemView>
                    <Section1ItemView>
                        <Section1Title>Subject</Section1Title>
                        <Section1Description>{subject}</Section1Description>
                    </Section1ItemView>
                    <Section1ItemView>
                        <Section1Title>E-mail</Section1Title>
                        <Section1Description><Link href={`mailto:${email}`}>{email}</Link></Section1Description>
                    </Section1ItemView>
                    <Section1ItemView>
                        <Section1Title>URL</Section1Title>
                        <Section1Description>{url}</Section1Description>
                    </Section1ItemView>
                </Section1>
                <Section2>
                    <Title>Thought</Title>
                    <Section2Description>{thought}</Section2Description>
                </Section2>
            </Container>
        );
    }
}

export default SelectedPeopleCard;
