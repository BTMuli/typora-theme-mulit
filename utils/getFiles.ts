/**
 * @file utils/getFiles.ts
 * @description 获取文件路径
 * @since 1.0.0
 */

import * as fs from "fs-extra";

/**
 * @description 获取文件路径
 * @since 1.0.0
 * @function getFiles
 * @param {string} path - 文件路径
 * @returns {string[]} 文件路径
 */
export default function getFiles(path: string): string[] {
  const files = fs.readdirSync(path);
  const paths = [];
  files.forEach((file) => {
    const filePath = path + "/" + file;
    if (fs.statSync(filePath).isDirectory()) {
      paths.push(...getFiles(filePath));
    } else {
      paths.push(filePath);
    }
  });
  return paths;
}
