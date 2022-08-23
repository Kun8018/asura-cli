// 请求 fs-extra 库
import fse from 'fs-extra';

import path, {dirname} from 'node:path';

import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

// 声明配置文件内容
const jsonConfig = {
  "name": "asura-cli",
  "mirror": "https://zpfz.vercel.app/download/files/frontend/tpl/js-plugin-cli/"
}

// 拼接 config.json 完整路径
const configPath = path.resolve(__dirname,'../config.json')

async function defConfig() {
  try {
  	// 利用 fs-extra 封装的方法，将 jsonConfig 内容保存成 json 文件
    await fse.outputJson(configPath, jsonConfig)
  } catch (err) {
    console.error(err)
    process.exit()
  }
}

// 将上面的 defConfig() 方法导出
export default defConfig