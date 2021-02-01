import request from '../static/js/request.js'

export class ConfigItems {
  constructor () {
    this.baseurl = 'ConfigItems.assx/'
  }

  GetItem (name) {
    return request.post(this.baseurl + 'GetItem', Qs.stringify({ name: name }))
  }

  GetKeyVue (name) {
    return request.post(
      this.baseurl + 'GetKeyVue',
      Qs.stringify({ name: name })
    )
  }
}
