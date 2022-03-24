import faker from '@faker-js/faker';

describe('Animation Controller name', () => {
  it('should be a valid Animation Controller name for blocks, items & entity', () => {
    const pattern = new RegExp('^(?:controller.animation.)+[a-z]+$');

    expect('controller.animation.name').toMatch(pattern);
    expect('controller.animation.').not.toMatch(pattern);
    expect(faker.datatype.string()).not.toMatch(pattern);
  });
});
