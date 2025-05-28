import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export const Settings = () => {
  const { state } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakInputRef = useRef<HTMLInputElement>(null);
  const longBreakInputRef = useRef<HTMLInputElement>(null);

  const handleSubmitSettings = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const workTime = workTimeInputRef.current?.value;
    const shortBreakTime = shortBreakInputRef.current?.value;
    const longBreakTime = longBreakInputRef.current?.value;

    console.log(workTime, shortBreakTime, longBreakTime);
  };

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
        <form onSubmit={handleSubmitSettings} action="" className={styles.form}>
          <div className={styles.formRow}>
            <DefaultInput
              id="workTime"
              labelText="Foco"
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id="shortBreakTime"
              labelText="Descanso curto"
              ref={shortBreakInputRef}
              defaultValue={state.config.shortBreakTime}
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id="longBreakTime"
              labelText="Descaso longo"
              ref={longBreakInputRef}
              defaultValue={state.config.longBreakTime}
            />
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
