import React from "react";
import styled from "styled-components";
import portfolio from "../../images/portfolio-1.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  opacity: 0.6;
  font-family: Muli;
  font-size: 17px;
  img {
    margin-right: 7px;
  }
`;

const Label = props => {
  return (
    <Wrapper>
      <img alt="icon-item" src={portfolio} />
      {props.label}
    </Wrapper>
  );
};

export default Label;
