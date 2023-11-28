import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { calculateWinner } from "../redux/reducers";
import { setSquares } from "../redux/actions";

const Square: React.FC<{ value: string | null; onClick: () => void }> = ({
  value,
  onClick,
}) => (
  <Button
    className="square"
    onClick={onClick}
    style={{
      height: "50%",
      width: "50%",
      margin: 10,
      fontSize: 30,
      backgroundColor: "#292841",
    }}
  >
    {value}
  </Button>
);

const Board: React.FC = () => {
  const dispatch = useDispatch();
  const squares = useSelector((state: RootState) => state);

  const winner = calculateWinner(squares);
  const nextPlayerIsX = squares.filter(Boolean).length % 2 === 0;

  const handleClick = (i: number) => {
    if (squares[i] || winner) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = nextPlayerIsX ? "X" : "O";
    dispatch(setSquares(newSquares));
  };

  const renderSquare = (i: number) => (
    <Square value={squares[i]} onClick={() => handleClick(i)} />
  );
  const handleRestartGame = () => {
    window.location.reload();
  };

  const status = winner
    ? `Venceu --> ${winner} 🥇🎊🎉`
    : `A próxima jogada é: ${nextPlayerIsX ? "X" : "O"}`;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: winner ? "#29CC7A" : "#292841",
          fontSize: "3.6rem",
        }}
      >
        {status}
      </div>
      <Container>
        {[0, 1, 2].map((row) => (
          <Row key={row} className="board-row" style={{ height: 130 }}>
            {[0, 1, 2].map((col) => (
              <Col
                key={col}
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {renderSquare(row * 3 + col)}
              </Col>
            ))}
          </Row>
        ))}

        <div
          style={{
            display: winner ? "flex" : "none",
            justifyContent: "center",
            color: winner ? "#29CC7A" : "#292841",
            fontSize: "3.6rem",
          }}
        >
          <Button
            variant="outline-primary"
            onClick={handleRestartGame}
            style={{ marginTop: "20px" }}
          >
            Reiniciar Jogo
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Board;
