import "./App.css";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./page/Login/Login";
import SignupPage from "./page/Signup/Signup";
import TodoPage from "./page/Todo/Todo";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/todo" Component={TodoPage} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
