import request from '../static/js/request.js'
// import Qs from 'qs';

/**
 * ImageOcr
 */
export class ImageOcr {
  constructor () {
    this.baseurl = 'ImageOcr.assx/'
  }

  /**
     *
     *
     */
  GetVersion () {
    return request.post(this.baseurl + 'GetVersion', Qs.stringify({ }))
  }

  /**
     *
     * mediaId:String, face:boolean
     */
  OcrIdCardWxImage (mediaId, face) {
    return request.post(this.baseurl + 'OcrIdCardWxImage', Qs.stringify({ mediaId: mediaId, face: face }))
  }
}
