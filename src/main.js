const { Command } = require("commander");

const deref = require("./deref.js");
const importMd = require("./importmd.js");

const program = new Command();
program
    .name("postprocess")
    .description("Postprocess a OpenAPI document for ReDoc")
    .version("0.1.0");
program.command("deref")
    .description("Use $RefParser to dereference a JSON schema")
    .argument("<in-filename>", "Input JSON file")
    .argument("<out-filename>", "Output JSON file")
    .action(deref);
program.command("importMd")
    .description("Add a markdown $Ref to JSON info.description")
    .argument("<in-filename>", "Target JSON file")
    .argument("<path>", "markdown path to ref")
    .action(importMd);

program.parse();
