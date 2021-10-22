describe('Blocks description patterns', () => {
  it('should be a valid identifier', () => {
    const pattern = new RegExp('^(?:(?:(?!minecraft|minecon))+[a-z]*:[a-z_]*)+$');

    expect('namespace:id').toMatch(pattern);
    expect('minecraft:id').not.toMatch(pattern);
    expect('minecon:id').not.toMatch(pattern);
  });
});

describe('Blocks component patterns', () => {
  it('should be a valid minecraft:map_color', () => {
    const pattern = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');
    
    expect('#FF00FF').toMatch(pattern);
    expect('&1%0alc028*/').not.toMatch(pattern);
  });
});
