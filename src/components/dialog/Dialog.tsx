import { FC, MutableRefObject, ReactNode } from 'react';
import { SizeVariant } from '../../types/enums';
import { CommonText } from '../../types/lang';
import Portal from '../Portal';
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
  onCallback?: () => void;
  onToggleDialog?: () => void;
  primaryActionBtn?: PrimaryActionBtnProps;
  secondaryActionText?: CommonText.Close | CommonText.Cancel;
  showCloseIcon?: boolean;
  variant?: SizeVariant;
}

const Dialog: FC<DialogProps> = ({
  dialogRef,
  children,
  onToggleDialog,
  dialogHeaderText: dialogHeadertext,
  showCloseIcon,
  secondaryActionText = CommonText.Cancel,
  primaryActionBtn,
  variant = 'sm',
  onCallback,
  className = '',
}) => (
  <Portal portalId="dialog">
    <section
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      className=""
    >
      <dialog
        ref={dialogRef}
        className={`dialog dialog-${variant} ${className}`}
        id="dialog-description"
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
  </Portal>
);

export default Dialog;
