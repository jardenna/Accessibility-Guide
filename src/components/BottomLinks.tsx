import { FC, ReactNode } from 'react';
import { BtnVariant, SizeVariant } from '../types/enums';
import { CommonText } from '../types/lang';
import TriggerDialog from './dialog/TriggerDialog';
import Picture, { PictureProps } from './Picture';

interface BottomLinksProps extends PictureProps {
  dialogHeaderText: string;
  textVersionContent: ReactNode;
}

const BottomLinks: FC<BottomLinksProps> = ({
  altText,
  dialogHeaderText,
  textVersionContent,
  mobileImageUrl,
  mainImageUrl,
  mainImageUrlDark,
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
      dialogVariant={SizeVariant.Lg}
      secondaryActionText={CommonText.Close}
      showCloseIcon
    >
      <Picture
        altText={altText}
        mainImageUrl={mainImageUrl}
        mainImageUrlDark={mainImageUrlDark}
        mobileImageUrl={mobileImageUrl}
      />
    </TriggerDialog>
  </div>
);

export default BottomLinks;
