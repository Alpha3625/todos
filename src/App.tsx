import { Title } from "./Components/Title/Title";
import { TodosApp } from "./Components/TodosApp/TodosApp";

function App() {
  
  return (
    <>
      <Title props="todos" />
      <TodosApp />
    </>
  )
}

export default App;