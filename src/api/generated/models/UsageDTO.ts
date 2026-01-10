/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DismantleDTO } from './DismantleDTO';

export type UsageDTO = {
  mode?: UsageDTO.mode;
  craft?: boolean;
  enchant?: string;
  dismantle?: DismantleDTO;
};
export namespace UsageDTO {
  export enum mode {
    SINGLE = 'single',
    MULTIPLE = 'multiple',
    ALL = 'all',
  }
}
