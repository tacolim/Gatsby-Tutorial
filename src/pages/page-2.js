import React from "react";
import Link from "gatsby-link";

export default () => 
  <div style={{ color: `tomato` }}>
    <h1>Welcome to Page Two!</h1>
    <p>Continuing to learn about Gatsby!</p>
    <img src="https://source.unsplash.com/random/400x200" alt="random image" />
    <div>
        <Link to="/">HOME</Link>
        <br />
        <Link to="/page-3/">PAGE 3</Link>
        <br />
        <Link to="/page-4/">PAGE 4</Link>
    </div>
  </div>
