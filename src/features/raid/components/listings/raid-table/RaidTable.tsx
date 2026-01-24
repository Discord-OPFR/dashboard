import { formatMilliseconds } from '@gatewatcher/bistoury/utils-date';
import { Table } from '@gatewatcher/skin';
import { useNavigate } from 'react-router-dom';

import { RaidTypeChip } from '@/features/raid/components/chips/RaidTypeChip';
import { useRaidList } from '@/features/raid/hooks/useRaidList';
import { useLocales } from '@/hooks/useLocales';
import type { RaidStructure } from '@/modules/raid/domain/raid.models';

export const RaidTable = () => {
  const { data } = useRaidList();
  const { t } = useLocales('raid', { keyPrefix: 'listings.raidTable' });
  const navigate = useNavigate();

  const handleRowClick = (row: RaidStructure) => {
    navigate(`/raid/${row.id}`);
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
