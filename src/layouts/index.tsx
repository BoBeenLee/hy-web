import React, { SFC } from "react";
import { Helmet } from "react-helmet";
import styled, { injectGlobal } from "styled-components";

import { Header } from "../components";

interface IProps {
  children: any;
}

// tslint:disable-next-line:no-unused-expression
injectGlobal`
@import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

#___gatsby {
  height: 100%;  
}

html, body {
  margin: 0px;
  height: 100%;
}
* {
  font-family: "Noto Sans KR";
  box-sizing: border-box;
  font-size: 18px;
}
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #eee;
`;

const Layout: SFC<IProps> = ({ children }) => (
  <Container>
    <Helmet>
      <meta charSet="utf-8" />
      <title>HY</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <Header />
    {children()}
  </Container>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
