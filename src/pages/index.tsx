import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <div>
    <Link to="/cheer">Go to page 1</Link>
    <Link to="/gallery">Go to page 2</Link>
    <Link to="/people">Go to page 3</Link>
  </div>
);

export default IndexPage;
