import { toast } from 'react-toastify';
import { Dialog } from '../components/Dialog';

export const showMessage = {
  success: (msg: string) => toast.success(msg),
  error: (msg: string) => toast.error(msg),
  warn: (msg: string) => toast.warn(msg),
  warning: (msg: string) => toast.warning(msg),
  info: (msg: string) => toast.info(msg),
  dismiss: () => toast.dismiss(),
  confirm: (data: string, onClosing: (confirmation: boolean) => void) =>
    toast(Dialog, {
      data,
      autoClose: false, // não fecha sozinho e some a barra de progresso
      closeOnClick: false, // não fecha ao clicar no toast
      closeButton: false, // mostra o botão de fechar | pode passar um componente
      draggable: false, // não pode arrastar. ao arrastar fecha o toast
      onClose: (confirmation) => {
        if (confirmation) return onClosing(true);
        return onClosing(false);
      },
    }),
};
