import faker from '@faker-js/faker';

describe('Behavior Pack ❯ Animation Controllers', () => {
  it('should be a valid Behavior Pack Animation Controller name', () => {
    const pattern = new RegExp('^(?:controller.animation.)+[a-z]+$');

    expect('controller.animation.name').toMatch(pattern);
    expect('controller.animation.').not.toMatch(pattern);
    expect(faker.datatype.string()).not.toMatch(pattern);
  });
});
