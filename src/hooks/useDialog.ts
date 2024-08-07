import { useEffect, useRef } from 'react';
import { PrimaryActionBtnProps } from '../components/dialog/Dialog';
import { KeyCode } from '../types/enums';
import useKeyPress from './useKeyPress';

const useDialog = (primaryActionBtn?: PrimaryActionBtnProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: any) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e: any) => {
    touchEndX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchEndX - touchStartX > 100) {
      // Adjust the threshold value as needed
      handleCloseModal();
    }
  };

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

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.addEventListener('touchstart', handleTouchStart);
      dialog.addEventListener('touchmove', handleTouchMove);
      dialog.addEventListener('touchend', handleTouchEnd);
    }

    // Clean up event listeners on component unmount
    return () => {
      if (dialog) {
        dialog.removeEventListener('touchstart', handleTouchStart);
        dialog.removeEventListener('touchmove', handleTouchMove);
        dialog.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  return { handleToggleDialog, handleCallBack, dialogRef };
};

export default useDialog;
