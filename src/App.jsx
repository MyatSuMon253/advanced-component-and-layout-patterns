import LargeAuthorListItem from "./components/layout_components/authors/LargeAuthorListItem";
import SmallAuthorListItem from "./components/layout_components/authors/SmallAuthorListItem";
import RegularList from "./components/layout_components/lists/RegularList";
import { authors } from "./data/authors";

const App = () => {
  console.log(authors)
  return (
    <>
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
    </>
  );
};

export default App;
