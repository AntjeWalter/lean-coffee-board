import styled from "styled-components";
import { useState } from "react";

export default function Card({ text, name, onDelete, id, onUpdateCard }) {
  const [edit, setEdit] = useState(false);

  function handleEditSubmit(event) {
    event.preventDefault();
    const adaptedText = event.target.editedText.value;
    const adaptedName = event.target.editedName.value;
    console.log(adaptedText, adaptedName);
    const editedCard = { text: adaptedText, name: adaptedName, id };
    onUpdateCard(editedCard);
    setEdit(!edit);
  }

  return (
    <>
      {edit === true ? (
        <StyledEditForm onSubmit={handleEditSubmit}>
          <StyledEditArea
            name="editedText"
            placeholder="Edit text..."
          ></StyledEditArea>
          <StyledEditArea
            name="editedName"
            placeholder="Edit name..."
          ></StyledEditArea>
          <StyledSaveButton type="submit">Save changes</StyledSaveButton>
        </StyledEditForm>
      ) : (
        <StyledListItem>
          <StyledTopic>{text}</StyledTopic>
          <StyledAuthor>{name}</StyledAuthor>
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
    "a a"
    "b b";
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
  color: #7a6263;
`;

export const StyledDeleteButton = styled.button`
  position: relative;
  margin: 10px;
  border: none;
  background-color: transparent;
  font-size: 1.2em;
  cursor: pointer;
`;

export const StyledEditButton = styled.button`
  position: relative;
  margin: 10px;
  border: none;
  background-color: transparent;
  font-size: 1.2em;
  cursor: pointer;
`;

export const StyledEditForm = styled.form`
  position: relative;
  margin-left: 30px;
  display: flex;
  gap: 10px;
`;

export const StyledEditArea = styled.textarea`
  font-family: Arial, Helvetica, sans-serif;
`;

export const StyledSaveButton = styled.button`
  border: none;
  background: orangered;
  color: white;
  border-radius: 5px;
`;
