import type { RaidStructure } from '@/modules/raid/domain/raid.models';

export interface RaidGateway {
  detail(id: string): Promise<RaidStructure>;
  list(): Promise<RaidStructure[]>;
}
