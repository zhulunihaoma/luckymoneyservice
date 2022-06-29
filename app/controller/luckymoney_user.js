'use strict';

const Controller = require('egg').Controller;
// 定义创建接口的请求参数规则
const createRule = {
    unionId: 'string',
    moneyNum: 'string',
    count: 'string',
    question: 'string',
    pics: 'string',
    date: 'string',
  };
class Luckymoney_userController extends Controller {
  async create() {
    const ctx = this.ctx;
    // 校验 `ctx.request.body` 是否符合我们预期的格式
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    // ctx.validate(createRule, ctx.request.body);

    // 调用 service 创建一个 topic
    const id = await ctx.service.luckymoney_user.create(ctx.request.body);
    // 设置响应体和状态码
    ctx.body = {
        luckymoneyId: id,
    };
    ctx.status = 201;

  }
  async index() {
    const ctx = this.ctx;
    // 校验 `ctx.request.body` 是否符合我们预期的格式
    const res = await ctx.service.luckymoney_user.index(ctx.request.body);
    // 设置响应体和状态码
    ctx.body = res;
    ctx.status = 201;

  }
}

module.exports = Luckymoney_userController;
