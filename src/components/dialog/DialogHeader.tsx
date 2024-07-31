import { FC } from 'react';
import { CommonText } from '../../types/lang';
import BtnClose from '../BtnClose';

interface DialogHeaderProps {
  dialogHeadertext: string;
  onCloseDialog?: () => void;
  showCloseIcon?: boolean;
}

const DialogHeader: FC<DialogHeaderProps> = ({
  dialogHeadertext,
  onCloseDialog,
  showCloseIcon,
}) => (
  <header className="dialog-header" aria-label="Dialog">
    <h2 className="dialog-title" id="dialog-title">
      {dialogHeadertext}
    </h2>
    {showCloseIcon && (
      <BtnClose onClick={onCloseDialog} ariaLabel={CommonText.CloseDialog} />
    )}
  </header>
);

export default DialogHeader;
