export class DataPacket {
  toString () {
    return JSON.stringify(this)
  }

  create (obj) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = obj[prop]
      }
    }
    return this
  }

  newDate (date) {
    if (date) {
      if (typeof date === 'string') {
        date = new Date(date.replace(/T/gi, ' '))
      }
      if (date.getTime() >= -2209017600000) {
        return date
      }
    }
    return null
  }

  dealtime (timeTemp) {
    const date = new Date(timeTemp)
    const Y = date.getFullYear() + '-'
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
    const H = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    const min = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
    const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return Y + M + D + H + min + s
  }
  // newGuid(): string {
  //     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
  //         const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
  //         return v.toString(16);
  //     });
  // }
}
