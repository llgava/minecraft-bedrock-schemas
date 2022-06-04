import faker from '@faker-js/faker';

describe('Behavior Pack ❯ Animations', () => {
  it('should be a valid Behavior Pack Animation name', () => {
    const pattern = new RegExp('^(?:animation.)+[a-z]+$');

    expect('animation.name').toMatch(pattern);
    expect('animation.').not.toMatch(pattern);
    expect(faker.datatype.string()).not.toMatch(pattern);
  });

  it('should be a valid Behavior Pack Animation timeline time', () => {
    const pattern = new RegExp('^([0-9]+[.])?[0-9]+$');

    expect('0.5').toMatch(pattern);
    expect('1').toMatch(pattern);
    expect('.75').not.toMatch(pattern);
    expect('1.').not.toMatch(pattern);
    expect(faker.datatype.string(5)).not.toMatch(pattern);
  });
});
