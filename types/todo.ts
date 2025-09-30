export interface Todo {
  id: string;
  title: string;
  description?: any;
  completed?: boolean;
  priority: 'low' | 'medium' | 'high';
  category?: string;
  dueDate?: Date;
  status: TodoStatus;
  createdAt?: Date;
  updatedAt?: Date;
  userId?: string;
}

export enum TodoStatus  {
 DONE='done',
 UNDONE='undone',
 DOING='doing'
}

export interface CreateTodoInput {
  title: string;
  description?: string;
  priority?: 'low' | 'medium' | 'high';
  category?: string;
  dueDate?: Date;
}

export interface UpdateTodoInput {
  title?: string;
  description?: string;
  completed?: boolean;
  priority?: 'low' | 'medium' | 'high';
  category?: string;
  dueDate?: Date;
}

export interface TodoFilters {
  completed?: boolean;
  priority?: 'low' | 'medium' | 'high';
  category?: string;
  search?: string;
}
