import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

type ButtonProp = {
  name: string;
};

const ButtonWrapper = styled.button`
  width: 100%;
  height: auto;
  padding: 1rem 0;
  background: #ffffff;
  border: 2px solid #888888;
  &:hover {
    background: #eeeeee;
  }
  span {
    writing-mode: vertical-lr;
    font-size: 1rem;
    letter-spacing: 3px;
  }
`;

const Button = ({ name }: ButtonProp) => {
  return (
    <ButtonWrapper>
      <span>{name}</span>
    </ButtonWrapper>
  );
};

const PageButtons = () => {
  const buttonNames = ["문제", "질문", "테스트케이스"];
  const { version } = useParams();
  if (version === "multi") buttonNames.push("초대");
  return (
    <>
      {buttonNames.map((name, idx) => (
        <Button key={idx} name={name} />
      ))}
    </>
  );
};
export default PageButtons;
