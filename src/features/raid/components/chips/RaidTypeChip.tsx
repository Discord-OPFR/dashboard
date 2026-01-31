import type { ChipProps } from '@gatewatcher/skin';
import { Chip } from '@gatewatcher/skin';

import type { RaidType } from '@opfr/definitions';

type RaidTypeChipProps = {
  type: RaidType;
};

const RAID_TYPE_COLOR_MAPPING: Record<RaidType, ChipProps['type']> = {
  classic: 'info',
  special: 'blue',
};

export const RaidTypeChip = ({ type }: RaidTypeChipProps) => {
  return <Chip type={RAID_TYPE_COLOR_MAPPING[type]}>{type}</Chip>;
};
