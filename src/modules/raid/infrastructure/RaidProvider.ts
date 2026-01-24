import mysterious_islandStructure from '../../../../raids/mysterious_island/structure.json';
import resourcesStructure from '../../../../raids/resources/structure.json';
import trainingStructure from '../../../../raids/training/structure.json';
import type { RaidGateway } from '../application/raid.gateway';
import type { RaidStructure } from '../domain/raid.models';

export class RaidProvider implements RaidGateway {
  async readList(): Promise<RaidStructure[]> {
    return Promise.resolve([
      trainingStructure,
      resourcesStructure,
      mysterious_islandStructure,
    ] as RaidStructure[]);
  }

  async readDetail(id: string): Promise<RaidStructure> {
    if (id === 'training') {
      return Promise.resolve(trainingStructure as RaidStructure);
    } else if (id === 'mysterious_island') {
      return Promise.resolve(mysterious_islandStructure as RaidStructure);
    }
    return Promise.resolve(resourcesStructure as RaidStructure);
  }
}
