import React, { SFC } from "react";
import Helmet from "react-helmet";
import styled, { injectGlobal } from "styled-components";

import { Header } from "../components";

interface IProps {
  children: any;
}

injectGlobal`
#___gatsby {
  height: 100%;  
}
html, body {
  margin: 0px;
  height: 100%;
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
    {/* <Helmet
      title={"HY"}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    /> */}
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
