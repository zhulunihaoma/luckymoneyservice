'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      "code":200,
      "msg":"请求成功",
      "data":[
        {
          "name":"苹果1",
          "value": 1000879,
          "url":"xxx"
        },
        {
          "name":"三星1",
          "value": 1000879,
          "url":"xxx"
        },
        {
          "name":"小米1",
          "value": 1231213,
          "url":"xxx"
        },
        {
          "name":"oppo",
          "value": 3242331,
          "url":"xxx"
        },
        {
          "name":"抖音",
          "value": 213143,
          "url":"xxx"
        }
      ]
    };
  }
}

module.exports = HomeController;
