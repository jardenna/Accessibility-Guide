import { useEffect, useRef } from 'react';
import { PrimaryActionBtnProps } from '../components/dialog/Dialog';
import { KeyCode } from '../types/enums';
import useKeyPress from './useKeyPress';

const useDialog = (primaryActionBtn?: PrimaryActionBtnProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (dialogRef.current) {
      const focusableElements = dialogRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstFocusableElement = focusableElements[0] as HTMLElement | null;
      const lastFocusableElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement | null;

      const handleTabKeyPress = (event: KeyboardEvent) => {
        if (event.key === KeyCode.Tab) {
          if (
            event.shiftKey &&
            document.activeElement === firstFocusableElement
          ) {
            event.preventDefault();
            lastFocusableElement?.focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === lastFocusableElement
          ) {
            event.preventDefault();
            firstFocusableElement?.focus();
          }
        }
      };

      dialogRef.current.addEventListener('keydown', handleTabKeyPress);

      return () => {
        dialogRef.current?.removeEventListener('keydown', handleTabKeyPress);
      };
    }
  }, [dialogRef.current]);

  const handleToggleDialog = () => {
    if (!dialogRef.current) {
      return;
    }

    if (dialogRef.current.hasAttribute('open')) {
      dialogRef.current.close();
    } else {
      dialogRef.current.showModal();
    }
  };

  const handleCloseModal = () => {
    dialogRef.current?.close();
  };
  useKeyPress(() => handleCloseModal(), [KeyCode.Esc]);

  const handleCallBack = () => {
    handleCloseModal();
    if (primaryActionBtn) {
      primaryActionBtn.onClick();
    }
  };

  return { handleToggleDialog, handleCallBack, dialogRef };
};

export default useDialog;
