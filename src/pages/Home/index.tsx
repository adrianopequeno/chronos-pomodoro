import { MainTemplate } from "../../templates/MainTemplate";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { Container } from "../../components/Container";
import { TaskStateModel } from "../../models/TaskStateModel";

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export const Home = (props: HomeProps) => {
  return (
    <MainTemplate>
      <Container>
        <CountDown {...props} />
      </Container>

      <Container>
        <MainForm {...props} />
      </Container>
    </MainTemplate>
  );
};
