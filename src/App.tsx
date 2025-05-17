import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Home } from "./pages/Home";

import "./styles/theme.css";
import "./styles/global.css";
import { MessageContainer } from "./components/MessagesContainer";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound } from "./pages/NotFound";
import { AboutPomodoro } from "./pages/AboutPomodoro";

export const App = () => {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-pomodoro" element={<AboutPomodoro />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MessageContainer>
    </TaskContextProvider>
  );
};
