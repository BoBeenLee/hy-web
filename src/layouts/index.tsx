import React, { SFC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import { Header } from "../components";

interface IProps {
  children: any;
}

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
