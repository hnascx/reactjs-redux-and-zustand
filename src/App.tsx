import { Provider as ReduxProvider } from "react-redux"

import { AddTodo } from "./components/AddTodo"
import { TodoList } from "./components/ToDoList"
import { store } from "./store"

export function App() {
  return (
    <div style={{ backgroundColor: "black", color: "white", height: "100vh" }}>
      <ReduxProvider store={store}>
        <TodoList />
        <AddTodo />
      </ReduxProvider>
    </div>
  )
}
