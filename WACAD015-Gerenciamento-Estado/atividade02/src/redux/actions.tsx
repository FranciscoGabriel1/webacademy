export const SET_SQUARES = "SET_SQUARES";

interface SetSquaresAction {
  type: typeof SET_SQUARES;
  squares: (string | null)[];
}

export type GameActionTypes = SetSquaresAction;

export const setSquares = (squares: (string | null)[]): SetSquaresAction => ({
  type: SET_SQUARES,
  squares,
});
