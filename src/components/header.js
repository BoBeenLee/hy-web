import _ from 'lodash';
import React from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';

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

const menus = [{
  name: "main",
  path: "/"
}, {
  name: "gallery",
  path: "/gallery"
}, {
  name: "cheer",
  path: "/cheer"
}, {
  name: "people",
  path: "/people"
}];

const Header = ({ siteTitle }) => (
  <Container>
    <HYIconView>
      Hello
    </HYIconView>
    <MenuView>
      <MenuList>
        {_.map(menus, menu => {
          return (
            <MenuItem>
              <Link
                to={menu.path}>
                {menu.name}
              </Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </MenuView>
  </Container>
)

export default Header
