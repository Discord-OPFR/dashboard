import resourcesStructure from '../../../../raids/resources/structure.json';
import trainingStructure from '../../../../raids/training/structure.json';
import type { RaidGateway } from '../application/raid.gateway';
import type { RaidStructure } from '../domain/raid.models';

export class RaidProvider implements RaidGateway {
  async list(): Promise<RaidStructure[]> {
    return Promise.resolve([
      trainingStructure,
      resourcesStructure,
    ] as RaidStructure[]);
  }

  async detail(id: string): Promise<RaidStructure> {
    if (id === 'training') {
      return Promise.resolve(trainingStructure as RaidStructure);
    }
    return Promise.resolve(resourcesStructure as RaidStructure);
  }
}
