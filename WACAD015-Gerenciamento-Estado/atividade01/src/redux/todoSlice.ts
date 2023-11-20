// src/redux/todoSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  name: string;
  completed: boolean;
  completedAt?: string; // Nova propriedade para armazenar a data de conclusão
}

interface TodoState {
  taskInput: string;
  todoList: Task[];
}

const initialState: TodoState = {
  taskInput: "",
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTaskInput: (state, action: PayloadAction<string>) => {
      state.taskInput = action.payload;
    },
    addTask: (state) => {
      if (state.taskInput.trim() !== "") {
        const newTask: Task = { name: state.taskInput, completed: false };
        state.todoList.push(newTask);
        state.taskInput = "";
      }
    },
    toggleTaskCompletion: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const task = state.todoList[index];

      // Adiciona ou remove a data de conclusão
      task.completedAt = task.completed
        ? undefined
        : new Date().toLocaleString();

      state.todoList = state.todoList.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      );
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.todoList.splice(action.payload, 1);
    },
  },
});

export const { setTaskInput, addTask, toggleTaskCompletion, deleteTask } =
  todoSlice.actions;

export default todoSlice.reducer;
