import axios from "axios";
import { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card"
import EventsExample from "./components/EventsExample";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import { ITodo, IUser } from "./types/types"
import { BrowserRouter, Route } from "react-router-dom";
import UserPage from "./components/UserPage";

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect( () => {
    fetchTodos()
  }, [])


  async function fetchTodos() {
    try {
      // generic saing then in response we waiting for Users array
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <EventsExample />
      <Card onClick={(num) => console.log('Andrey, andrushka, pososi moyu pisushku', num)} variant={CardVariant.primary} width="200px" height="200px">
        <button>button</button>
      </Card>
      <UserPage />
      <List items={todos} renderItem={ (todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>} />
    </div>
  )
}

export default App;