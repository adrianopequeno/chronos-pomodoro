import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";

import "./styles/theme.css";
import "./styles/global.css";
import { MessageContainer } from "./components/MessagesContainer";
import { MainRouter } from "./routers/MainRouter";

export const App = () => {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
    </TaskContextProvider>
  );
};
