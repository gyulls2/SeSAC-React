import React from "react";
import styled from "styled-components";

const StyledComponents = () => {
  const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    color: #fff;
  `;

  const Wrapper = styled.div`
    padding: 4em;
    background: pink;
  `;

  const Button = styled.button`
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  return (
    <div>
      <Wrapper>
        <Title>안녕하세요</Title>
        <Button>Normal</Button>
        <Button primary>Normal</Button>
      </Wrapper>
    </div>
  );
};

export default StyledComponents;
