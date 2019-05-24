import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../redux/selectors';

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
        return <li>{todo.content}</li>
      })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = state => {
  const { byIds, allIds } = state.todos || {};
  const todos = 
    allIds && allIds.length
      ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
      : null;
  return { todos };
}

export default connect(mapStateToProps)(TodoList);