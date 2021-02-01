//============ wy.core.services.propertyfacility.FacilityAccount =============
import {WYFacilityEx} from './WYFacilityEx';
import {EaFacility} from './EaFacility';

export class FacilityAccount extends DataPacket {
    constructor(opts= {}){
        super();
        this.AnnualCompany = opts.AnnualCompany || '';
        this.AnnualCost = opts.AnnualCost || null;
        this.FacilityId = opts.FacilityId || '';
        this.FacilityEx = new WYFacilityEx(opts.FacilityEx) || new WYFacilityEx();
        this.CreaterName = opts.CreaterName || '';
        this.SecurityCheckId = opts.SecurityCheckId || '';
        this.CreateTime = opts.CreateTime || null;
        this.PersonLiable = opts.PersonLiable || '';
        this.FacilityAccountCode = opts.FacilityAccountCode || '';
        this.CreaterId = opts.CreaterId || '';
        this.Facility = new EaFacility(opts.Facility) || new EaFacility();
    }
}


//============ wy.core.services.propertyfacility.WYFacilityEx =============

export class WYFacilityEx extends DataPacket {
    constructor(opts= {}){
        super();
        this.UserTime = opts.UserTime || null;
        this.GLKeyId = opts.GLKeyId || '';
        this.MaintainCycle = opts.MaintainCycle || '';
        this.DeviceNum = opts.DeviceNum || null;
        this.DeviceRemark = opts.DeviceRemark || '';
        this.FirstNumber = opts.FirstNumber || '';
        this.PersonLiable = opts.PersonLiable || '';
        this.FirstMoney = opts.FirstMoney || null;
        this.RegisterNumber = opts.RegisterNumber || '';
        this.NowMoney = opts.NowMoney || null;
    }
}


//============ fixf.core.services.facility.EaFacility =============

export class EaFacility extends DataPacket {
    constructor(opts= {}){
        super();
        this.DateDue = opts.DateDue || null;
        this.RelationType = opts.RelationType || null;
        this.EaFacilityTypeId = opts.EaFacilityTypeId || '';
        this.UnitName = opts.UnitName || '';
        this.FacilityType = opts.FacilityType || '';
        this.KeyId = opts.KeyId || '';
        this.RelationId = opts.RelationId || '';
        this.Enabled = opts.Enabled || false;
        this.Deleted = opts.Deleted || false;
        this.Company = opts.Company || '';
        this.FacilityName = opts.FacilityName || '';
        this.Position = opts.Position || '';
        this.Brand = opts.Brand || '';
        this.ObjType = opts.ObjType || null;
        this.Remarks = opts.Remarks || '';
        this.CreateDate = opts.CreateDate || null;
    }
}

