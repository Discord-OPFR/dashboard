/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EffectDTO = {
  type: EffectDTO.type;
  params: Record<string, any>;
};
export namespace EffectDTO {
  export enum type {
    OPEN_CHEST = 'OPEN_CHEST',
    APPLY_BUFF = 'APPLY_BUFF',
    ALCOHOL_DRINK = 'ALCOHOL_DRINK',
    HEAL_HP = 'HEAL_HP',
    GAIN_XP = 'GAIN_XP',
    GAIN_RANDOM_XP = 'GAIN_RANDOM_XP',
    BOOST = 'BOOST',
    DRINK_BOTTLE = 'DRINK_BOTTLE',
    DROP = 'DROP',
    CLEAR_HANGOVER = 'CLEAR_HANGOVER',
    UNLOCK_ASSET = 'UNLOCK_ASSET',
    ADD_SCROLL_CHARAC = 'ADD_SCROLL_CHARAC',
    RAID_REDUCE_COOLDOWN = 'RAID_REDUCE_COOLDOWN',
    CREW_XP_BUFF = 'CREW_XP_BUFF',
    CREW_REPAIR = 'CREW_REPAIR',
  }
}
