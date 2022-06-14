import React from 'react';
import { useTodos } from '../Hooks/useTodos';
import './TodoForm.css';

function TodoForm({ setOpenModal, addTodo }) {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const onChange = (event) => {
    if (event.target.value === '') return
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
    console.log('close modal');
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue === '') return console.log('empty text');
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla oara el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
