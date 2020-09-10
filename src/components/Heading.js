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

const StyledLink = styled(Link)`
  margin-right: 20px;
  cursor: pointer;
  transition: 250ms;
  cursor: pointer;
  color: #333;
  text-decoration: none;
  font-size: 23px;
  border-radius: 7px;

  &:hover,
  &:focus {
    color: white;
    background-color: #184fdfd4;
    padding: 8px;
    box-shadow: 1px 0px 10px 2px #300a71dd;
  }
`;

export const Heading = () => {
  return (
    <Header>
      <H1>Unsplash</H1>

      <span id="trending">
        <StyledLink to="./trending">Trending</StyledLink>
      </span>
      <span id="home">
        <StyledLink to="/">Home</StyledLink>
      </span>
    </Header>
  );
};
