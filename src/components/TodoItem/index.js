// Write your code here
import './index.css'

import {Component} from 'react'

class TodoItem extends Component {
  onDelete = () => {
    const {todoDetails, deleteUser} = this.props
    const {title, id} = todoDetails
    deleteUser(id)
  }

  render() {
    const {todoDetails, deleteUser} = this.props
    const {title, id} = todoDetails
    return (
      <li className="todo-item-card">
        <li className="todo-item">
          <p className="title">{title}</p>
          <button className="delete-btn" type="button" onClick={this.onDelete}>
            Delete
          </button>
        </li>
      </li>
    )
  }
}

export default TodoItem
