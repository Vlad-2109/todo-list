import { useAppDispatch } from '../../redux/store/hooks';
import {
  markCompletedTodo,
  markUncompletedTodo,
  removeTodo,
  toggleTodo,
} from '../../redux/todo/todoSlice';
import { TodoItemProps } from '../../types/componentsTypes';
import {
  FaCheck,
  FaTimes,
  FaToggleOff,
  FaToggleOn,
  FaTrash,
} from 'react-icons/fa';

export const TodoItem: React.FC<TodoItemProps> = ({ todo, index }) => {
  const dispatch = useAppDispatch();

  const handleToggleTodo = (index: number) => {
    dispatch(toggleTodo(index));
  };

  const handleMarkCompletedTodo = (index: number) => {
    dispatch(markCompletedTodo(index));
  };

  const handleMarkUnCompletedTodo = (index: number) => {
    dispatch(markUncompletedTodo(index));
  };

  const handleRemoveTodo = (index: number) => {
      dispatch(removeTodo(index));
  };

  return (
    <li className="flex flex-col sm:flex-row sm:itens-center justify-between border-b-2 py-2 gap-4">
      <div className="flex item-center">
        <span className="mr-4 text-gray-500">{index + 1}</span>
        <span
          onClick={() => handleToggleTodo(index)}
          className={`mr-4 hover:cursor-pointer ${
            todo.completed ? 'line-through text-red-500' : ''
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="space-x-3 ml-8">
        <button
          onClick={() => handleToggleTodo(index)}
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          onClick={() => handleRemoveTodo(index)}
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 py-1 px-1 rounded"
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            onClick={() => handleMarkCompletedTodo(index)}
            className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            onClick={() => handleMarkUnCompletedTodo(index)}
            className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 px-1 rounded"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};
