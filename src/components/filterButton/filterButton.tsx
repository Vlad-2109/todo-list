import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { filterTodos, markAllCompleted } from '../../redux/todo/todoSlice';

export const FilterButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const currentFilter = useAppSelector((state) => state.todoReducer.filter);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterTodos(e.target.value));
  };

  const handleMarkAllCompleted = () => {
    dispatch(markAllCompleted());
  };

  return (
    <div className="flex space-x-4 items-center">
      <select
        value={currentFilter}
        onChange={(e) => handleFilter(e)}
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
      >
        <option value="ALL">All</option>
        <option value="COMPLETED">Completed</option>
        <option value="NOT COMPLETED">Not Completed</option>
      </select>
      <button
        onClick={() => handleMarkAllCompleted()}
        className="text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded"
      >
        Mark All Completed
      </button>
    </div>
  );
};
