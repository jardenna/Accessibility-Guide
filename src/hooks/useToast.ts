import { useCallback, useState } from 'react';
import variables from '../scss/variables.module.scss';

import { ToastType } from '../types/enums';

export interface ToastItems {
  content: string;
  id: number;
  closing?: boolean;
  type?: ToastType;
}

const useToast = (onCallback?: () => void) => {
  const [toasts, setToasts] = useState<ToastItems[]>([]);

  const handleShowToast = (type: ToastType, content: string) => {
    if (onCallback) {
      onCallback();
    }

    const createdToast = { id: Date.now(), type, content };

    setToasts((currentToasts) => [...currentToasts, createdToast]);

    // to be consistant with the animation time
    const timeoutDuration = parseFloat(variables.timeDuration) * 10000;
    setTimeout(() => {
      handleDismissToast(createdToast.id);
    }, timeoutDuration);
  };

  const handleDismissToast = useCallback(
    (id: number) => {
      setToasts((currentToasts) =>
        currentToasts.map((toast) =>
          toast.id === id ? { ...toast, closing: true } : toast,
        ),
      );

      setTimeout(() => {
        setToasts((currentToasts) =>
          currentToasts.filter((toast) => toast.id !== id),
        );
      }, 200);
    },
    [toasts, setToasts],
  );

  const sortedToasts = toasts.sort((a, b) => -(a.id - b.id));
  return { handleShowToast, handleDismissToast, sortedToasts };
};

export default useToast;
