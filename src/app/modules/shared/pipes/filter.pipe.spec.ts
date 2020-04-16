import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter based on the search term', () => {
    const testPets = [
      {
        "name": "Garfield",
        "type": "Cat"
      },
      {
        "name": "Fido",
        "type": "Dog"
      }
    ];

    const pipe = new FilterPipe();
    const pipeResult = pipe.transform(testPets, { type: 'Dog' });
    expect(pipeResult[0]).toEqual(testPets[1]);
  });

  it('should return empty collection when filter search term not matched', () => {
    let testPets = [
      {
        "name": "Garfield",
        "type": "Cat"
      },
      {
        "name": "Fido",
        "type": "Dog"
      }
    ];

    const pipe = new FilterPipe();
    const pipeResult = pipe.transform(testPets, { type: 'Fish' });
    expect(pipeResult.length).toEqual(0);
  });
});
