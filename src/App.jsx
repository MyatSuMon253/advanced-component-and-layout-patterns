import LargeAuthorListItem from "./components/layout_components/authors/LargeAuthorListItem";
import SmallAuthorListItem from "./components/layout_components/authors/SmallAuthorListItem";
import LargeBookListItem from "./components/layout_components/books/LargeBookListItem";
import SmallBookListItem from "./components/layout_components/books/SmallBookListItem";
import NumberedList from "./components/layout_components/lists/NumberedList";
import RegularList from "./components/layout_components/lists/RegularList";
import { authors } from "./data/authors";
import { books } from "./data/books";

const App = () => {
  console.log(authors);
  return (
    <>
      <NumberedList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />

      <NumberedList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallBookListItem}
      />
      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={LargeBookListItem}
      />
    </>
  );
};

export default App;
