import faker from '@faker-js/faker';

describe('Animation name', () => {
  it('should be a valid Animation name for entities', () => {
    const pattern = new RegExp('^(?:animation.)+[a-z]+$');

    expect('animation.name').toMatch(pattern);
    expect('animation.').not.toMatch(pattern);
    expect(faker.datatype.string()).not.toMatch(pattern);
  });
});
