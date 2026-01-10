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

export type ResponseEntityDto = {
  entityId: string;
  name: NameDTO;
  description: DescriptionDTO;
  type: ResponseEntityDto.type;
  image: ResponseEntityDto.image;
  emojis: string;
  category: ResponseEntityDto.category;
  effects: EffectDTO;
  rankId: ResponseEntityDto.rankId;
  usage: UsageDTO;
  shop: ShopDTO;
  bottle: BottleDTO;
  ms: number;
  /**
   * Statistiques des caractéristiques. La valeur peut être un nombre unique ou un intervalle [min, max].
   */
  characteristics: {
    vitality?: number | Array<number>;
    strength?: number | Array<number>;
    agility?: number | Array<number>;
    intelligence?: number | Array<number>;
    chance?: number | Array<number>;
    wisdom?: number | Array<number>;
  };
  level: number;
  panoply: string;
  /**
   * MongoDB ObjectId
   */
  _id: string;
};
export namespace ResponseEntityDto {
  export enum type {
    BOOST = 'boost',
    BOTTLE = 'bottle',
    REPAIR = 'repair',
    CHEST = 'chest',
    SCROLL = 'scroll',
    OBJECT = 'object',
    STORE = 'store',
    COOKED_MEAL = 'cookedMeal',
    ENCHANT = 'enchant',
    ALCOHOL = 'alcohol',
    RING = 'ring',
    STRAP = 'strap',
    BOOTS = 'boots',
    HELMET = 'helmet',
    COLLAR = 'collar',
    BELT = 'belt',
    WEAPON = 'weapon',
  }
  export enum image {
    AERONEF = 'aeronef',
    ANCHOR = 'anchor',
    ANCIENT_KEY = 'ancient_key',
    BACKGROUND = 'background',
    BEER = 'beer',
    BOOST_DAY = 'boost_day',
    BOOST_WEEK = 'boost_week',
    BOTTLE_XP_1 = 'bottle_xp_1',
    BOTTLE_XP_2 = 'bottle_xp_2',
    BOTTLE_XP_3 = 'bottle_xp_3',
    BOTTLE_XP_4 = 'bottle_xp_4',
    BOWL = 'bowl',
    BOWL_CEREAL = 'bowl_cereal',
    BREAD = 'bread',
    CEREAL = 'cereal',
    CHEESE = 'cheese',
    CHEST_1 = 'chest_1',
    CHEST_2 = 'chest_2',
    CHEST_3 = 'chest_3',
    CHEST_4 = 'chest_4',
    CHEST_BLACKSMITH_1 = 'chest_blacksmith_1',
    CHEST_BLACKSMITH_2 = 'chest_blacksmith_2',
    CHEST_BLACKSMITH_3 = 'chest_blacksmith_3',
    CHEST_CHRISTMAS = 'chest_christmas',
    CHRISTMAS_PRESENT = 'christmas_present',
    CLOVER = 'clover',
    COMPASS = 'compass',
    COTTON = 'cotton',
    CURSED_HAWTHORN = 'cursed_hawthorn',
    DRAGON_HEART = 'dragon_heart',
    EBONY_POPPY = 'ebony_poppy',
    EDELWEISS = 'edelweiss',
    EGG = 'egg',
    ELEMENTAL_CONCENTRATE_EARTH = 'elemental_concentrate_earth',
    ELEMENTAL_CONCENTRATE_FIRE = 'elemental_concentrate_fire',
    ELEMENTAL_CONCENTRATE_LIFE = 'elemental_concentrate_life',
    ELEMENTAL_CONCENTRATE_MOON = 'elemental_concentrate_moon',
    ELEMENTAL_CONCENTRATE_WATER = 'elemental_concentrate_water',
    ELEMENTAL_CONCENTRATE_WIND = 'elemental_concentrate_wind',
    EMERALD = 'emerald',
    EMPTY_CHEST = 'empty_chest',
    EMPTY_SCROLL = 'empty_scroll',
    ENCHANT_CEREAL = 'enchant_cereal',
    ENCHANT_CLOVER = 'enchant_clover',
    ENCHANT_COTTON = 'enchant_cotton',
    ENCHANT_EBONY_POPPY = 'enchant_ebony_poppy',
    ENCHANT_HEMP = 'enchant_hemp',
    ENCHANT_IRON = 'enchant_iron',
    ENCHANT_LEATHER = 'enchant_leather',
    ENCHANT_MANGANESE = 'enchant_manganese',
    ENCHANT_POPPY = 'enchant_poppy',
    ENCHANT_PURE_WATER = 'enchant_pure_water',
    ENCHANT_ROPE = 'enchant_rope',
    ENCHANT_ROSE = 'enchant_rose',
    ENCHANT_SEA_SALT = 'enchant_sea_salt',
    ENCHANT_TISSUE = 'enchant_tissue',
    ENCHANT_WOOD = 'enchant_wood',
    ENCHANTED_EMERALD = 'enchanted_emerald',
    ENCHANTED_RUBY = 'enchanted_ruby',
    ENCHANTED_SAPPHIRE = 'enchanted_sapphire',
    ENCHANTED_STONE = 'enchanted_stone',
    ESSENCE_EARTH = 'essence_earth',
    ESSENCE_FIRE = 'essence_fire',
    ESSENCE_LIFE = 'essence_life',
    ESSENCE_MOON = 'essence_moon',
    ESSENCE_WATER = 'essence_water',
    ESSENCE_WIND = 'essence_wind',
    FAIRY_WING = 'fairy_wing',
    FLOUR = 'flour',
    FRUIT = 'fruit',
    GLASS_BOTTLE = 'glass_bottle',
    GLUE = 'glue',
    HAMMOCK = 'hammock',
    HEMP = 'hemp',
    IRON = 'iron',
    IRON_ORE = 'iron_ore',
    LEATHER = 'leather',
    LITTLE_COOKIE_CHRISTMAS = 'little_cookie_christmas',
    LOCK = 'lock',
    MANDRAKE = 'mandrake',
    MANGANESE = 'manganese',
    MAP_FRAGMENT = 'map_fragment',
    MILK = 'milk',
    MITHRIL = 'mithril',
    MUGWORT = 'mugwort',
    MYSTERIOUS_EGG_CHRISTMAS = 'mysterious_egg_christmas',
    NAIL = 'nail',
    OBSIDIAN = 'obsidian',
    OMELET = 'omelet',
    PHOENIX_FEATHER = 'phoenix_feather',
    POPPY = 'poppy',
    PURE_WATER = 'pure_water',
    REPAIR_KIT = 'repair_kit',
    RESCUE_BOAT = 'rescue_boat',
    RHUM = 'rhum',
    ROPE = 'rope',
    ROSE = 'rose',
    RUBY = 'ruby',
    RUDDER = 'rudder',
    SAFFRON = 'saffron',
    SAILING_BOAT = 'sailing_boat',
    SALT_WATER = 'salt_water',
    SAPPHIRE = 'sapphire',
    SCRAP = 'scrap',
    SCROLL_AGILITY = 'scroll_agility',
    SCROLL_CHANCE = 'scroll_chance',
    SCROLL_INTELLIGENCE = 'scroll_intelligence',
    SCROLL_STRENGTH = 'scroll_strength',
    SCROLL_VITALITY = 'scroll_vitality',
    SCROLL_WISDOM = 'scroll_wisdom',
    SEA_SALT = 'sea_salt',
    SIREN_TEAR = 'siren_tear',
    STRANGE_GEM = 'strange_gem',
    STRANGE_STONE = 'strange_stone',
    STRAWBERRY_CAKE = 'strawberry_cake',
    SUGAR = 'sugar',
    SUGAR_CANE_CHRISTMAS = 'sugar_cane_christmas',
    TISSUE = 'tissue',
    TITLE = 'title',
    TOOLS = 'tools',
    TOY = 'toy',
    WINE = 'wine',
    WOOD = 'wood',
    WOOD_PLANK = 'wood_plank',
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
    ITEM = 'item',
    RESOURCE = 'resource',
    ENCHANT = 'enchant',
    EQUIPMENT = 'equipment',
  }
  export enum rankId {
    BASIC = 'BASIC',
    COMMON = 'COMMON',
    RARE = 'RARE',
    EPIC = 'EPIC',
    LEGENDARY = 'LEGENDARY',
    MYTHIC = 'MYTHIC',
  }
}
