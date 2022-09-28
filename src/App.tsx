import Card, { CardVariant } from "./components/Card"
import EventsExample from "./components/EventsExample";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/drag_events'} element={<EventsExample />}/>
        <Route path={'/users'} element={<UserPage />}/>
        <Route path={'/todos'} element={<TodosPage />}/>
          
        <Route path={'/card'} element={
          <Card onClick={(num) => console.log('Andrey, andrushka, pososi moyu pisushku', num)} variant={CardVariant.primary} width="200px" height="200px">
            <button>button</button>
          </Card>
        }/>
        <Route path={'/sandbox'} element={
          <div>
            <Card onClick={(num) => console.log('Andrey, andrushka, pososi moyu pisushku', num)} variant={CardVariant.primary} width="200px" height="200px">
              <button>button</button>
            </Card>
            <EventsExample />
            <UserPage />
            <TodosPage />
          </div>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;