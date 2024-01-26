import './index.css'

import {Component} from 'react'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Do Meditation for 20 mins',
  },
  {
    id: 2,
    title: 'Watch NxtWave Classes and build reactjs projects',
  },
  {
    id: 3,
    title: 'Practice Interview preparation for 20mins',
  },
  {
    id: 4,
    title: 'Post Learning Updates on LinkedIn',
  },
  {
    id: 5,
    title: 'Upload a video on Impact of AI on youtube',
  },
  {
    id: 6,
    title: 'Check email for updates',
  },
  {
    id: 7,
    title: 'Finish NxtWave pending classes',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todosList: initialTodosList, inputTodo: ''}

  userInputTodo = event => {
    this.setState({inputTodo: event.target.value})
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.addTodo()
    }
  }

  addTodo = () => {
    const {todosList, inputTodo} = this.state
    if (inputTodo.trim() !== '') {
      // Create new todo
      const newTodo = {
        id: todosList.length + 1,
        title: inputTodo,
      }

      // Update state to include the new todo
      this.setState({
        todosList: [...todosList, newTodo], // Appending the new todo to the existing list
      })
    }
  }

  deleteUser = id => {
    const {todosList, inputTodo} = this.state
    const filteredTodosList = todosList.filter(each => each.id !== id)
    this.setState({todosList: filteredTodosList})
  }

  render() {
    const {todosList, inputTodo} = this.state

    return (
      <div className="simple-todos-app">
        <div className="content-container">
          <h1 className="main-heading">Simple Todos</h1>
          <ul className="add-todo-container">
            <input
              type="text"
              className="user-input-todo"
              placeholder="Add Todo"
              onChange={this.userInputTodo}
              onKeyPress={this.handleKeyPress} // Handle Enter key press
            />
            <button className="add-tn" type="button" onClick={this.addTodo}>
              Add
            </button>
          </ul>
          <ul>
            {todosList.map(eachTodo => (
              <TodoItem
                todoDetails={eachTodo}
                key={eachTodo.id}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
