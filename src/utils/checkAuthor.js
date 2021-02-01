import { utils } from './common.js'
function checkAuthor () {
  // if(document.referrer.indexOf())
  // location.reload()
  // alert(document.referrer)
  const baseUrl = window.location.href.split('/page/')[0]
  const temp = baseUrl.split('/')
  const api = temp[temp.length - 1]
  const identitAuthUrl = '/' + api + '/page/identitAuthentication/identitAuthentication.html'
  const token = JSON.parse(localStorage.getItem('userInfo')) && JSON.parse(localStorage.getItem('userInfo')).Token
  if (!token) {
    window.location.href = identitAuthUrl
  } else {

  }
}
checkAuthor()
