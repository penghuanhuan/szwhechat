import { DataPacket } from '../base/DataPacket.js'

export class OwnerCommitteeMember extends DataPacket {
  constructor (opts = {}) {
    super()
    this.Education = opts.Education || null
    this.OwnerTeamMemberRoleName = opts.OwnerTeamMemberRoleName || ''
    this.TwoVoteRate = opts.TwoVoteRate || null
    this.CertificateTypeText = opts.CertificateTypeText || ''
    this.PolicitalStatus = opts.PolicitalStatus || null
    this.Remark = opts.Remark || ''
    this.Division = opts.Division || null
    this.DomicileArea = opts.DomicileArea || ''
    this.DomicileProvince = opts.DomicileProvince || ''
    this.OwnerSex = opts.OwnerSex || null
    this.OwnerName = opts.OwnerName || ''
    this.WorkPlaceJob = opts.WorkPlaceJob || ''
    this.OrgCode = opts.OrgCode || ''
    this.TermOfOffice = opts.TermOfOffice || ''
    this.Email = opts.Email || ''
    this.WorkPlace = opts.WorkPlace || ''
    this.OwnerVotes = opts.OwnerVotes || null
    this.Address = opts.Address || ''
    this.OwnerNation = opts.OwnerNation || null
    this.OwnerPhone = opts.OwnerPhone || ''
    this.Degree = opts.Degree || null
    this.OneVoteRate = opts.OneVoteRate || null
    this.OwnerCommitteeKeyID = opts.OwnerCommitteeKeyID || ''
    this.KeyID = opts.KeyID || ''
    this.DomicileCity = opts.DomicileCity || ''
    this.OwnerTeamMemberRole = opts.OwnerTeamMemberRole || null
    this.HouseCode = opts.HouseCode || ''
    this.Domicile = opts.Domicile || ''
    this.AttachID = opts.AttachID || ''
    this.CertificateNum = opts.CertificateNum || ''
    this.CertificateType = opts.CertificateType || null
    this.Status = opts.Status || null
  }
}
