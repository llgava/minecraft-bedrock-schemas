import faker from '@faker-js/faker';

describe('Resource Pack ❯ Geometry', () => {
  it('should be a valid Resource Pack Geometry name', () => {
    const pattern = new RegExp('^(?:geometry.)+[a-z]+$');

    expect('geometry.human').toMatch(pattern);
    expect('geometry.').not.toMatch(pattern);
    expect(faker.datatype.string()).not.toMatch(pattern);
  });
});
