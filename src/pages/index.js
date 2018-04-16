import React from "react";
import Link from "gatsby-link";

export default () => 
  <div style={{ color: `tomato` }}>
    <h1>Welcome to HOME PAGE!</h1>
    <p>Really liking getting to know you!</p>
    <img src="https://source.unsplash.com/random/400x200" alt="random image" />
    <div>
        <Link to="/page-2/">PAGE 2</Link>
        <br />
        <Link to="/page-3/">PAGE 3</Link>
        <br />
        <Link to="/page-4/">PAGE 4</Link>
        <br />
        <Link to="/counter/">COUNTER</Link>
    </div>
  </div>
