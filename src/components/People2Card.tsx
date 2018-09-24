import React, { Component } from 'react';
import styled from 'styled-components';

interface IProps {
    className?: string;
    name: string;
    role: string;
    profileImage: string;
}

const Container = styled.div`
    position: relative;
    width: 291px;
    height: 194px;
`;

const ProfileImage = styled.img`
    display: block;
    width: 100%;
    background-size: cover;
    object-fit: cover;
`;

const BottomView = styled.div`
    position: absolute;
    left: 15px;
    bottom: 15px;
`;

const NameText = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: #637280;
`;

const RoleText = styled.div`
    margin-top: 2px;
    font-size: 12px;
    color: #637280;
`;

class People2Card extends Component<IProps> {
    public static defaultProps = {
        name: "김보민",
        profileImage: "http://via.placeholder.com/295x200",
        role: "웹/홍보"
    }

    public render() {
        const { className, name, role, profileImage } = this.props;
        return (
            <Container className={className}>
                <ProfileImage src={profileImage} />
                <BottomView>
                    <NameText>{name}</NameText>
                    <RoleText>{role}</RoleText>
                </BottomView>
            </Container>
        );
    }
}

export default People2Card;
