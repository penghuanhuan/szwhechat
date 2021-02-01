import {
  Enum
} from '../base/Enum.js'

// 登记注册类型
export class registrationType extends Enum {
  constructor () {
    super(),
    this[1] = '国有企业',
    this[2] = '集体企业',
    this[3] = '股份合作企业',
    this[4] = '联营企业',
    this[5] = '有限责任公司',
    this[6] = '股份有限公司',
    this[7] = '私营企业',
    this[8] = '其他内资企业',
    this[9] = '港、澳、台商投资企业',
    this[10] = '外商投资企业'
  }
}

// 控股情况
export class holdingSituation extends Enum {
  constructor () {
    super(),
    this[1] = '国有控股',
    this[2] = '集体控股',
    this[3] = '私人控股',
    this[4] = '港澳台控股',
    this[5] = '外商控股',
    this[99] = '其他'
  }
}

// 资质等级
export class licenseLevel extends Enum {
  constructor () {
    super(),
    this[1] = '一级资质',
    this[2] = '二级资质',
    this[3] = '三级资质',
    this[4] = '三级资信',
    this[5] = '二级资信',
    this[6] = '无资质',
    this[7] = '暂定资信',
    this[8] = '三级暂定'
  }
}

// 执行会计制度
export class accountingType extends Enum {
  constructor () {
    super(),
    this[1] = '企业会计制度',
    this[2] = '事业单位会计制度',
    this[3] = '行政单位会计制度',
    this[4] = '其他'
  }
}

// 机构类型
export class organizationType extends Enum {
  constructor () {
    super(),
    this[1] = '企业',
    this[2] = '事业单位',
    this[3] = '机关',
    this[4] = '民办非企业',
    this[5] = '社会团体',
    this[99] = '其他组织机构'
  }
}

// 企业类型
export class companyType extends Enum {
  constructor () {
    super(),
    this[1] = '主营物业服务企业',
    this[2] = '兼营物业服务企业'
  }
}

// 项目类型
export class ProjecType extends Enum {
  constructor () {
    super(),
    this[1] = '住宅物业',
    this[2] = '商业物业',
    this[3] = '商住一体',
    this[4] = '写字楼',
    this[5] = '商写一体',
    this[99] = '其他'
  }
}
