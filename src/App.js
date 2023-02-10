import Navbar from "./Component/Navbar";
import TodoCardItem from "./Component/TodoCardItem";
import TodoContextProvider from "./Context/TodoContext";

function App() {
  return (
    <>
      <TodoContextProvider>
        <Navbar />
        <TodoCardItem />
      </TodoContextProvider>
    </>
  );
}

export default App;
