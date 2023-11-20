import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../CustomButtom";
import { RootState } from "../../redux/store";
import { deleteTask, toggleTaskCompletion } from "../../redux/todoSlice";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todo.todoList);

  return (
    <ul className="list-group" style={{ listStyleType: "none" }}>
      {todoList.map((task, index) => (
        <li key={index} className="list-group-item">
          <> {console.log("task.completed: ", task.completed)}</>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: 10,
              alignItems: "center",
              border: "1px solid #e4e4e4",
            }}
          >
            <Col className="d-flex align-items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(toggleTaskCompletion(index))}
              />
            </Col>
            <Col className="d-flex align-items-center">
              {!task.completed ? (
                <p>{task.name}</p>
              ) : (
                <p>
                  <s>{task.name}</s>
                </p>
              )}
            </Col>

            <Col>
              <CustomButton
                backgroundColor="#FE0000"
                onClick={() => dispatch(deleteTask(index))}
              >
                Remove
              </CustomButton>
            </Col>
          </Row>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
