import _ from 'lodash';
import React, { Component } from 'react';
import styled from 'styled-components';

interface IProps {
    currentIndex: number;
    menus: string[];
}

const Container = styled.div`
    height: 82px;
    padding-left: 52px;
    background-color: white;
    box-shadow: 2px 2px 10px rgba(81, 162, 187, 0.5);
`;

const Menu = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const MenuItem = styled.li`
    padding-top: 31px;
    padding-bottom: 31px;
    margin-right: 64px;
    float: left;
`;

const MenuText = styled.div.attrs<{ isActive: boolean; }>({})`
    font-size: 16px;
    color: #637280;
    opacity: ${({ isActive }) => isActive ? '1' : '0.3'};
`;


class GalleryTopBar extends Component<IProps> {
    render() {
        const { currentIndex, menus } = this.props;
        return (
            <Container>
                <Menu>
                    {_.map(menus, (menu, index) => {
                        return (
                            <MenuItem key={menu}>
                                <MenuText isActive={currentIndex === index}>{menu}</MenuText>
                            </MenuItem>
                        )
                    })}
                </Menu>
            </Container>
        );
    }
}

export default GalleryTopBar;
