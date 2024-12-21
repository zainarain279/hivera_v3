import chalk from "chalk";

export function logger(message, level = "info", prefix = "", value = "") {
  //const now = new Date().toISOString();
  const colors = {
    info: chalk.blue,
    warn: chalk.yellow,
    error: chalk.red,
    success: chalk.green,
    debug: chalk.magenta,
  };
  const color = colors[level] || chalk.white;
  console.log(color(`[${level.toUpperCase()}]${prefix ? `[${prefix}]` : ""}${message}`), chalk.green(value));
}
