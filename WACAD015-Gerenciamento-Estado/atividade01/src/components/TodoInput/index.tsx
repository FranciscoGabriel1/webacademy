import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTaskInput } from "../../redux/todoSlice";

const TodoInput: React.FC = () => {
  const dispatch = useDispatch();
  const taskInput = useSelector((state: RootState) => state.todo.taskInput);

  return (
    <div className="input-group mb-3" style={{ width: 350 }}>
      <Form.Control
        type="text"
        className="form-control"
        placeholder="Informar atividade..."
        value={taskInput}
        onChange={(e) => dispatch(setTaskInput(e.target.value))}
        required
      />
    </div>
  );
};

export default TodoInput;
