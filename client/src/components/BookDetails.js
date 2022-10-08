import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

const BookDetails = ({ id }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>No Book Selected!</p>;
  const book = data.book;

  return (
    <div id="book-details">
      <h2>{book.name}</h2>
      <p>{book.genre}</p>
      <p>{book.author.name}</p>
      <p>All books by this author: </p>
      <ul>
        {book.author.books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
