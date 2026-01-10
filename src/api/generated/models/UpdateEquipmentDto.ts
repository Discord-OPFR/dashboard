/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BottleDTO } from './BottleDTO';
import type { DescriptionDTO } from './DescriptionDTO';
import type { EffectDTO } from './EffectDTO';
import type { NameDTO } from './NameDTO';
import type { ShopDTO } from './ShopDTO';
import type { UsageDTO } from './UsageDTO';

export type UpdateEquipmentDto = {
  entityId?: string;
  name?: NameDTO;
  description?: DescriptionDTO;
  emojis?: string;
  effects?: EffectDTO;
  rankId?: UpdateEquipmentDto.rankId;
  usage?: UsageDTO;
  shop?: ShopDTO;
  bottle?: BottleDTO;
  ms?: number;
  type?: UpdateEquipmentDto.type;
  image?: UpdateEquipmentDto.image;
  category?: UpdateEquipmentDto.category;
  /**
   * Statistiques des caractéristiques. La valeur peut être un nombre unique ou un intervalle [min, max].
   */
  characteristics?: {
    vitality?: number | Array<number>;
    strength?: number | Array<number>;
    agility?: number | Array<number>;
    intelligence?: number | Array<number>;
    chance?: number | Array<number>;
    wisdom?: number | Array<number>;
  };
  level?: number;
  panoply?: string;
};
export namespace UpdateEquipmentDto {
  export enum rankId {
    BASIC = 'BASIC',
    COMMON = 'COMMON',
    RARE = 'RARE',
    EPIC = 'EPIC',
    LEGENDARY = 'LEGENDARY',
    MYTHIC = 'MYTHIC',
  }
  export enum type {
    RING = 'ring',
    STRAP = 'strap',
    BOOTS = 'boots',
    HELMET = 'helmet',
    COLLAR = 'collar',
    BELT = 'belt',
    WEAPON = 'weapon',
  }
  export enum image {
    ADVENTURER_BELT = 'adventurer_belt',
    ADVENTURER_BOOTS = 'adventurer_boots',
    ADVENTURER_COLLAR = 'adventurer_collar',
    ADVENTURER_HELMET = 'adventurer_helmet',
    ADVENTURER_STRAP = 'adventurer_strap',
    ADVENTURER_WEAPON = 'adventurer_weapon',
    CHRISTMAS_BELT = 'christmas_belt',
    CHRISTMAS_BOOTS = 'christmas_boots',
    CHRISTMAS_COLLAR = 'christmas_collar',
    CHRISTMAS_GLOVES = 'christmas_gloves',
    CHRISTMAS_HELMET = 'christmas_helmet',
    CHRISTMAS_STRAP = 'christmas_strap',
    CHRISTMAS_WEAPON = 'christmas_weapon',
    HERBALIST_BELT = 'herbalist_belt',
    HERBALIST_BOOTS = 'herbalist_boots',
    HERBALIST_HELMET = 'herbalist_helmet',
    HERBALIST_WEAPON = 'herbalist_weapon',
    LITTLE_BLACKSMITH_COLLAR = 'little_blacksmith_collar',
    LITTLE_BLACKSMITH_RING = 'little_blacksmith_ring',
    LITTLE_BLACKSMITH_STRAP = 'little_blacksmith_strap',
    LITTLE_BLACKSMITH_WEAPON = 'little_blacksmith_weapon',
    MARINE_COLLAR = 'marine_collar',
    MARINE_HELMET = 'marine_helmet',
    MARINE_RING = 'marine_ring',
    MARINE_STRAP = 'marine_strap',
    PIRATE_BELT = 'pirate_belt',
    PIRATE_HELMET = 'pirate_helmet',
    PIRATE_RING = 'pirate_ring',
    PIRATE_WEAPON = 'pirate_weapon',
    REVOLUTIONARY_BELT = 'revolutionary_belt',
    REVOLUTIONARY_BOOTS = 'revolutionary_boots',
    REVOLUTIONARY_HELMET = 'revolutionary_helmet',
    REVOLUTIONARY_RING = 'revolutionary_ring',
  }
  export enum category {
    EQUIPMENT = 'equipment',
  }
}
