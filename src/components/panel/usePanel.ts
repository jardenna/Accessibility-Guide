import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const usePanel = () => {
  const location = useLocation();
  const [isPanelHidden, setIsPanelHidden] = useState(true);

  const handleToggleMenuHidden = () => {
    setIsPanelHidden(!isPanelHidden);
  };

  useEffect(() => {
    setIsPanelHidden(true);
  }, [location]);

  return { isPanelHidden, onClick: handleToggleMenuHidden };
};

export default usePanel;
