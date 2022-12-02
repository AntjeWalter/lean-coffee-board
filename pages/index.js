import Header from "../components/Header";
import Card from "../components/Card";
import Form from "../components/Form";
import styled from "styled-components";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function HomePage() {
  const [cards, setCards] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newTopic = event.target.topic.value;
    const newAuthor = event.target.author.value;
    setCards([...cards, { id: nanoid(), topic: newTopic, author: newAuthor }]);
    event.target.reset();
  }

  function handleDelete(id) {
    const updatedList = cards.filter((card) => {
      return card.id !== id;
    });
    setCards([...updatedList]);
    console.log(updatedList);
  }

  function onUpdateCard(editedCard) {
    setCards(
      cards.map((card) => {
        if (card.id === editedCard.id) {
          return editedCard;
        } else {
          return card;
        }
      })
    );
  }

  return (
    <div>
      <Header />
      <StyledListContainer>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            topic={card.topic}
            author={card.author}
            onDelete={handleDelete}
            onUpdateCard={onUpdateCard}
          />
        ))}
      </StyledListContainer>

      <Form onSubmit={handleSubmit} cards={cards} />
    </div>
  );
}

export const StyledListContainer = styled.ul`
  padding-inline-start: 0px;
  padding-left: 0px;
`;
