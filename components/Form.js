import styled from "styled-components";
import Image from "next/image";
import { nanoid } from "nanoid";

export default function Form({ onCreateCard }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const newText = event.target.text.value;
    const newName = event.target.name.value;
    const newCard = { id: nanoid(), text: newText, name: newName };
    onCreateCard(newCard);

    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCard),
      }
    );

    event.target.reset();
  }

  return (
    <>
      <StyledFormContainer onSubmit={handleSubmit}>
        <StyledTextArea
          placeholder="Type your thoughts..."
          name="text"
          required
        ></StyledTextArea>
        <StyledTextArea
          placeholder="Your name..."
          name="name"
          required
        ></StyledTextArea>
        <StyledSubmitButton type="submit">
          <Image
            src="/../public/plusicon.png"
            width={50}
            height={50}
            alt="Plus Icon"
          />
        </StyledSubmitButton>
      </StyledFormContainer>
    </>
  );
}

export const StyledFormContainer = styled.form`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  bottom: 0;
  margin: 10px 10px;
  gap: 10px;
`;

export const StyledTextArea = styled.textarea`
  width: 300px;
  font-family: Arial, Helvetica, sans-serif;
  flex-grow: 1;
  background-color: #c6dea6;
`;

export const StyledSubmitButton = styled.button`
  background-color: transparent;
  border: none;
  flex-grow: 1;
`;
