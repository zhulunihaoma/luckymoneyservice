'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
    router.get('/datalist', controller.home.index);

  // router.resources('user','/api/posts',controller.user);
  router.resources('/api/user',controller.user);
  // 上传图片/头像/封面
  router.post('/api/tool', controller.tool.saveAvatar);
  router.post('/api/wechatservice_identify', controller.wechatservice.identify);
  router.resources('luckymoney', '/api/luckymoney', app.controller.luckymoney);
};
