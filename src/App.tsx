import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Home } from "./pages/Home";

import "./styles/theme.css";
import "./styles/global.css";
import { MessageContainer } from "./components/MessagesContainer";

export const App = () => {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <Home />;
      </MessageContainer>
    </TaskContextProvider>
  );
};
