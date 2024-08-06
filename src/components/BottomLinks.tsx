import { FC, ReactNode } from 'react';
import variables from '../scss/variables.module.scss';
import { BtnVariant, SizeVariant } from '../types/enums';
import { CommonText } from '../types/lang';
import TriggerDialog from './dialog/TriggerDialog';

interface BottomLinksProps {
  altText: string;
  dialogHeaderText: string;
  mainImageUrl: string;
  mainImageUrlDark: string;
  mobileImageUrl: string;
  textVersionContent: ReactNode;
}

const BottomLinks: FC<BottomLinksProps> = ({
  altText,
  dialogHeaderText,
  textVersionContent,
  mobileImageUrl,
  mainImageUrl,
  mainImageUrlDark,
}) => {
  const { medium } = variables;
  const mediumWidth = `(max-width:${medium})`;
  return (
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
        <picture>
          <source media={mediumWidth} srcSet={mobileImageUrl} />
          <source
            srcSet={mainImageUrlDark}
            media="(prefers-color-scheme: dark)"
          />
          <img src={mainImageUrl} alt={altText} />
        </picture>
      </TriggerDialog>
    </div>
  );
};

export default BottomLinks;
