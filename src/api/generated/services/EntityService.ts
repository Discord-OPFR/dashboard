/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { CreateEquipmentDto } from '../models/CreateEquipmentDto';
import type { CreateItemDto } from '../models/CreateItemDto';
import type { ResponseEntityDto } from '../models/ResponseEntityDto';
import type { ResponseEquipmentDTO } from '../models/ResponseEquipmentDTO';
import type { ResponseItemDto } from '../models/ResponseItemDto';
import type { UpdateEquipmentDto } from '../models/UpdateEquipmentDto';
import type { UpdateItemDto } from '../models/UpdateItemDto';

export class EntityService {
  /**
   * @param requestBody
   * @returns ResponseItemDto
   * @throws ApiError
   */
  public static createItem(
    requestBody: CreateItemDto,
  ): CancelablePromise<ResponseItemDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/entity/item',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns ResponseItemDto
   * @throws ApiError
   */
  public static getAllItems(): CancelablePromise<Array<ResponseItemDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/entity/item',
    });
  }
  /**
   * @param requestBody
   * @returns ResponseEquipmentDTO
   * @throws ApiError
   */
  public static createEquipment(
    requestBody: CreateEquipmentDto,
  ): CancelablePromise<ResponseEquipmentDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/entity/equipment',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @returns ResponseEquipmentDTO
   * @throws ApiError
   */
  public static getAllEquipments(): CancelablePromise<
    Array<ResponseEquipmentDTO>
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/entity/equipment',
    });
  }
  /**
   * @returns ResponseEntityDto
   * @throws ApiError
   */
  public static getAll(): CancelablePromise<Array<ResponseEntityDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/entity',
    });
  }
  /**
   * @param entityId
   * @param requestBody
   * @returns ResponseItemDto
   * @throws ApiError
   */
  public static updateItem(
    entityId: string,
    requestBody: UpdateItemDto,
  ): CancelablePromise<ResponseItemDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/entity/item/{entityId}',
      path: {
        entityId: entityId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @param entityId
   * @returns ResponseItemDto
   * @throws ApiError
   */
  public static getItemById(
    entityId: string,
  ): CancelablePromise<ResponseItemDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/entity/item/{entityId}',
      path: {
        entityId: entityId,
      },
    });
  }
  /**
   * @param entityId
   * @param requestBody
   * @returns ResponseEquipmentDTO
   * @throws ApiError
   */
  public static updateEquipment(
    entityId: string,
    requestBody: UpdateEquipmentDto,
  ): CancelablePromise<ResponseEquipmentDTO> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/entity/equipment/{entityId}',
      path: {
        entityId: entityId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @param entityId
   * @returns ResponseItemDto
   * @throws ApiError
   */
  public static getEquipmentById(
    entityId: string,
  ): CancelablePromise<ResponseItemDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/entity/equipment/{entityId}',
      path: {
        entityId: entityId,
      },
    });
  }
  /**
   * @param entityId
   * @returns ResponseEntityDto
   * @throws ApiError
   */
  public static getById(
    entityId: string,
  ): CancelablePromise<Array<ResponseEntityDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/entity/{entityId}',
      path: {
        entityId: entityId,
      },
    });
  }
}
