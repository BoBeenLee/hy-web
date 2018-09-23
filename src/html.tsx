/* tslint:disable no-var-requires */
/* tslint:disable no-console */

import * as React from "react";
import Helmet from "react-helmet";
import styled, { injectGlobal } from "styled-components";

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

const config = require("../gatsby-config.js");

// Load production style
let styles: string;
if (process.env.NODE_ENV === `production`) {
  try {
    styles = require("!raw-loader!../public/styles.css");
  } catch (err) {
    console.log(err);
  }
}

interface HtmlProps {
  body: any;
  postBodyComponents: any;
  headComponents: any;
}

// Use `module.exports` to be compliante with `webpack-require` import method
module.exports = (props: HtmlProps) => {
  const head = Helmet.rewind();

  const css = (process.env.NODE_ENV === `production`) ?
    <style
      id="gatsby-inlined-css"
      dangerouslySetInnerHTML={{ __html: styles }}
    />
    : null;

  const verification = config.siteMetadata && config.siteMetadata.googleVerification ? <meta
    name="google-site-verification"
    content={config.siteMetadata.googleVerification} /> : null;

  return (
    <html lang="en">
      <head>
        {props.headComponents}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="keywords"
          content="hy" />
        <meta name="description"
          content="hy" />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {css}
        {verification}
      </head>
      <body>
        <div
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
};
