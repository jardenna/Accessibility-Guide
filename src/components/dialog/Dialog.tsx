import { FC, MutableRefObject, ReactNode } from 'react';
import { SizeVariant } from '../../types/enums';
import { CommonText } from '../../types/lang';
import './_dialog.scss';
import DialogFooter from './DialogFooter';
import DialogHeader from './DialogHeader';

export interface PrimaryActionBtnProps {
  label: string;
  onClick: () => void;
  buttonType?: 'button' | 'submit' | 'reset';
}

export interface DialogProps {
  children: ReactNode;
  dialogHeaderText: string;
  dialogRef: MutableRefObject<HTMLDialogElement | null>;
  className?: string;
  dialogSize?: SizeVariant;
  isAlert?: boolean;
  onCallback?: () => void;
  onToggleDialog?: () => void;
  primaryActionBtn?: PrimaryActionBtnProps;
  secondaryActionText?: CommonText.Close | CommonText.Cancel;
  showCloseIcon?: boolean;
}

const Dialog: FC<DialogProps> = ({
  dialogRef,
  children,
  onToggleDialog,
  dialogHeaderText: dialogHeadertext,
  showCloseIcon,
  secondaryActionText = CommonText.Cancel,
  primaryActionBtn,
  dialogSize = 'sm',
  onCallback,
  className = '',
  isAlert,
}) => (
  <section>
    <dialog
      role={isAlert ? 'alert' : undefined}
      ref={dialogRef}
      className={`dialog dialog-${dialogSize} ${className}`}
    >
      <DialogHeader
        dialogHeadertext={dialogHeadertext}
        onCloseDialog={onToggleDialog}
        showCloseIcon={showCloseIcon}
      />
      {primaryActionBtn?.buttonType !== 'submit' ? (
        <>
          <div className="dialog-body">{children}</div>
          <DialogFooter
            onCallback={onCallback}
            onCloseDialog={onToggleDialog}
            primaryActionBtn={primaryActionBtn}
            secondaryActionText={secondaryActionText}
          />
        </>
      ) : (
        <form method="dialog">
          <div className="dialog-body">{children}</div>
          <DialogFooter
            onCallback={onCallback}
            onCloseDialog={onToggleDialog}
            primaryActionBtn={primaryActionBtn}
            secondaryActionText={secondaryActionText}
          />
        </form>
      )}
    </dialog>
  </section>
);

export default Dialog;
