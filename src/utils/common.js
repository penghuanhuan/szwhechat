import Storage from './storage.js'

const utils = {
  getQueryString (name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    const r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
  },

  getScoreObjName (name) {
    return decodeURI(window.location.href.split(name + '=')[1])
  },

  htmlDecodeByRegExp (str, id) {
    let temp = ''
    if (str.length == 0) return ''
    temp = str.replace(/&amp;/g, '&')
    temp = temp.replace(/&lt;/g, '<')
    temp = temp.replace(/&gt;/g, '>')
    temp = temp.replace(/&nbsp;/g, ' ')
    temp = temp.replace(/&#39;/g, '\'')
    temp = temp.replace(/&quot;/g, '"')
    if (id == '0') {
      var arr = temp.split('<img')
      if (arr.length == 2) {
        var arr2 = arr[1].split('</a>')
        if (arr2.length == 2) { temp = arr[0] + arr2[1] }
      }
    }
    return temp
  },

  mGetDate (year, month) {
    const d = new Date(year, month, 0)
    return d.getDate()
  },
  getQueryStringChinese (name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    const r = window.location.search.substr(1).match(reg)
    if (r != null) return decodeURI(r[2])
    return null
  }
}

export {
  utils
}
