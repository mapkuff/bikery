// @flow
import type { JsonApiResourceData } from '../../type/app/json-api-supported';

export const MERGE_SINGLE_RESOURCE = 'RESOURCE/MERGE_SINGLE_RESOURCE';

export const mergeSingleResource =
  (resource: JsonApiResourceData) => ({
    type: MERGE_SINGLE_RESOURCE,
    payload: resource,
  });
