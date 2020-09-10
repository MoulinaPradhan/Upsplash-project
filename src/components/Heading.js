import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: "Oswald", sans-serif;
  margin-bottom: 1em;
`;
export const Heading = () => {
  return (
    <Header>
      <H1>Unsplash</H1>
      <span>
        <Link to="./trending">Trending</Link>
      </span>
      <span className="active">
        <Link to="/">Home</Link>
      </span>
    </Header>
  );
};
