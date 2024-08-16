import { FC, ReactNode } from 'react';
import { BtnVariant, SizeVariant } from '../types/enums';
import { CommonText } from '../types/lang';
import TriggerDialog from './dialog/TriggerDialog';

interface BottomLinksProps {
  dialogHeaderText: string;
  picture: ReactNode;
  textVersionContent: ReactNode;
  dialogSize?: SizeVariant;
}

const BottomLinks: FC<BottomLinksProps> = ({
  dialogHeaderText,
  textVersionContent,
  picture,
  dialogSize = SizeVariant.Lg,
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
      dialogSize={SizeVariant.Lg}
      secondaryActionText={CommonText.Close}
      showCloseIcon
    >
      {picture}
    </TriggerDialog>
  </div>
);

export default BottomLinks;
