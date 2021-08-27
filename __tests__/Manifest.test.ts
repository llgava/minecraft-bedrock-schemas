import { v4 } from 'uuid';

describe('Manifest patterns', () => {
  it('should be a valid uuid', () => {
    const pattern = new RegExp('^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$');
    expect(v4()).toMatch(pattern);
    expect('&1%0alc028*/').not.toMatch(pattern);
  });
});
