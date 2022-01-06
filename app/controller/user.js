'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async index(){
        const {ctx, app} = this;
        const res = await app.mysql.select('users',{
            where:{age:18},
            columns:['id','age'],
            limit:5,
            offset: (pagenum -1) * 5

        });
        // count 条件查找数量

        ctx.body = res;
    }
  async create() {
    const {ctx, app} = this;
    const data = ctx.request.body;
    const row = {
        name: data.name,
        age: data.age
    };
    const res = await app.mysql.insert('users',row);

    ctx.body = res;
  }
  async update(){
    const {ctx, app} = this;
    const data = ctx.request.body;
    const row = {
        // id: ctx.params.id,
        name: data.name,
        age: data.age,
    }
    const option = {
        where:{age:18}
    }
    const res = await app.mysql.update('users',row,option);
    ctx.body = res;
}
    async destroy() {
        const {ctx, app} = this;
        const {id} = ctx.params;
        const res = await app.mysql.delete('users',{id});
        ctx.body = res;
    }
}


module.exports = UserController;
