'use strict';
const path = require('path');

// 开发者自己的模块定义配置
// configList 是必须的
const configList = [
    [ 'test_interface_0.i', 'jsb_your_module_interface_0_auto.cpp' ],
    [ 'test_interface_1.i', 'jsb_your_module_interface_1_auto.cpp' ],
    // ......
];

const projectRoot = path.resolve(path.join(__dirname, '..', '..'));
// interfaceDir 是可选的
const interfacesDir = path.join(projectRoot, 'tools', 'swig-config');
// bindingsOutDir 是可选的
const bindingsOutDir = path.join(projectRoot, 'native', 'engine', 'common', 'Classes', 'bindings', 'auto');

module.exports = {
    // interfacesDir, // 可选参数, 如果没有指定，configList 中的路径必须为绝对路径或者相对于当前 swig-config.js 的相对路径
    // bindingsOutDir, // 可选参数，如果没有指定, configList 中的路径必须为绝对路径或者相对于当前 swig-config.js 的相对路径
    configList // 必填参数
};