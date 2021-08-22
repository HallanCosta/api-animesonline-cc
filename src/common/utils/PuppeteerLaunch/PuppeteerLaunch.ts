import path from 'path';

export const launchConfig = {
  // executablePath: path.join("/", "mnt", "c", "Program Files (x86)", "Microsoft", "Edge", "Application", "msedge.exe"),
  // executablePath: path.join("/", "mnt", "c", "chrome-win", "chrome.exe"),
  headless: true,
  args: ["--no-sandbox"]
}