import React, { useContext } from "react";

import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const StyledHeader = styled.div`
  margin-bottom: -64px;
  padding: 0;
  max-height: 64px;
  padding: 0;
  max-height: 64px;
  width: calc(100%);
  background-color: #ffffff;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(28, 52, 76, 1);
  -moz-box-shadow: 0px 1px 5px 0px rgba(28, 52, 76, 1);
  box-shadow: 0px 1px 5px 0px rgba(28, 52, 76, 1);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: right;
  -webkit-justify-content: right;
  -ms-flex-pack: right;
  justify-content: right;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: space-evenly;
  /* -webkit-justify-content: space-evenly; */
  -ms-flex-pack: space-evenly;
  /* justify-content: space-evenly; */
  justify-content: flex-end;
  color: #fff;
  h1 {
    margin: 0;
    padding-left: 26px;

    :hover {
      cursor: pointer;
      opacity: 0.4;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Home</h1>
      <h1>Cabin</h1>
      <h1>Cabin</h1>
      <h1>Contact</h1>
    </StyledHeader>
  );
};

export default Header;
