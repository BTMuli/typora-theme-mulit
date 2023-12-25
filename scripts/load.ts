/**
 * @file script/load.ts
 * @description 加载脚本
 * @since 1.0.0
 */

import * as fs from "fs-extra";
import * as os from "os";
import getThemeDir from "../utils/getThemeDir";
import { path } from "app-root-path";

// 获取当前系统类型
const platform = os.platform();
// 如果是 windows 系统
const themeDir = getThemeDir(platform);
if (!themeDir) {
  console.log("当前系统不支持");
  process.exit(1);
}
// 检测目录是否存在
if (!fs.existsSync(themeDir)) {
  console.log("未找到 Typora 主题目录");
  process.exit(1);
}
// 将本地目录复制到typora主题目录
fs.copySync(path + "/src", themeDir, {
  overwrite: true,
  errorOnExist: false,
});
console.log("加载成功");
