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
   * @returns any
   * @throws ApiError
   */
  public static login(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/auth/login',
    });
  }
  /**
   * @param code
   * @returns any
   * @throws ApiError
   */
  public static callback(code: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/auth/discord/callback',
      query: {
        code: code,
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
