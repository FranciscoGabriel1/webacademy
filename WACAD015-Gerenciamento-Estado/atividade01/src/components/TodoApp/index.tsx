// src/components/TodoApp.tsx
import React from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addTask, setTaskInput } from "../../redux/todoSlice";
import CustomButton from "../CustomButtom";
import TodoList from "../TodoList";

const TodoApp: React.FC = () => {
  const dispatch = useDispatch();
  const taskInput = useSelector((state: RootState) => state.todo.taskInput);

  const handleAddTask = () => {
    dispatch(addTask());
  };

  return (
    <Container>
      <h1 style={{ paddingLeft: 40 }}>My Todos</h1>
      <div
        className="input-group mb-3"
        style={{ width: 350, display: "flex", paddingLeft: 40 }}
      >
        <Form.Control
          type="text"
          className="form-control"
          placeholder="Informar atividade..."
          value={taskInput}
          onChange={(e) => dispatch(setTaskInput(e.target.value))}
          required
        />

        <CustomButton backgroundColor="#20B2A9" onClick={handleAddTask}>
          Save
        </CustomButton>
      </div>
      <TodoList />
    </Container>
  );
};

export default TodoApp;
