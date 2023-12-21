import { GroupByPipe } from './group-by.pipe';
import MockData from '../../../../mockdata';

describe('GroupByPipe', () => {
  it('create an instance', () => {
    const pipe = new GroupByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return correct groups', () => {
    const pipe = new GroupByPipe();
    const pipeResult = pipe.transform(MockData, 'gender');
    expect(pipeResult.Male).toBeDefined();
    expect(pipeResult.Female).toBeDefined();
    expect(pipeResult.RatherNotSay).toBeUndefined();
  });
});
