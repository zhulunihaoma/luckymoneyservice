'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.resources('user','/api/posts',controller.user);
  router.resources('/user',controller.user);
  // 上传图片/头像/封面
  router.post('/tool', controller.tool.saveAvatar);
  router.post('/wechatservice_identify', controller.wechatservice.identify);

};
