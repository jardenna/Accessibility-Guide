import { FC, ReactNode } from 'react';
import { BtnVariant, SizeVariant } from '../types/enums';
import { CommonText } from '../types/lang';
import TriggerDialog from './dialog/TriggerDialog';

interface BottomLinksProps {
  dialogHeaderText: string;
  picture: ReactNode;
  textVersionContent: ReactNode;
  dialogSize?: SizeVariant;
  imgDialogSize?: SizeVariant;
}

const BottomLinks: FC<BottomLinksProps> = ({
  dialogHeaderText,
  textVersionContent,
  picture,
  dialogSize = SizeVariant.Md,
  imgDialogSize = SizeVariant.Lg,
}) => (
  <div className="flex-baseline">
    <TriggerDialog
      dialogHeaderText={dialogHeaderText}
      openDialogBtnLabel="View text version"
      openDialogBtnVariant={BtnVariant.Link}
      dialogSize={dialogSize}
      secondaryActionText={CommonText.Close}
    >
      {textVersionContent}
    </TriggerDialog>
    <TriggerDialog
      dialogHeaderText={dialogHeaderText}
      openDialogBtnLabel="View large image"
      openDialogBtnVariant={BtnVariant.Link}
      dialogSize={imgDialogSize}
      secondaryActionText={CommonText.Close}
      showCloseIcon
    >
      {picture}
    </TriggerDialog>
  </div>
);

export default BottomLinks;
