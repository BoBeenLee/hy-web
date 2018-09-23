import React, { Component } from 'react';
import styled from 'styled-components';

interface IProps {
    className?: string;
    isActive: boolean;
}

const Container = styled.div.attrs<{ isActive: boolean; }>({})`
    width: 220.5px;
    height: 213px;
    border-radius: 8px;
    background-color: white;
    ${({ isActive }) => isActive ? 'box-shadow: 1px 1px 5px #6fc7e2;' : ''};
`;

const ProfileImage = styled.img`
    display: block;
    width: 100%;
    height: 150px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

const BottomView = styled.div`
    border-top-width: 1px;
    border-top-color: #6fc7e2;
    border-top-style: solid;
    padding-top: 9.7px;
    padding-left: 9px;
`;

const NameText = styled.div`
    font-size: 17px;
    color: #323c47;
`;

const RoleText = styled.div`
    margin-top: 6px;
    font-size: 10.5px;
    color: #939eab;
`;

class PeopleCard extends Component<IProps> {
    public render() {
        const { isActive, className } = this.props;
        return (
            <Container className={className} isActive={isActive}>
                <ProfileImage src={"http://via.placeholder.com/295x200"} />
                <BottomView>
                    <NameText>김보민</NameText>
                    <RoleText>웹/홍보</RoleText>
                </BottomView>
            </Container>
        );
    }
}

export default PeopleCard;
