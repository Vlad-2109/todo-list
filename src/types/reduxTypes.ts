export interface Todo {
  text: string;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[];
  filter: 'ALL' | 'COMPLETED' | 'NOT COMPLETED';
  searchTerm: string;
}
