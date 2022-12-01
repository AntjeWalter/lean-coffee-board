import styled from "styled-components";

export default function Header() {
  return <StyledHeader>Lean Coffee Board</StyledHeader>;
}

export const StyledHeader = styled.h1`
  margin: 20px;
  padding: 20px;
  text-align: center;
  background-color: lightblue;
`;
