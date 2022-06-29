'use strict';

const Service = require('egg').Service;

class LuckymoneyService extends Service {
  async create(data) {
    const {ctx, app} = this;
    const row = {
        unionId: data.unionId,
        moneyNum: data.moneyNum,
        count: data.count,
        question: data.question,
        pics: data.pics,
        date: data.date,
        status: data.status
    };
    const res = await app.mysql.insert('luckymoney',row);
    return res.insertId;
  }
  async index(data) {
    const {ctx, app} = this;
    const res = await app.mysql.select('luckymoney',{
        where:{unionId:data.unionId, status:data.status}
    });
    return res;
  }
}

module.exports = LuckymoneyService;
