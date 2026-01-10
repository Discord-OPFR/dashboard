/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { UserDto } from '../models/UserDto';

export class AuthService {
  /**
   * @returns UserDto
   * @throws ApiError
   */
  public static me(): CancelablePromise<UserDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/auth/me',
    });
  }
  /**
   * @param origin
   * @returns any
   * @throws ApiError
   */
  public static login(origin: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/auth/login',
      query: {
        origin: origin,
      },
    });
  }
  /**
   * @param code
   * @param state
   * @returns any
   * @throws ApiError
   */
  public static callback(code: string, state: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/auth/discord/callback',
      query: {
        code: code,
        state: state,
      },
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static refresh(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/auth/refresh',
    });
  }
}
