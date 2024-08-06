import { FC } from 'react';
import { BtnVariant } from '../../types/enums';
import Button from '../Button';
import { PrimaryActionBtnProps } from './Dialog';

interface DialogFooterProps {
  onCallback?: () => void;
  onCloseDialog?: () => void;
  primaryActionBtn?: PrimaryActionBtnProps;
  secondaryActionText?: string;
}

const DialogFooter: FC<DialogFooterProps> = ({
  primaryActionBtn,
  onCallback,
  onCloseDialog,
  secondaryActionText = 'Cancel',
}) => (
  <footer className="dialog-footer" aria-label="Dialog">
    {primaryActionBtn && (
      <Button onClick={onCallback} type={primaryActionBtn.buttonType}>
        {primaryActionBtn.label}
      </Button>
    )}
    <Button onClick={onCloseDialog} variant={BtnVariant.Secondary}>
      {secondaryActionText}
    </Button>
  </footer>
);

export default DialogFooter;
