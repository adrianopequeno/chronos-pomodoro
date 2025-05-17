import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { DefaultButton } from '../../components/DefaultButton';
import { TrashIcon } from 'lucide-react';

import styles from './styles.module.css';

export const History = () => {
  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color="red"
              aria-label="Apagar todo o histórico"
              title="Apagar histórico"
            />
          </span>
        </Heading>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefas</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 20 }).map((_, index) => (
                <tr key={index}>
                  <td>Estudar React</td>
                  <td>2h</td>
                  <td>01/01/2024</td>
                  <td>Concluído</td>
                  <td>Estudo</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
};
