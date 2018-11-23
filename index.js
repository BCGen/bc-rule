#!/usr/bin/env node
const REPO_NAME = "BCGen/bc-rule";

const editJsonFile = require("edit-json-file");
const program = require("commander");
const shell = require("shelljs");

program
  .version("0.1.0")
  .action(() => {
    console.log("初始化package.json...");
    shell.exec(`npm init -y`);
    console.log("package.json初始化完成。");
    console.log("安裝相關套件...");
    shell.exec(`npm i -D ${REPO_NAME}`);
    console.log("設定檔安裝完成。");
    console.log("複製設定檔至工作區...");
    shell.cp("-Rf", "./node_modules/bc-rule/vscode/.vscode", "./");
    shell.cp("-Rf", "./node_modules/bc-rule/vscode/.editorconfig", "./");
    console.log("複製完成。");
    console.log("編輯package.json...");
    writePackageJson();
    console.log("感謝您的耐心等待");
    console.log("請重新啓動vscode後，安裝右下方推薦的套件完成設定。");
  })
  .parse(process.argv);

function writePackageJson() {
  let file = editJsonFile("package.json", {
    autosave: true
  });

  file.set("eslintConfig", {
    extends: "bc"
  });

  file.set("stylelint", {
    extends: "stylelint-config-bc"
  });
}
