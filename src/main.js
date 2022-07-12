const { Command } = require("commander");

const deref = require("./deref.js");

const program = new Command();
program
    .name("postprocess")
    .description("Postprocess an OpenAPI document for ReDoc")
    .version("0.1.0");
program.command("deref")
    .description("Use $RefParser to dereference a JSON schema")
    .argument("<in-filename>", "Input JSON file")
    .argument("[out-filename]", "Output JSON file")
    .action(deref);

program.parse();
