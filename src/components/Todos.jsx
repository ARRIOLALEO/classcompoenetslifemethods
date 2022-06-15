import React from "react";
import {v4 as uuid4} from 'uuid'
import "./Todos.css";
class Todos extends React.Component {
  constructor(props) {
    super();
    this.state = { todos: [] };
  }

  componentDidMount() {
    console.log("i was mounted");
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => data.json())
      .then((res) => this.setState({ todos: res }))
      .catch((err) => console.log(err.message));
  }
  componentDidUpdate() {
    console.log("i called and API");
  }

  componentWillUnmount() {
    console.log("im unmounted");
  }

  deleteTodo = (index) => {
    // we need to create a copy of the state
    // we need to remove the element in the index that we have (splice(index,))
    // we need to update the state this.setState
    const copyState = [...this.state.todos];
    copyState.splice(index, 1);
    this.setState({ todos: copyState });
  };
  todoComplete = (index) => {
    // we need to create a copy of my state
    // we need to modify the element in the index that we have
    // we need to update the state with this.setState
    const copyState = [...this.state.todos];
    copyState[index].completed = !copyState[index].completed;
    this.setState({ todos: copyState });
  };
  
  addAnewTodo = () => {};
  render() {
    return (
      <>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li className={todo.completed ? "complete" : null} key={uuid4()}>
                {todo.title}
                <button onClick={() => this.deleteTodo(index)}>delete</button>
                <button onClick={() => this.todoComplete(index)}>done</button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
export default Todos;
