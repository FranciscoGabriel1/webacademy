import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { gameReducer } from "./redux/reducers";
import App from "./App";

const store = createStore(gameReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
