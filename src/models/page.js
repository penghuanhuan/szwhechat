export class Page {
  constructor (opts = {}) {
    this.currentPage = opts.currentPage || 1 // 当前页数
    this.pageCount = opts.pageCount || 1 // 总页数
    this.currtNum = opts.currtNum || 20 // 当前请求条数
    this.totleNum = opts.totleNum || 0 // 当前获得条数
    this.getCurrtNum = opts.getCurrtNum || 0 // 总条数
    this.startNum = opts.startNum || 0 // 请求到的开始条数
  }
}
