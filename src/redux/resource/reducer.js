// @flow
import { path, pathOr, omit } from 'ramda';
import { MERGE_SINGLE_RESOURCE } from './action';
import type { JsonApiResourceData } from '../../type/app/json-api-supported';

const initialState = {};

export const reducer =
  (state = initialState, action = {}) => {
    switch (action.type) {
      case MERGE_SINGLE_RESOURCE:
        const newResource: JsonApiResourceData = path(['payload'], action);
        const resourceId = newResource.id;
        const resourceType = newResource.type;
        const resources: { [any]: JsonApiResourceData } = pathOr({}, [resourceType], state);
        return {
          ...state,
          [resourceType]: {
            ...omit([resourceId], resources),
            [resourceId]: {
              id: resourceId,
              type: resourceType,
              attributes: newResource.attributes,
              relationships: {
                ...pathOr({}, [resourceId, 'relationships'], resources),
                ...pathOr({}, ['relationships'], newResource),
              },
            }
          },
        };
      default:
        return state;
    }
  };
