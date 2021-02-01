import { DataPacket } from './DataPacket.js'

export class NorDataList extends DataPacket {
  constructor () {
    super()
    this.MaxID = 0
    this._Items = []
    this.TotalCount = 0
  }

  get first () {
    return this._Items[0]
  }

  set first (item) {
    this.setItem(0, item)
  }

  get last () {
    return this._Items[this.count - 1]
  }

  set last (item) {
    this.setItem(this.count - 1, item)
  }

  get count () {
    return this._Items.length
  }

  get items () {
    return this._Items
  }

  set items (items) {
    this._Items = items
  }

  findItemIndex (item, attr, arrAttr) {
    if (!arrAttr) {
      arrAttr = attr
    }
    return this.items.findIndex((arrItem) => {
      return item[attr] === arrItem[arrAttr]
    })
  }

  findItem (item, attr, arrAttr) {
    if (!arrAttr) {
      arrAttr = attr
    }
    return this.items.find((arrItem) => {
      return item[attr] === arrItem[arrAttr]
    })
  }

  getItem (index) {
    return this._Items[index]
  }

  setItem (index, item) {
    this._Items[index] = item
  }

  removeItem (item, condition) {
    const index = this.findItemIndex(item, condition)
    if (index > -1) {
      this.remove(index)
    }
  }

  insert (index, item) {
    for (let i = this.count; i > index; i--) {
      this.setItem(i, this.getItem(i - 1))
    }
    this.setItem(index, item)
  }

  append (item) {
    this._Items.push(item)
    this.TotalCount = this._Items.length
  }

  appendList (appendList) {
    this._Items = this._Items.concat(appendList)
    this.TotalCount = this._Items.length
  }

  prepend (item) {
    this._Items.unshift(item)
  }

  remove (index) {
    this._Items.splice(index, 1)
    this.TotalCount = this._Items.length
  }

  clear () {
    this._Items = []
  }

  sort (sortBy, isDesc) {
    this._Items.sort((n1, n2) => {
      const n1Attr = n1[sortBy]
      const n2Attr = n2[sortBy]
      let result = 0
      if (typeof n1Attr === 'string') {
        result = n1Attr.localeCompare(n2Attr, 'zh')
      } else {
        if (n1Attr > n2Attr) {
          result = 1
        }
        if (n2Attr > n1Attr) {
          result = -1
        }
      }
      if (isDesc) {
        result = -result
      }
      return result
    })
  }

  union (otherArr, condition) {
    const tmpList = new NorDataList()
    for (const item of this.items) {
      tmpList.append(item)
    }
    for (const item1 of otherArr.items) {
      let isRepeat = false
      for (const item2 of this.items) {
        if (item1[condition] === item2[condition]) {
          isRepeat = true
          break
        }
      }
      if (!isRepeat) {
        tmpList.append(item1)
      }
    }
    return tmpList
  }

  difference (otherArr, condition) {
    const tmpList = new NorDataList()
    for (const item1 of this.items) {
      let isRepeat = false
      for (const item2 of otherArr.items) {
        if (item1[condition] === item2[condition]) {
          isRepeat = true
          break
        }
      }
      if (!isRepeat) {
        tmpList.append(item1)
      }
    }
    return tmpList
  }
}
