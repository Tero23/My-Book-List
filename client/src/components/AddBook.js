import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_BOOK_MUTATION, getBooksQuery } from "../queries/queries";
import AddAuthors from "./AddAuthors";

export default function AddBook() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const [addBook, { error }] = useMutation(ADD_BOOK_MUTATION);

  if (error) return <p>Submission error! {error.message}</p>;

  const createBook = (e) => {
    e.preventDefault();
    console.log(name, genre, authorId);
    addBook({
      variables: {
        name: name,
        genre: genre,
        authorId: authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  };

  return (
    <form
      id="add-book"
      onSubmit={(e) => {
        createBook(e);
      }}
    >
      <div className="field">
        <label>Book name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Genre: </label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <AddAuthors authorId={authorId} setAuthorId={setAuthorId} />

      <button>+</button>
    </form>
  );
}
