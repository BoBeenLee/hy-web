import React, { SFC } from "react";
import { Helmet } from "react-helmet";
import styled, { injectGlobal } from "styled-components";
import { CloudinaryContext } from 'cloudinary-react';

import { Header } from "../components";

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


interface IProps {
  children: any;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100%;
  background-color: #f0f9fc;
`;

const CloudinaryView = styled(CloudinaryContext)`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100%;
  background-color: #f0f9fc;
`;

const Layout: SFC<IProps> = ({ children }) => (
  <Container>
    <Helmet>
      <meta charSet="utf-8" />
      <title>HYCD</title>
    </Helmet>
    <Header />
    <CloudinaryView cloudName="one-person">
      {children()}
    </CloudinaryView>
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
