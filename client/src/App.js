import BookList from "./components/BookList";
import { useQuery, gql } from "@apollo/client";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div id="main">
      <h1>My Book List</h1>
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
