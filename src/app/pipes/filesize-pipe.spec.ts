import { FileSizePipe } from './filzesize-pipe';

describe('File size pipe', () => {
  let pipe = new FileSizePipe();

  it('rounds up value to 2 decimal places', () => {
    expect(pipe.transform(3048576).split('.').pop().split(' MB').shift().length).toEqual(2);
    expect(pipe.transform(2048).split('.').pop().split(' KB').shift().length).toEqual(2);
  });
  it('transforms value to megabytes if it equals to at least 1MB', () => {
    expect(pipe.transform(1048576)).toContain('MB');
    expect(pipe.transform(5048576)).toContain('MB');
  });
  it('transforms value to kilobytes if it is less than 1MB', () => {
    expect(pipe.transform(5024)).toContain('KB');
  });
});
