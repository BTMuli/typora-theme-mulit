/**
 * @file utils/getThemeDir.ts
 * @description 获取主题目录
 * @since 1.0.0
 */

import * as os from "node:os";

/**
 * @description 获取主题目录
 * @since 1.0.0
 * @function getThemeDir
 * @see https://support.typoraio.cn/About-Themes/
 * @param {string} platform - 当前系统类型
 * @returns {string|false} 主题目录
 */
export default function getThemeDir(platform: string): string | false {
  // 如果是 windows 系统
  if (platform === "win32") {
    return os.homedir() + "\\AppData\\Roaming\\Typora\\themes";
  }
  // 如果是 mac 系统
  if (platform === "darwin") {
    return (
      os.homedir() + "/Library/Application Support/abnerworks.Typora/themes/"
    );
  }
  // 其他系统
  return false;
}
