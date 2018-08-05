import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components';
import 'babel-polyfill';

import { Header } from '../components';

// import "normalize.css";

injectGlobal`
#___gatsby {
  height: 100%;  
}
html, body {
  height: 100%;
}
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #eee;
`;

const Layout = ({ children, data }) => (
  <Container>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
  </Container>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
