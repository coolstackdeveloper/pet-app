import { OrderByPipe } from './order-by.pipe';
import MockData from '../../../../mockdata';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should order items in ascending order by default', () => {
    const testPetOwners = [
      { name: 'B' }, { name: 'A' }, { name: 'C' }
    ]

    const pipe = new OrderByPipe();
    const pipeResult = pipe.transform(testPetOwners, ['name']);
    expect(pipeResult).toEqual([{ name: 'A' }, { name: 'B' }, { name: 'C' }]);
  });

  it('should order items in ascending order', () => {
    const testPetOwners = [
      { name: 'B' }, { name: 'A' }, { name: 'C' }
    ]

    const pipe = new OrderByPipe();
    const pipeResult = pipe.transform(testPetOwners, ['name'], ['asc']);
    expect(pipeResult).toEqual([{ name: 'A' }, { name: 'B' }, { name: 'C' }]);
  });

  it('should order items in descending order', () => {
    const testPetOwners = [
      { name: 'B' }, { name: 'A' }, { name: 'C' }
    ]

    const pipe = new OrderByPipe();
    const pipeResult = pipe.transform(testPetOwners, ['name'], ['desc']);
    expect(pipeResult).toEqual([{ name: 'C' }, { name: 'B' }, { name: 'A' }]);
  });
});
