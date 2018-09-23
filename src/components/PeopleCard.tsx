import React, { Component } from 'react';
import styled from 'styled-components';

interface IProps {
    className?: string;
    isActive: boolean;
    name: string;
    role: string;
    profileImage: string;
}

const Container = styled.div.attrs<{ isActive: boolean; }>({})`
    width: 220.5px;
    height: 213px;
    border-radius: 8px;
    background-color: white;
    ${({ isActive }) => isActive ? 'box-shadow: 1px 1px 5px 2px #6fc7e2;' : ''};
`;

const ProfileImage = styled.img`
    display: block;
    width: 100%;
    height: 150px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-size: cover;
    object-fit: cover;
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
    public static defaultProps = {
        name: "김보민",
        profileImage: "http://via.placeholder.com/295x200",
        role: "웹/홍보"
    }

    public render() {
        const { isActive, className, name, role, profileImage } = this.props;
        return (
            <Container className={className} isActive={isActive}>
                <ProfileImage src={profileImage} />
                <BottomView>
                    <NameText>{name}</NameText>
                    <RoleText>{role}</RoleText>
                </BottomView>
            </Container>
        );
    }
}

export default PeopleCard;
