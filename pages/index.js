import Header from "../components/Header";
import Card from "../components/Card";
import Form from "../components/Form";
import { useState } from "react";

export default function HomePage() {
  const [topic, setTopic] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTopic(event.target.topic.value);
    setAuthor(event.target.author.value);
    event.target.reset();
  }

  return (
    <div>
      <Header />
      <Card topic={topic} author={author} />
      <Form onSubmit={handleSubmit} topic={topic} author={author} />
    </div>
  );
}
