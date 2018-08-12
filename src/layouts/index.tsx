import React, { SFC } from "react";
import { Helmet } from "react-helmet";
import styled, { injectGlobal } from "styled-components";

import { Header } from "../components";
import { NotoSansKRRegular, NotoSansKRMedium } from '../fonts/index';

interface IProps {
  children: any;
}

injectGlobal`
@font-face {
  font-family: 'NotoSansKR';
  src: url(${NotoSansKRRegular});
  font-weight: normal;
  font-style: normal;
}

#___gatsby {
  height: 100%;  
}
html, body {
  margin: 0px;
  height: 100%;
}
* {
  font-family: "NotoSansKR";
  box-sizing: border-box;
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
