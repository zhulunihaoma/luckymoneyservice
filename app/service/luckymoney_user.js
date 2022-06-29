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
        date: data.date
    };
    const res = await app.mysql.insert('luckymoney_user',row);
    return res.insertId;
  }
  async index(data) {
    const {ctx, app} = this;
    const res = await app.mysql.select('luckymoney_user',{
        where:{unionId:data.unionId, status:data.status}
    });
    return res;
  }
}

module.exports = LuckymoneyService;
