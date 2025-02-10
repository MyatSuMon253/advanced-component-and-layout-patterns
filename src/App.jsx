import LargeBookListItem from "./components/layout_components/books/LargeBookListItem";
import Modal from "./components/layout_components/Modal";
import { authors } from "./data/authors";
import { books } from "./data/books";

const App = () => {
  console.log(authors);
  return (
    <>
      <Modal>
        <LargeBookListItem book={books[1]} />
      </Modal>
    </>
  );
};

export default App;
