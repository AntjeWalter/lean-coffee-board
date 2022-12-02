import styled from "styled-components";
import { useState } from "react";

export default function Card({ topic, author, onDelete, id, onUpdateCard }) {
  const [edit, setEdit] = useState(false);

  function handleEditSubmit(event) {
    event.preventDefault();
    const adaptedTopic = event.target.editedTopic.value;
    const adaptedAuthor = event.target.editedAuthor.value;
    console.log(adaptedTopic, adaptedAuthor);
    const editedCard = { topic: adaptedTopic, author: adaptedAuthor, id };
    onUpdateCard(editedCard);
    setEdit(!edit);
  }

  return (
    <>
      {edit === true ? (
        <form onSubmit={handleEditSubmit}>
          <textarea name="editedTopic" placeholder="Edit topic"></textarea>
          <textarea name="editedAuthor" placeholder="Edit name"></textarea>
          <button type="submit">Save changes</button>
        </form>
      ) : (
        <StyledListItem>
          <StyledTopic>{topic}</StyledTopic>
          <StyledAuthor>{author}</StyledAuthor>
          <StyledDeleteButton onClick={() => onDelete(id)}>
            ❌ Delete
          </StyledDeleteButton>
          <StyledEditButton type="button" onClick={() => setEdit(!edit)}>
            ✍🏼 Edit
          </StyledEditButton>
        </StyledListItem>
      )}
    </>
  );
}

export const StyledListItem = styled.li`
  display: grid;
  grid-template-areas:
    "a a c"
    "b b d";
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

export const StyledDeleteButton = styled.button`
  grid-area: c;
  margin: 10px;
  border: none;
  background-color: transparent;
  font-size: 1.2em;
  cursor: pointer;
`;

export const StyledEditButton = styled.button`
  grid-area: d;
  margin: 10px;
  border: none;
  background-color: transparent;
  font-size: 1.2em;
  cursor: pointer;
`;
