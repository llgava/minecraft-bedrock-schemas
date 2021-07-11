class Convert {
  public toJSON(_class: any): object {
    const stringify = JSON.stringify(_class);
    const object = JSON.parse(stringify);

    return object;
  }
}

export default new Convert();
