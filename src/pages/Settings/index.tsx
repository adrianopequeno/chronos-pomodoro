import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';

export const Settings = () => {
  return (
    <MainTemplate>
      <Container>
        <Heading>Configuraçõe</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as configurações para temppo de foco, descanso curto e
          descando longo
        </p>
      </Container>

      <Container>
        <form action="" className={styles.form}>
          <div className={styles.formRow}>
            <DefaultInput id="workTime" labelText="Foco" />
          </div>
          <div className={styles.formRow}>
            <DefaultInput id="shortBreakTime" labelText="Descanso curto" />
          </div>
          <div className={styles.formRow}>
            <DefaultInput id="longBreakTime" labelText="Descaso longo" />
          </div>
          <div className={styles.formRow}>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salvar configuraçõe"
              title="Salvar configurações"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
};
