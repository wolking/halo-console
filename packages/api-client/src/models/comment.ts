/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { CommentSpec } from './comment-spec'
// May contain unused imports in some cases
// @ts-ignore
import { CommentStatus } from './comment-status'
// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from './metadata'

/**
 *
 * @export
 * @interface Comment
 */
export interface Comment {
  /**
   *
   * @type {CommentSpec}
   * @memberof Comment
   */
  spec: CommentSpec
  /**
   *
   * @type {CommentStatus}
   * @memberof Comment
   */
  status?: CommentStatus
  /**
   *
   * @type {string}
   * @memberof Comment
   */
  apiVersion: string
  /**
   *
   * @type {string}
   * @memberof Comment
   */
  kind: string
  /**
   *
   * @type {Metadata}
   * @memberof Comment
   */
  metadata: Metadata
}