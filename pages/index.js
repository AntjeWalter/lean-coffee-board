import Header from "../components/Header";
import Card from "../components/Card";
import Form from "../components/Form";
import { useState } from "react";
import styled from "styled-components";

export default function HomePage() {
  const [cards, setCards] = useState([
    { topic: "InitalTopic", author: "InitialAuthor" },
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    const newTopic = event.target.topic.value;
    const newAuthor = event.target.author.value;
    setCards([...cards, { topic: newTopic, author: newAuthor }]);
    event.target.reset();
  }

  return (
    <div>
      <Header />
      <ul>
        {cards.map((card) => (
          <Card key={card.topic} topic={card.topic} author={card.author} />
        ))}
      </ul>

      <StyledFormContainer>
        <Form onSubmit={handleSubmit} cards={cards} />
      </StyledFormContainer>
    </div>
  );
}

export const StyledFormContainer = styled.section`
  position: fixed;
  display: flex;
  bottom: 0;
`;

export const StyledForm = styled.section`
  justify-content: space-around;
`;
