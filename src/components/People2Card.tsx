import React, { Component } from 'react';
import styled from 'styled-components';

interface IProps {
    className?: string;
    isActive: boolean;
    name: string;
    subject: string;
    profileImage: string;
}

const Container = styled.div.attrs<{ isActive: boolean; }>({})`
    position: relative;
    width: 291px;
    height: 194px;
    ${({ isActive }) => isActive ? 'box-shadow: 1px 1px 5px 2px #6fc7e2;' : ''};
`;

const ProfileImage = styled.img`
    display: block;
    width: 100%;
    border-radius: 8px;
    background-size: cover;
    object-fit: cover;
`;

const BottomView = styled.div`
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 15px;
`;

const NameText = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: #637280;
`;

const RoleText = styled.div`
    font-size: 12px;
    font-weight: lighter;
    color: #637280;
    margin-top: 2px;
`;

class People2Card extends Component<IProps> {
    public static defaultProps = {
        name: "김보민",
        profileImage: "http://via.placeholder.com/295x200",
        role: "웹/홍보"
    }

    public render() {
        const { className, isActive, name, subject, profileImage } = this.props;
        return (
            <Container isActive={isActive} className={className}>
                <ProfileImage src={profileImage} />
                <BottomView>
                    <NameText>{name}</NameText>
                    <RoleText>{subject}</RoleText>
                </BottomView>
            </Container>
        );
    }
}

export default People2Card;
