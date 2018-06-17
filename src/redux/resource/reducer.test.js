import { reducer } from './reducer';
import { mergeSingleResource } from './action';


describe('test `resource` reducer', () => {
  const originalState = {
    'car-makes': {
      3: { id: '3', type: 'car-makes', attributes: { text: 'Audi' } },
      5: {
        id: '5',
        type: 'car-makes',
        attributes: { text: 'BMW' },
        relationships: {
          test: { data: [{ id: '1', type: 'test' }] },
          test2: { data: { id: '2', type: 'test' } }
        }
      }
    }
  };

  it('test merge new single resource', () => {
    const action = mergeSingleResource({
      id: '7',
      type: 'car-makes',
      attributes: { text: 'toyota' },
      relationships: {
        test: { data: { id: '1', type: 'test' } }
      }
    });
    const returnedState = reducer(originalState, action);
    expect(returnedState)
      .toEqual({
        'car-makes': {
          ...originalState['car-makes'],
          7: {
            id: '7',
            type: 'car-makes',
            attributes: { text: 'toyota' },
            relationships: {
              test: { data: { id: '1', type: 'test' } }
            }
          }
        }
      });
  });

  it('test merge existing single resource', () => {
    const action = mergeSingleResource({
      id: '5',
      type: 'car-makes',
      attributes: { text: 'toyota' },
      relationships: {
        test: { data: [{ id: '111', type: 'test' }, { id: '112', type: 'test' }] },
        test3: { data: { id: '333', type: 'test' } }
      }
    });
    const returnedState = reducer(originalState, action);
    expect(returnedState)
      .toEqual({
        'car-makes': {
          ...originalState['car-makes'],
          5: {
            id: '5',
            type: 'car-makes',
            attributes: { text: 'toyota' },
            relationships: {
              test: { data: [{ id: '111', type: 'test' }, { id: '112', type: 'test' }] },
              test2: { data: { id: '2', type: 'test' } },
              test3: { data: { id: '333', type: 'test' } },
            }
          }
        }
      });
  });
});
