import { match } from "react-router";
import * as H from 'history';
import _ from "lodash";
import React from "react";
import Link from "gatsby-link";
import styled, { css } from "styled-components";

interface IStates {
  currentIndex: number;
}

const Container = styled.div`
  flex-direction: column;
  width: 80px;
  align-items: center;
  background-color: #fff;
`;

const HYIconView = styled.div`
  height: 59px;
  text-align: center;
`;

const HYIcon = styled.img`
  width: 34px;
  height: 35px;
  margin-top: 25px;
`;

const MenuView = styled.div`
  padding-top: 263px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const MenuItem = styled.li`
  width: 100%;
`;

const MenuActiveCSS = css`
  border-left-width: 2px;
  border-left-color: #6fc7e2;
  border-left-style: solid;
`;


const MenuIconView = styled.div.attrs<{ active: boolean }>({})`
  display: block;
  width: 100%;
  height: 24px;
  text-align: center;
  margin-bottom: 92px;
  ${({ active }) => active && MenuActiveCSS};
`;

const MenuIcon = styled.img`
  width: 22px;
  height: 24px;
`;

const menus: any = [{
  activeIcon: null,
  name: "main",
  path: "/",
  icon: require("./images/active_main_icon@2x.png"),
}, {
  activeIcon: null,
  name: "gallery",
  path: "/gallery",
  icon: require("./images/gallery_icon@2x.png"),
}, {
  activeIcon: null,
  name: "cheer",
  path: "/cheer",
  icon: require("./images/cheer_icon@2x.png"),
}, {
  activeIcon: null,
  name: "people",
  path: "/people",
  icon: require("./images/people_icon@2x.png"),
}];

class Header extends React.Component<object, IStates> {

  public state = {
    currentIndex: 0
  };
  public render() {
    const { currentIndex } = this.state;
    return (
      <Container>
        <HYIconView>
          <HYIcon src={require("./images/logo@2x.png")} />
        </HYIconView>
        <MenuView>
          <MenuList>
            {_.map(menus, (menu, index: number) => {
              return (
                <MenuItem key={menu.name}>
                  <MenuIconView active={currentIndex === index}>
                    <Link isActive={_.partial(this.isActive, index)} to={menu.path}>
                      <MenuIcon src={menu.icon} />
                    </Link>
                  </MenuIconView>
                </MenuItem>
              );
            })}
          </MenuList>
        </MenuView>
      </Container>
    );
  }


  private isActive = (index: number, match: match<any>, location: H.Location) => {
    if (_.isEmpty(match)) {
      return false;
    }
    if (match.url === location.pathname) {
      if (this.state.currentIndex !== index) {
        this.setState({
          currentIndex: index
        });
      }
      return true;
    }
    return false;
  }
}

export default Header;
