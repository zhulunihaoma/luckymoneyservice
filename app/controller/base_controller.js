'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  success(data) {
    console.log('data========: ', data);
    this.ctx.body = {
        success: true,
        data
    }
  }
  inValidate(msg){
    msg = msg || '系统错误，请重试';
    this.ctx.throw(400, msg);
  }
  notFound(msg){
      msg = msg || '系统错误，请重试';
      this.ctx.throw(404, msg);
  }
}

module.exports = BaseController;
