import { MainTemplate } from "../../templates/MainTemplate";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { Container } from "../../components/Container";

export const Home = () => {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
};
