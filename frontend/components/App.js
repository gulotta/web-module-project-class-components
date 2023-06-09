import React from 'react'
import TodoList from './TodoList'
import Form from './Form'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286, 
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }

      ]
    }
  }

  handleAdd = (task) => {
    // 1. setState
    // 2. change todos
    // 3. make a copy of todos
    // 4. add a new todo to the end.

    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]

    });
  }

  handleClear = () => {
    // 1. setState
    // 2. loop through all todos
    // 3. remove all todos that have completed === true
    // 4. save filtered todos to state

    this.setState({
      ...this.state, 
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false );
      })
    
  });
  }

  handleToggle = (clickedId) => {
    // 1. setState
    // 2. change todos
    // 3. find todo that we clicked on
    // 4. flip value of completed for that todo (false to true)
    // 5. keep all other todos the same


    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })

  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos</h1>
        < TodoList handleToggle={this.handleToggle} todos={todos}/>
        < Form handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear</button>

      </div>
    );
  }
}
