import { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = () => {
  const [id, setId] = useState("");
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const books = data?.books;
  return (
    <div>
      <ul id="book-list">
        {books.map((item) => (
          <li key={item.id} onClick={(e) => setId(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
      <BookDetails id={id} />
    </div>
  );
};

export default BookList;
