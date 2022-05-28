describe('Identifier', () => {
  it('should be a valid identifier for blocks, items and entities', () => {
    const pattern = new RegExp(
      '^(?:(?:(?!minecraft|minecon))+[a-z]*:[a-z_]*)+$'
    );

    expect('namespace:id').toMatch(pattern);
    expect('minecraft:id').not.toMatch(pattern);
    expect('minecon:id').not.toMatch(pattern);
  });
});
