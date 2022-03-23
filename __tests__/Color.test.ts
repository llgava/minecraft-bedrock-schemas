describe('Color', () => {
  it('should be a valid HEX color', () => {
    const pattern = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');

    expect('#FF00FF').toMatch(pattern);
    expect('&1%0alc028*/').not.toMatch(pattern);
  });
});
