import { useState } from 'react';
import { BsPlus, BsSearch } from 'react-icons/bs';
import { useAppDispatch } from '../../redux/store/hooks';
import { addTodo, updateSearchTerm } from '../../redux/todo/todoSlice';
import { FilterButton } from '../filterButton/filterButton';
import { TodoList } from '../todoList/todoList';

export const Todo: React.FC = () => {
  const dispatch = useAppDispatch();

  const [newTodoText, setNewTodoText] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleAddToDoText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
  };
  const handleAddToDo = () => {
    if (newTodoText.trim() !== '' && newTodoText.length <=70) {
      const text = newTodoText.trim();
      dispatch(addTodo(text));
      setNewTodoText('');
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    dispatch(updateSearchTerm(e.target.value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        PERSONAL TODO APPer
      </h2>
      <div className="flex items-center mb-4">
        <input
          value={newTodoText}
          onChange={(e) => handleAddToDoText(e)}
          type="text"
          name="text"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={() => handleAddToDo()}
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          <BsPlus />
        </button>
      </div>
      {newTodoText.length > 70 && (
        <span className="text-red-500">So long todo...</span>
      )}
      <div className="flex items-center justify-between">
        <FilterButton />
        <div className="flex items-center mb-4">
          <input
            value={searchTerm}
            onChange={(e) => handleSearchChange(e)}
            type="text"
            name="text"
            id="addTodoInput"
            placeholder="Search"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button disabled className="ml-4 p-2 bg-blue-500 text-white rounded">
            <BsSearch />
          </button>
        </div>
      </div>
      <TodoList />
    </div>
  );
};
