#!/usr/bin/env node

// 请求 commander 库
import  {program}  from 'commander';
import fs from 'fs-extra';
// 请求 lib/update.js
import  updateChk from '../lib/update.js';
// 请求 lib/init.js
import  initProject from '../lib/init.js';

const example = () => {
	try {
		const packageObj =  fs.readJsonSync('./package.json')
		return packageObj.version
	} catch (err) {
		console.error(err)
	}
}

// 从 package.json 文件中请求 version 字段的值，-v和--version是参数
program.version(example(), '-v, --version')

// upgrade 检测更新
program
	// 声明的命令
	.command('upgrade')
    // 描述信息，在帮助信息时显示
	.description("Check the js-plugin-cli version.")
	.action(() => {
    	// 执行 lib/update.js 里面的操作
		updateChk()
	})

	// init 初始化项目
program
.name('asura-cli')
.usage('<commands> [options]')
.command('init <project_name>')
.description('Create a javascript plugin project.')
.action(project => {
	initProject(project)
})

// 解析命令行参数
program.parse(process.argv)