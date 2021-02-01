export class Enum {
  getValue (string) {
    return this[string]
  }

  setValue (key, value) {
    this[key] = value
  }

  getKey (string) {
    for (const item of Object.keys(this)) {
      if (this[item] === string) {
        return item
      }
    }
  }

  toArray () {
    const arr = []
    Object.keys(this).forEach(item => {
      arr.push({ key: item, value: this[item] })
    })
    return arr
  }
}
