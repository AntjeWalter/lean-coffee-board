export default function Card({ topic, author }) {
  return (
    <>
      <li>
        <p>{topic}</p>
        <p>{author}</p>
      </li>
    </>
  );
}
