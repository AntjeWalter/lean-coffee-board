import Header from "../components/Header";
import Card from "../components/Card";
import Form from "../components/Form";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function HomePage() {
  const [cards, setCards] = useState([]);

  function handleCreateCard(newCard) {
    setCards([...cards, newCard]);
  }

  async function handleDelete(id) {
    // const updatedList = cards.filter((card) => {
    //   return card.id !== id;
    // });
    // setCards([...updatedList]);
    // console.log(updatedList);

    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions/" + id,
      {
        method: "DELETE",
      }
    );
  }

  async function onUpdateCard(editedCard, id) {
    // setCards(
    //   cards.map((card) => {
    //     if (card.id === editedCard.id) {
    //       return editedCard;
    //     } else {
    //       return card;
    //     }
    //   })
    // );

    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions/" +
        editedCard.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedCard),
      }
    );
  }

  async function getQuestions() {
    const response = await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions"
    );
    const questionList = await response.json();
    setCards(questionList);
  }

  useEffect(() => {
    getQuestions();
    const interval = setInterval(() => {
      getQuestions();
    }, 2000);
  }, []);

  return (
    <div>
      <Header />
      <StyledListContainer>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            text={card.text}
            name={card.name}
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
  position: absolute;
  padding-bottom: 100px;
`;
