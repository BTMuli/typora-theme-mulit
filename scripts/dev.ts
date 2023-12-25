/**
 * @file scripts/dev.ts
 * @description 开发脚本
 * @since 1.0.0
 */

import * as chokidar from "chokidar";
import loadTheme from "../utils/loadTheme";

const watcher = chokidar.watch("../src", {
  persistent: true,
});

watcher.on("change", (path) => {
  console.log("change", path);
  const res = loadTheme();
  if (!res) {
    console.log("加载失败");
    process.exit(1);
  }
});
