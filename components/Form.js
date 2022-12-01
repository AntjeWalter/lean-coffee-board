import { useState } from "react";

export default function Form({ onSubmit }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <textarea name="topic"></textarea>
        <textarea name="author"></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
