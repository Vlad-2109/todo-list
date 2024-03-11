import { useAppSelector } from '../../redux/store/hooks';
import { TodoItem } from '../todoItem/todoItem';

export const TodoList: React.FC = () => {
  const filteredTodos = useAppSelector((state) => {
    const todos = state.todoReducer.todos;
    const filter = state.todoReducer.filter;
    const searchTerm = state.todoReducer.searchTerm;

    return todos.filter((todo) => {
      const matchsFilter =
        (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'NOT COMPLETED' && !todo.completed) ||
        filter === 'ALL';

      const matchsSearch = todo.text
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchsFilter && matchsSearch;
    });
  });

  const allTodos = useAppSelector((state) => {
    const todos = state.todoReducer.todos;
    let countOfCompletedTodos: number = 0;
    let countOfNotCompletedTodos: number = 0;
    for (const todo of todos) {
      if (todo.completed) {
        countOfCompletedTodos++;
      } else if (!todo.completed) {
        countOfNotCompletedTodos++;
      }
    }
    return { countOfCompletedTodos, countOfNotCompletedTodos };
  });

  return (
    <div>
      <ul>
        {allTodos.countOfCompletedTodos === 0 &&
        allTodos.countOfNotCompletedTodos === 0 ? (
          <li className="my-2 text-sm italic">All Your Note Here ...</li>
        ) : (
          <li className="my-2 text-sm italic">
            You have {allTodos.countOfCompletedTodos} completed and{' '}
            {allTodos.countOfNotCompletedTodos} not completed todos
          </li>
        )}
        {filteredTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))}
      </ul>
    </div>
  );
};
