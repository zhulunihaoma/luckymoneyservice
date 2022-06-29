'use strict';

const Controller = require('egg').Controller;
const BaseController = require('./base_controller');
// 定义创建接口的请求参数规则
const createRule = {
    unionId: 'string',
    moneyNum: 'string',
    count: 'string',
    question: 'string',
    pics: 'string',
    date: 'string',
  };
class LuckymoneyController extends BaseController {
  async create() {
    const ctx = this.ctx;
    // 校验 `ctx.request.body` 是否符合我们预期的格式
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    console.log('ctx.request.body: ', ctx.request.body);
    ctx.validate(createRule, ctx.request.body);
    ctx.request.body.status = '0';
    // 调用 service 创建一个 topic
    const id = await ctx.service.luckymoney.create(ctx.request.body);
    // 设置响应体和状态码
    this.success(id);
    // ctx.body = {
    //     status: 200,
    //     data: id,
    // };
    // ctx.status = 201;

  }
  async index() {
    const ctx = this.ctx;
    // 校验 `ctx.request.body` 是否符合我们预期的格式
    const res = await ctx.service.luckymoney.index(ctx.request.body);
    // 设置响应体和状态码
    ctx.body = {
      status:200,
      data:res
    }
    ctx.status = 201;

  }
}

module.exports = LuckymoneyController;
