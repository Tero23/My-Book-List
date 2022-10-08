import React from "react";
import { getAuthorsQuery } from "../queries/queries";
import { useQuery } from "@apollo/client";

const AddAuthors = ({ authorId, setAuthorId }) => {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const authors = data?.authors;
  return (
    <div className="field">
      <label>Author: </label>
      <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
        <option>Select author</option>
        {authors.map((author) => (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddAuthors;
