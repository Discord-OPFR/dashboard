/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuffDTO } from './BuffDTO';

export type BottleDTO = {
  /**
   * Number or Tuple
   */
  xp: number | Array<number>;
  buffs: Array<BuffDTO>;
  hp: number;
  tier: BottleDTO.tier;
};
export namespace BottleDTO {
  export enum tier {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
  }
}
