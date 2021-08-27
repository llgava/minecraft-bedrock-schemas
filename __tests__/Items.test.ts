describe('Items description patterns', () => {
  it('should be a valid identifier', () => {
    const pattern = new RegExp('^(?:(?:(?!minecraft|minecon))+[a-z]*:[a-z_]*)+$');
    expect('namespace:id').toMatch(pattern);
    expect('minecraft:id').not.toMatch(pattern);
    expect('minecon:id').not.toMatch(pattern);
  });
});
