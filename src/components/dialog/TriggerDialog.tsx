import { FC } from 'react';
import useDialog from '../../hooks/useDialog';
import { BtnVariant, SizeVariant } from '../../types/enums';
import Button from '../Button';
import Dialog, { DialogProps } from './Dialog';

type DialogType = Omit<DialogProps, 'onToggleDialog' | 'dialogRef'>;

interface TriggerDialogProps extends DialogType {
  openDialogBtnLabel: string;
  dialogSize?: SizeVariant;
  openDialogBtnVariant?: BtnVariant;
}

const TriggerDialog: FC<TriggerDialogProps> = ({
  children,
  dialogHeaderText,
  openDialogBtnLabel,
  openDialogBtnVariant,
  showCloseIcon,
  secondaryActionText,
  primaryActionBtn,
  className,
  dialogSize,
}) => {
  const { handleToggleDialog, handleCallBack, dialogRef } =
    useDialog(primaryActionBtn);

  return (
    <>
      <Button variant={openDialogBtnVariant} onClick={handleToggleDialog}>
        {openDialogBtnLabel}
      </Button>
      <Dialog
        onToggleDialog={handleToggleDialog}
        dialogRef={dialogRef}
        className={className}
        dialogHeaderText={dialogHeaderText}
        showCloseIcon={showCloseIcon}
        secondaryActionText={secondaryActionText}
        primaryActionBtn={primaryActionBtn}
        onCallback={handleCallBack}
        variant={dialogSize}
      >
        {children}
      </Dialog>
    </>
  );
};

export default TriggerDialog;
