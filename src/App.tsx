import Card, { CardVariant } from "./components/Card"
import EventsExample from "./components/EventsExample";
import { BrowserRouter, Route } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";

const App = () => {

  return (
    <div>
      <EventsExample />
      <Card onClick={(num) => console.log('Andrey, andrushka, pososi moyu pisushku', num)} variant={CardVariant.primary} width="200px" height="200px">
        <button>button</button>
      </Card>
      <UserPage />
      <TodosPage />
    </div>
  )
}

export default App;