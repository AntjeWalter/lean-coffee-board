import Header from "../components/Header";
import Card from "../components/Card";
import Form from "../components/Form";
import styled from "styled-components";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function HomePage() {
  const [cards, setCards] = useState([]);

  function handleCreateCard(newCard) {
    setCards([...cards, newCard]);
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

      <Form onCreateCard={handleCreateCard} />
    </div>
  );
}

export const StyledListContainer = styled.ul`
  padding-inline-start: 0px;
  padding-left: 0px;
`;
