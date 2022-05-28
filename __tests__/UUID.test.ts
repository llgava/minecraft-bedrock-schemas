import faker from '@faker-js/faker';

describe('UUID', () => {
  it('should be a valid UUID', () => {
    const pattern = new RegExp(
      '^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$'
    );

    expect(faker.datatype.uuid()).toMatch(pattern);
    expect(faker.datatype.string(8)).not.toMatch(pattern);
  });
});
