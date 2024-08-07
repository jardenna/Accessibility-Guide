import { FC, ReactNode } from 'react';
import { BtnVariant, SizeVariant } from '../types/enums';
import { CommonText } from '../types/lang';
import TriggerDialog from './dialog/TriggerDialog';

interface BottomLinksProps {
  dialogHeaderText: string;
  picture: ReactNode;
  textVersionContent: ReactNode;
}

const BottomLinks: FC<BottomLinksProps> = ({
  dialogHeaderText,
  textVersionContent,
  picture,
}) => (
  <div className="bottom-links">
    <TriggerDialog
      dialogHeaderText={dialogHeaderText}
      openDialogBtnLabel="View text version"
      openDialogBtnVariant={BtnVariant.Secondary}
      dialogVariant={SizeVariant.Md}
      secondaryActionText={CommonText.Close}
    >
      {textVersionContent}
    </TriggerDialog>
    <TriggerDialog
      dialogHeaderText={dialogHeaderText}
      openDialogBtnLabel="View large image"
      openDialogBtnVariant={BtnVariant.Secondary}
      dialogVariant={SizeVariant.Md}
      secondaryActionText={CommonText.Close}
      showCloseIcon
    >
      {picture}
    </TriggerDialog>
  </div>
);

export default BottomLinks;
