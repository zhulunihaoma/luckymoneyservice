'use strict';

const Controller = require('egg').Controller;
const sha1 = require('sha1');
const config = {
    wechat: {
      appID: 'wx504a8df23205531f', //填写你自己的appID
      appSecret: '',  //填写你自己的appSecret
      token: 'eastzebra'  //填写你自己的token
    }
  }
class WechatserviceController extends Controller {
  async identify() {
    const token = config.wechat.token
    const signature = ctx.request.query.signature
    const nonce = ctx.request.query.nonce
    const timestamp = ctx.request.query.timestamp
    const echostr = ctx.request.query.echostr
    let str = [token, timestamp, nonce].sort().join('')
    const sha = sha1(str)
    ctx.body = sha === signature ? echostr + '' : 'failed'
  }
}

module.exports = WechatserviceController;
