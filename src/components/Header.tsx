import _ from "lodash";
import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

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

const MenuView = styled.div`
  padding-top: 263px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const MenuItem = styled.li`

`;

const MenuImage = styled.img``;

const menus = [{
  name: "main",
  path: "/",
  icon: require("./images/active_main_icon@2x.png"),
}, {
  name: "gallery",
  path: "/gallery",
  icon: require("./images/gallery_icon@2x.png"),
}, {
  name: "cheer",
  path: "/cheer",
  icon: require("./images/cheer_icon@2x.png"),
}, {
  name: "people",
  path: "/people",
  icon: require("./images/people_icon@2x.png"),
}];

const Header = () => (
  <Container>
    <HYIconView>
      Hello
    </HYIconView>
    <MenuView>
      <MenuList>
        {_.map(menus, (menu) => {
          return (
            <MenuItem>
              <Link
                to={menu.path}>
                <MenuImage src={menu.icon} />
              </Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </MenuView>
  </Container>
);

export default Header;
