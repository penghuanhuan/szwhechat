const filters = {
  // 日期格式化
  formatDate: function (dates, fmt) {
    if (!dates) return ''
    const date = new Date(dates)
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        const str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length))
      }
    }
    return fmt
  },

  getDate: function (date) {
    if (date) {
      return date.replace('T', ' ')
    }
  },
  subLast: function (val) {
    return val.substring(0, val.length - 1)
  },
  // 取小数点后两位
  numFixed: function (val) {
    if (val) {
      return val.toFixed(2)
    } else {
      return null
    }
  }
}
export default filters
