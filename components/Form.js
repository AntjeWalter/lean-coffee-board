import styled from "styled-components";
import Image from "next/image";

export default function Form({ onSubmit }) {
  return (
    <>
      <StyledFormContainer onSubmit={onSubmit}>
        <StyledTextArea
          placeholder="Type your thoughts..."
          name="topic"
        ></StyledTextArea>
        <StyledTextArea placeholder="Your name" name="author"></StyledTextArea>
        <button type="submit">
          <Image
            src="/../public/plusicon.png"
            width={50}
            height={50}
            alt="Plus Icon"
          />
        </button>
      </StyledFormContainer>
    </>
  );
}

export const StyledFormContainer = styled.form`
  position: fixed;
  display: flex;
  bottom: 0;
  margin: 10px 10px;
  gap: 10px;
`;

export const StyledTextArea = styled.textarea`
  width: 300px;
`;
