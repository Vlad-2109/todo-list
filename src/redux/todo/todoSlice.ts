import { createSlice } from '@reduxjs/toolkit';
import { TodosState } from '../../types/reduxTypes';

// Define the initial state using that type
const initialState: TodosState = {
  todos: [],
  filter: 'ALL',
  searchTerm: '',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (action.payload.length <= 70) {
        state.todos = [
          ...state.todos,
          { text: action.payload, completed: false },
        ];
      } else {
        alert('Your todo has more than limit of symbols');
      }
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo, index) =>
        index === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    removeTodo: (state, action) => {
      const filteredTodos = state.todos.filter((_todo, index) => {
        return index !== action.payload;
      });
      state.todos = filteredTodos;
    },
    markCompletedTodo: (state, action) => {
      state.todos = state.todos.map((todo, index) =>
        index === action.payload ? { ...todo, completed: true } : todo
      );
    },
    markUncompletedTodo: (state, action) => {
      state.todos = state.todos.map((todo, index) =>
        index === action.payload ? { ...todo, completed: false } : todo
      );
    },
    filterTodos: (state, action) => {
      state.filter = action.payload;
    },
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    markAllCompleted: (state) => {
      state.todos = state.todos.map((todo) => ({ ...todo, completed: true }));
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  markCompletedTodo,
  markUncompletedTodo,
  filterTodos,
  updateSearchTerm,
  markAllCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
