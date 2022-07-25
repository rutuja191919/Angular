import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('Check the pipe',()=>{
    const obj = new ReversePipe();
    expect(obj.transform('abcd')).toEqual('dcba')
  })
});
