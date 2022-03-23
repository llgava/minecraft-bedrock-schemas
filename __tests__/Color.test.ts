import faker from '@faker-js/faker';

describe('Color', () => {
  it('should be a valid HEX color', () => {
    const pattern = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');

    expect(faker.internet.color()).toMatch(pattern);
    expect(faker.datatype.string(8)).not.toMatch(pattern);
  });
});
