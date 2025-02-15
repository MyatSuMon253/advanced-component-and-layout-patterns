import { BookInfo } from "./components/custom_hooks/book-info";
import UserInfo from "./components/higher_order_components/user-info";

const App = () => {
  return (
    <>
      <UserInfo userId={1} />
      <BookInfo bookId={2} />
    </>
  );
};

export default App;
