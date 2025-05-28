import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';

export const Settings = () => {
  const { state } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakInputRef = useRef<HTMLInputElement>(null);
  const longBreakInputRef = useRef<HTMLInputElement>(null);

  const handleSubmitSettings = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showMessage.dismiss();
    const formErrors = [];

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakInputRef.current?.value);
    const longBreakTime = Number(longBreakInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Digite apenas números em TODOS os campos');
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push('O tempo de foco deve ser entre 1 e 99 minutos');
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push('O tempo descanso curto deve ser entre 1 e 30 minutos');
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push('O tempo descanso longo deve ser entre 1 e 60 minutos');
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showMessage.error(error);
      });
      return;
    }
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
              type="number"
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id="shortBreakTime"
              labelText="Descanso curto"
              ref={shortBreakInputRef}
              defaultValue={state.config.shortBreakTime}
              type="number"
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id="longBreakTime"
              labelText="Descaso longo"
              ref={longBreakInputRef}
              defaultValue={state.config.longBreakTime}
              type="number"
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
