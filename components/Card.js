export default function Card({ topic, author, onDelete, id }) {
  return (
    <>
      <li>
        <p>{topic}</p>
        <p>{author}</p>
        <button onClick={() => onDelete(id)}>❌</button>
      </li>
    </>
  );
}
