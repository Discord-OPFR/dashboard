/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {
  /**
   * @returns any
   * @throws ApiError
   */
  public static findAll(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users',
    });
  }
  /**
   * @param id
   * @returns any
   * @throws ApiError
   */
  public static findOne(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{id}',
      path: {
        id: id,
      },
    });
  }
  /**
   * @param id
   * @returns any
   * @throws ApiError
   */
  public static getInventory(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{id}/inventory',
      path: {
        id: id,
      },
    });
  }
  /**
   * @param id
   * @returns any
   * @throws ApiError
   */
  public static getMeta(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{id}/meta',
      path: {
        id: id,
      },
    });
  }
  /**
   * @param id
   * @returns any
   * @throws ApiError
   */
  public static getQuest(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{id}/quest',
      path: {
        id: id,
      },
    });
  }
  /**
   * @param id
   * @returns any
   * @throws ApiError
   */
  public static getQuestMeta(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{id}/quest-meta',
      path: {
        id: id,
      },
    });
  }
  /**
   * @param id
   * @returns any
   * @throws ApiError
   */
  public static getCrew(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{id}/crew',
      path: {
        id: id,
      },
    });
  }
  /**
   * @param id
   * @returns any
   * @throws ApiError
   */
  public static getEncyclopedia(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{id}/encyclopedia',
      path: {
        id: id,
      },
    });
  }
  /**
   * @param id
   * @returns any
   * @throws ApiError
   */
  public static getOrnaments(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{id}/ornaments',
      path: {
        id: id,
      },
    });
  }
  /**
   * @param id
   * @returns any
   * @throws ApiError
   */
  public static getCooldown(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{id}/cooldown',
      path: {
        id: id,
      },
    });
  }
  /**
   * @param id
   * @returns any
   * @throws ApiError
   */
  public static getDailyReport(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{id}/daily-report',
      path: {
        id: id,
      },
    });
  }
  /**
   * @param id
   * @returns any
   * @throws ApiError
   */
  public static getGames(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{id}/games',
      path: {
        id: id,
      },
    });
  }
  /**
   * @param id
   * @returns any
   * @throws ApiError
   */
  public static getRaid(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{id}/raid',
      path: {
        id: id,
      },
    });
  }
  /**
   * @param id
   * @returns any
   * @throws ApiError
   */
  public static getShop(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{id}/shop',
      path: {
        id: id,
      },
    });
  }
}
