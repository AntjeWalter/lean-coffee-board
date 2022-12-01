import styled from "styled-components";

export default function Card({ topic, author, onDelete, id }) {
  return (
    <>
      <StyledListItem>
        <StyledTopic>{topic}</StyledTopic>
        <StyledAuthor>{author}</StyledAuthor>
        <StyledButton onClick={() => onDelete(id)}>❌ Delete</StyledButton>
      </StyledListItem>
    </>
  );
}

export const StyledListItem = styled.li`
  display: grid;
  grid-template-areas:
    "a a a"
    "b b c";
  margin: 20px;
  list-style: none;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 30px;
`;

export const StyledTopic = styled.p`
  grid-area: a;
  font-size: 1.1em;
`;

export const StyledAuthor = styled.p`
  grid-area: b;
  font-size: 1.2em;
  color: orangered;
`;

export const StyledButton = styled.button`
  grid-area: c;
  margin: 10px;
  border: none;
  background-color: transparent;
  font-size: 1.2em;
`;
