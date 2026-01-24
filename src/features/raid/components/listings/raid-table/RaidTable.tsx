import { formatMilliseconds } from '@gatewatcher/bistoury/utils-date';
import { Table } from '@gatewatcher/skin';

import { RaidTypeChip } from '@/features/raid/components/chips/RaidTypeChip';
import { useRaidList } from '@/features/raid/hooks/useRaidList';
import { useLocales } from '@/hooks/useLocales';

export const RaidTable = () => {
  const { data } = useRaidList();
  const { t } = useLocales('raid', { keyPrefix: 'listings.raidTable' });

  const handleRowClick = () => {
    console.log('click');
  };

  return (
    <Table
      columns={[
        { key: 'id', header: t('header.id') },
        {
          key: 'type',
          header: t('header.type'),
          render: row => (
            <Table.Cell>
              <RaidTypeChip type={row.type} />
            </Table.Cell>
          ),
        },
        {
          key: 'cooldown',
          header: t('header.cooldown'),
          render: row => formatMilliseconds(row.cooldown),
        },
        {
          key: 'nodes',
          header: t('header.nodes'),
          render: row => row.nodes.length,
        },
        {
          key: 'entry',
          header: t('header.entry'),
          render: row => row.startId,
        },
      ]}
      data={data}
      onRowClick={handleRowClick}
    />
  );
};
