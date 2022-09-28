import Card, { CardVariant } from "./components/Card"
import EventsExample from "./components/EventsExample";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";

const App = () => {

  return (
    <BrowserRouter>
      <div style={{border: '1px solid pink', display: 'flex', width: '300px', justifyContent: 'space-around', flexWrap: 'wrap', margin: "5px 0", padding: "2px 0"}}>
        <Link to={'/users'}>Users</Link>
        <Link to={'/todos'}>Todos</Link>
        <Link to={'/card'}>Card</Link>
        <Link to={'/drag_events'}>DragEvents</Link>
        <Link to={'/sandbox'}>Sandbox</Link>
      </div>
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