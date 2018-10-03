import React, { Component } from 'react';
import styled from 'styled-components';

interface IProps {
    className?: string;
    isActive: boolean;
    name: string;
    role: string;
    profileImage: string;
    hideInfo: boolean;
}

const Container = styled.div.attrs<{ isActive: boolean; }>({})`
    width: 220.5px;
    border-radius: 8px;
    background-color: white;
    ${({ isActive }) => isActive ? 'box-shadow: 1px 1px 5px 2px #6fc7e2;' : ''};
`;

const ProfileImage = styled.img.attrs<{ hideInfo: boolean }>({})`
    display: block;
    width: 100%;
    height: 150px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-size: cover;
    object-fit: cover;
    ${({ hideInfo }) => hideInfo ? `
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    ` : ''};
`;

const BottomView = styled.div`
    border-top-width: 1px;
    border-top-color: #6fc7e2;
    border-top-style: solid;
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 9px;
`;

const NameText = styled.div`
    font-size: 17px;
    color: #323c47;
`;

const RoleText = styled.div`
    margin-top: 2px;
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
        const { isActive, className, name, role, profileImage, hideInfo } = this.props;
        return (
            <Container className={className} isActive={isActive}>
                <ProfileImage hideInfo={hideInfo} src={profileImage} />
                {hideInfo ? null : <BottomView>
                    <NameText>{name}</NameText>
                    <RoleText>{role}</RoleText>
                </BottomView>}
            </Container>
        );
    }
}

export default PeopleCard;
