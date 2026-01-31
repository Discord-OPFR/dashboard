import { Button } from '@gatewatcher/skin';

import { useActionsLocales } from '@/hooks/useLocales';

export const CreateEntityButton = () => {
  const { t } = useActionsLocales();

  const handleClick = () => {
    alert('pranked');
  };

  return (
    <Button endIcon="Add" onClick={handleClick}>
      {t('create')}
    </Button>
  );
};
