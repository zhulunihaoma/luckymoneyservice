'use strict';

const Controller = require('egg').Controller;
const BaseController = require('./base_controller');

class UserController extends BaseController {
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
    // ctx.validate({ id: 'id' }); // will throw if invalid
    const errors = app.validator.validate({
        nickName  : {type: 'string', required: true, defValue: '', desc: '用户昵称'},
        avatarUrl  : {type: 'string', required: true, defValue: '', desc: 'avatarUrl'},
        gender  : {type: 'string', required: true, defValue: '', desc: 'gender'},
        province  : {type: 'string', required: true, defValue: '', desc: 'province'},
        city  : {type: 'string', required: true, defValue: '', desc: 'city'},
        country  : {type: 'string', required: true, defValue: '', desc: 'country'},
        unionId  : {type: 'int', required: true, defValue: '', desc: 'unionId'},
 }, ctx.request.body);
    console.log('errors=====: ', errors);
    if(errors){
        this.inValidate(errors[0].field + errors[0].message);
    }else{
        const data = ctx.request.body;
        const row = {
            nickName: data.nickName,
            avatarUrl: data.avatarUrl,
            gender: data.gender,
            province: data.province,
            city: data.city,
            country: data.country,
            unionId: data.unionId
        };
        const res = await app.mysql.insert('users',row);

        ctx.body = res;
    }
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
