import Header from "../components/Header";
import Card from "../components/Card";
import Form from "../components/Form";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function HomePage() {
  const [cards, setCards] = useState([
    { id: "0", topic: "InitalTopic", author: "InitialAuthor" },
  ]);

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

  return (
    <div>
      <Header />
      <ul>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            topic={card.topic}
            author={card.author}
            onDelete={handleDelete}
          />
        ))}
      </ul>

      <Form onSubmit={handleSubmit} cards={cards} />
    </div>
  );
}
