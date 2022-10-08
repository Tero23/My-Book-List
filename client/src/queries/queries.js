import { gql } from "@apollo/client";

const getAuthorsQuery = gql`
  query GetAuthors {
    authors {
      name
      id
    }
  }
`;

const getBooksQuery = gql`
  query GetBooks {
    books {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query ($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
          genre
        }
      }
    }
  }
`;

const ADD_BOOK_MUTATION = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, ADD_BOOK_MUTATION, getBookQuery };
