/**
 * @file utils/loadTheme.ts
 * @description 加载脚本
 * @since 1.0.0
 */

import * as fs from "fs-extra";
import * as os from "os";
import getThemeDir from "../utils/getThemeDir";
import { path } from "app-root-path";

/**
 * @description 加载脚本
 * @since 1.0.0
 * @function loadTheme
 * @returns {boolean} 是否加载成功
 */
export default function loadTheme(): boolean {
  const platform = os.platform();
  const themeDir = getThemeDir(platform);
  if (!themeDir) return false;
  if (!fs.existsSync(themeDir)) return false;
  fs.copySync(path + "/src", themeDir, {
    overwrite: true,
    errorOnExist: false,
  });
  return true;
}
