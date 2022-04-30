import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Routertest from "./routes/Routertest"

render(
    <BrowserRouter>
      <Routes>
        <Route path="/React-Movies" element={<App />}>
          <Route path="Routertest" element={<Routertest />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  document.getElementById("root")
);
