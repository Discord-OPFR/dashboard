import type { RaidStructure } from '@/modules/raid/domain/raid.models';

export interface RaidGateway {
  readDetail(id: string): Promise<RaidStructure>;
  readList(): Promise<RaidStructure[]>;
}
