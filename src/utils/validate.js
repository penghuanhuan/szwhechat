/**
 * Created by jiachenpan on 16/11/18.
 */

/* 合法uri */
export function validateURL (textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

// 电话号
export function validateStandPhone (FaxNum) {
  const re = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
  return re.test(FaxNum)
}
/* 小写字母 */
export function validateLowerCase (str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母 */
export function validateUpperCase (str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
export function validateAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail (email) {
  const re = /^([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/gi
  return re.test(email)
}

// 手机号验证
export function validatePhone (phone) {
  const re = /^1[0-9]\d{9}$/
  return re.test(phone)
}

// 身份证号验证
export function validateIdCardNumber (idCardNumber) {
  const re = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return re.test(idCardNumber)
}

// 是否数字 /(^[\-0-9][0-9]*(.[0-9]+)?)$/ (小数,正负数)
export function validateNumber (number) {
  const re = /^[0-9]*$/ // 正整数
  return re.test(number)
}
export function fixedNumber (number) {
  const re = /^[0-9]+(.[0-9]{0,3})?$/ // 二位小数正整数
  return re.test(number)
}
// 密码长度最少6位，且必应同时包含大小写字母、特殊符号、数字
export function validateUsername (number) {
  const reg = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}$/ // 正整数
  return reg.test(number)
}
// 密码长度最少6位，且必应同时包含大小写字母、特殊符号、数字
export function validatePassword (number) {
  const reg = /^[a-zA-Z0-9]{6,14}$/ // 正整数
  return reg.test(number)
}
// 验证大小写与数字
export function validateAlphabetsNumber (number) {
  const reg = /^[A-Za-z0-9]+$/
  return reg.test(number)
}
