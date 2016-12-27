module.exports = {
  foo() {
    const obj = {};

    setTimeout(() => obj.prop = 'val');

    return obj;
  }
}
